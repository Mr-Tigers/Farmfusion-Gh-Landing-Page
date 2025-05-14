// FarmFusion Waitlist Backend Server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Parser } = require("json2csv"); // Import json2csv Parser

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../")));

// Initialize SQLite database
const dbPath = path.join(__dirname, "waitlist.db");
const db = new sqlite3.Database(dbPath);

// Create/Update tables if they don"t exist
db.serialize(() => {
  // Check and migrate waitlist_submissions table if needed
  db.get("PRAGMA table_info(waitlist_submissions)", (err, columns) => {
      let needsMigration = false;
      if (!err && columns) { // Check if old table exists
          const emailColumn = columns.find(col => col.name === "email");
          // Check if email column has NOT NULL or UNIQUE constraint
          db.all(`PRAGMA index_list(waitlist_submissions)`, (indexErr, indexes) => {
              if (indexErr) {
                  console.error("Error checking indexes:", indexErr);
                  // Assume migration is needed if checks fail to be safe
                  needsMigration = true; 
              } else {
                  const uniqueEmailIndex = indexes.some(index => index.unique && index.origin === "c" && index.name.includes("email")); // Check for unique index created by constraint
                  if (emailColumn && (emailColumn.notnull === 1 || uniqueEmailIndex)) {
                      needsMigration = true;
                  }
              }

              if (needsMigration) {
                  console.log("Detected old schema for waitlist_submissions. Migrating...");
                  db.serialize(() => {
                      db.run("BEGIN TRANSACTION");
                      // 1. Create new table
                      db.run(`
                          CREATE TABLE IF NOT EXISTS waitlist_submissions_new (
                              id INTEGER PRIMARY KEY AUTOINCREMENT,
                              name TEXT NOT NULL,
                              phone_number TEXT NOT NULL,
                              email TEXT, -- Optional email
                              role TEXT NOT NULL,
                              country TEXT NOT NULL,
                              region TEXT NOT NULL,
                              source TEXT NOT NULL,
                              message TEXT,
                              submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
                          )
                      `, (createErr) => {
                          if (createErr) {
                              console.error("Error creating new table:", createErr);
                              db.run("ROLLBACK");
                              return;
                          }

                          // 2. Copy data
                          db.run(`
                              INSERT INTO waitlist_submissions_new (id, name, phone_number, email, role, country, region, source, message, submitted_at)
                              SELECT id, name, phone_number, email, role, country, region, source, message, submitted_at
                              FROM waitlist_submissions
                          `, (copyErr) => {
                              if (copyErr) {
                                  console.error("Error copying data:", copyErr);
                                  db.run("ROLLBACK");
                                  return;
                              }

                              // 3. Drop old table
                              db.run("DROP TABLE waitlist_submissions", (dropErr) => {
                                  if (dropErr) {
                                      console.error("Error dropping old table:", dropErr);
                                      db.run("ROLLBACK");
                                      return;
                                  }

                                  // 4. Rename new table
                                  db.run("ALTER TABLE waitlist_submissions_new RENAME TO waitlist_submissions", (renameErr) => {
                                      if (renameErr) {
                                          console.error("Error renaming table:", renameErr);
                                          db.run("ROLLBACK");
                                          return;
                                      }

                                      db.run("COMMIT", (commitErr) => {
                                          if (commitErr) {
                                              console.error("Error committing migration transaction:", commitErr);
                                              db.run("ROLLBACK"); // Rollback on error
                                          } else {
                                              console.log("Database migration completed successfully.");
                                          }
                                      });
                                  });
                              });
                          });
                      });
                  });
              } else {
                   // If migration not needed (table doesn"t exist, or schema is already correct)
                   db.run(`
                      CREATE TABLE IF NOT EXISTS waitlist_submissions (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT NOT NULL,
                        phone_number TEXT NOT NULL,
                        email TEXT, -- Schema without constraints
                        role TEXT NOT NULL,
                        country TEXT NOT NULL,
                        region TEXT NOT NULL,
                        source TEXT NOT NULL,
                        message TEXT,
                        submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
                      )
                   `, (createErr) => {
                       if (createErr) {
                           console.error("Error creating table with new schema:", createErr);
                       } else {
                           console.log("waitlist_submissions table schema is up-to-date or table created.");
                       }
                   });
              }
          }); // End index check

      } else {
          // If table doesn"t exist, create it with the new schema
          db.run(`
              CREATE TABLE IF NOT EXISTS waitlist_submissions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                phone_number TEXT NOT NULL,
                email TEXT, -- Schema without constraints
                role TEXT NOT NULL,
                country TEXT NOT NULL,
                region TEXT NOT NULL,
                source TEXT NOT NULL,
                message TEXT,
                submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
              )
          `, (createErr) => {
              if (createErr) {
                  console.error("Error creating new table:", createErr);
              } else {
                  console.log("Created waitlist_submissions table with the new schema.");
              }
          });
      }
  }); // End table info check

  // Admin users table (remains the same)
  db.run(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create default admin user if none exists (remains the same)
  db.get("SELECT COUNT(*) as count FROM admin_users", (err, row) => {
    if (err) {
      console.error("Error checking admin users:", err);
      return;
    }

    if (row.count === 0) {
      // Create default admin user (username: farmfusionadmin, password: QWERTY123456.farmfusion2025)
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync("QWERTY123456.farmfusion2025", salt);

      db.run(
        "INSERT INTO admin_users (username, password) VALUES (?, ?)",
        ["farmfusionadmin", hashedPassword],
        function (err) {
          if (err) {
            console.error("Error creating default admin:", err);
          } else {
            console.log("Default admin user created");
          }
        }
      );
    }
  });
}); // End db.serialize

// JWT Secret (remains the same)
const JWT_SECRET = process.env.JWT_SECRET || "farmfusion-secret-key";

// Middleware to verify JWT token (remains the same)
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    // Allow access to admin login page without token
    if (req.path === "/admin" || req.path === "/api/admin/login") {
        return next();
    }
    return res.status(401).json({ error: "Access denied" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid or expired token" });
    }
    req.user = user;
    next();
  });
};

