// FarmFusion Waitlist Landing Page JavaScript - Updated with Dynamic Animations

document.addEventListener("DOMContentLoaded", function() {
    // Initialize Particles.js for background effects
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#4CAF50"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#4CAF50",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // Initialize 3D Animation in Hero Section (if THREE is defined)
    // ... (3D animation code remains the same) ...

    // GSAP Animations for scroll effects (if gsap and ScrollTrigger are defined)
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
        // ... (GSAP animation code remains the same) ...
    }

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const navUl = document.querySelector("nav ul");

    if (mobileMenuToggle && navUl) {
        mobileMenuToggle.addEventListener("click", () => {
            mobileMenuToggle.classList.toggle("active");
            navUl.classList.toggle("mobile-active");
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll("nav ul li a").forEach(link => {
            link.addEventListener("click", () => {
                if (navUl.classList.contains("mobile-active")) {
                    mobileMenuToggle.classList.remove("active");
                    navUl.classList.remove("mobile-active");
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener("click", function(event) {
            const isClickInsideNav = navUl.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (navUl.classList.contains("mobile-active") && !isClickInsideNav && !isClickOnToggle) {
                mobileMenuToggle.classList.remove("active");
                navUl.classList.remove("mobile-active");
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open before scrolling
                if (navUl && navUl.classList.contains("mobile-active")) {
                    mobileMenuToggle.classList.remove("active");
                    navUl.classList.remove("mobile-active");
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: "smooth"
                });
            }
        });
    });

    // FAQ Accordion - Updated Logic
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        if (question) { // Check if question element exists
            question.addEventListener("click", () => {
                const currentlyActive = item.classList.contains("active");

                // Close all other items first
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove("active");
                    }
                });

                // Toggle the current item
                if (!currentlyActive) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });
        }
    });

    // Form Submission - Updated to send data to backend
    const waitlistForm = document.getElementById("waitlist-form");
    const formSuccess = document.getElementById("form-success");
    const formError = document.createElement("div"); // Create an error message element
    formError.style.color = "red";
    formError.style.marginTop = "1rem";
    formError.style.textAlign = "center";
    waitlistForm.parentNode.insertBefore(formError, formSuccess); // Insert error message div before success message

    if (waitlistForm && formSuccess) {
        waitlistForm.addEventListener("submit", async function(e) {
            e.preventDefault();
            formError.textContent = ""; // Clear previous errors
            const submitButton = waitlistForm.querySelector("button[type=\"submit\"]");
            submitButton.disabled = true; // Disable button during submission
            submitButton.textContent = "Submitting..."; // Change button text

            const formData = new FormData(waitlistForm);
            const formDataObj = {};
            formData.forEach((value, key) => { formDataObj[key] = value; });

            try {
                const response = await fetch("/api/waitlist", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formDataObj),
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    // Show success message
                    waitlistForm.style.display = "none";
                    formSuccess.style.display = "block";
                    // Scroll to success message
                    formSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
                } else {
                    // Show error message
                    formError.textContent = result.error || "Submission failed. Please try again.";
                    submitButton.disabled = false; // Re-enable button
                    submitButton.textContent = "Join Waitlist"; // Restore button text
                }
            } catch (error) {
                console.error("Form submission error:", error);
                formError.textContent = "An error occurred. Please check your connection and try again.";
                submitButton.disabled = false; // Re-enable button
                submitButton.textContent = "Join Waitlist"; // Restore button text
            }
        });
    }

    // Sticky Header
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // Pulse animation for CTA buttons (if gsap is defined)
    if (typeof gsap !== "undefined") {
        const pulseButtons = document.querySelectorAll(".pulse"); // Use .pulse class added to buttons
        pulseButtons.forEach(button => {
            gsap.to(button, {
                scale: 1.05,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });
    }
});

