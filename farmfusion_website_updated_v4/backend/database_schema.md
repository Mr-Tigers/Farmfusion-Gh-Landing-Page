# Database Schema for Waitlist Submissions

This document outlines the schema for the SQLite database table used to store waitlist submissions from the FarmFusion landing page.

## Table: `waitlist_submissions`

This table stores the information submitted through the waitlist form.

### Columns

*   `id` (INTEGER): The primary key for the table. Automatically increments for each new submission.
*   `name` (TEXT): The full name of the person submitting the form. This field is required (NOT NULL).
*   `phone_number` (TEXT): The phone number of the person submitting the form. This field is required (NOT NULL).
*   `email` (TEXT): The email address of the person submitting the form. This field is required and must be unique (NOT NULL, UNIQUE).
*   `role` (TEXT): The role selected by the user (e.g., "Farm aggregator", "Logistics Provider", "Buyer", "Other"). This field is required (NOT NULL).
*   `country` (TEXT): The country provided by the user. This field is required (NOT NULL).
*   `region` (TEXT): The region provided by the user. This field is required (NOT NULL).
*   `source` (TEXT): How the user heard about FarmFusion (e.g., "SMS", "Social Media", "Referral", "Search Engine", "Other"). This field is required (NOT NULL).
*   `message` (TEXT): Any additional information or message provided by the user. This field is optional.
*   `submitted_at` (DATETIME): The timestamp when the submission was recorded. Defaults to the current date and time (DEFAULT CURRENT_TIMESTAMP).

### SQL Definition

```sql
CREATE TABLE IF NOT EXISTS waitlist_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    role TEXT NOT NULL,
    country TEXT NOT NULL,
    region TEXT NOT NULL,
    source TEXT NOT NULL,
    message TEXT,
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