// Routes

// Submit to waitlist (Updated for optional email)
app.post("/api/waitlist", (req, res) => {
  const { name, phone_number, email, role, country, region, source, message } = req.body;

  // Validate required fields (Email is now optional)
  if (!name || !phone_number || !role || !country || !region || !source) { // Removed !email check
    return res.status(400).json({ error: "Missing required fields (Name, Phone, Role, Country, Region, Source)" });
  }

  // Insert into database
  db.run(
    "INSERT INTO waitlist_submissions (name, phone_number, email, role, country, region, source, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [name, phone_number, email || null, role, country, region, source, message || ""], // Use null if email is empty/undefined
    function (err) {
      if (err) {
        console.error("Error saving submission:", err);
        // UNIQUE constraint check is no longer needed for email
        return res.status(500).json({ error: "Failed to save submission" });
      }

      res.status(201).json({
        success: true,
        message: "Successfully joined waitlist",
        id: this.lastID,
      });
    }
  );
});

// Admin login (remains the same)
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  db.get(
    "SELECT * FROM admin_users WHERE username = ?",
    [username],
    (err, user) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Server error" });
      }

      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Compare password
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET,
        { expiresIn: "1h" } // Token expires in 1 hour
      );

      res.json({ token });
    }
  );
});

// Get all waitlist submissions (protected route - remains the same)
app.get("/api/admin/submissions", authenticateToken, (req, res) => {
  db.all("SELECT * FROM waitlist_submissions ORDER BY submitted_at DESC", (err, rows) => {
    if (err) {
      console.error("Error fetching submissions:", err);
      return res.status(500).json({ error: "Failed to fetch submissions" });
    }

    res.json({ submissions: rows });
  });
});

// Export waitlist submissions as CSV (protected route - remains the same)
app.get("/api/admin/submissions/export", authenticateToken, (req, res) => {
  db.all("SELECT id, name, phone_number, email, role, country, region, source, message, submitted_at FROM waitlist_submissions ORDER BY submitted_at DESC", (err, rows) => {
    if (err) {
      console.error("Error fetching submissions for export:", err);
      return res.status(500).json({ error: "Failed to fetch submissions for export" });
    }

    if (!rows || rows.length === 0) {
        return res.status(404).json({ error: "No submissions found to export." });
    }

    const fields = [
        { label: "ID", value: "id" },
        { label: "Name", value: "name" },
        { label: "Phone Number", value: "phone_number" },
        { label: "Email", value: "email" },
        { label: "Role", value: "role" },
        { label: "Country", value: "country" },
        { label: "Region", value: "region" },
        { label: "Source", value: "source" },
        { label: "Message", value: "message" },
        { label: "Submitted At", value: "submitted_at" },
    ];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(rows);

    res.header("Content-Type", "text/csv");
    res.attachment("farmfusion_waitlist_submissions.csv");
    res.send(csv);
  });
});


// Serve admin panel (remains the same)
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});

// Serve main index.html for all other routes (remains the same)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// Start server (remains the same)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});

// Handle process termination (remains the same)
process.on("SIGINT", () => {
  console.log("\nClosing database connection...");
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Database connection closed.");
    process.exit(0);
  });
});

