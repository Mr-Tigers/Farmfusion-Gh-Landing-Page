// Page Transitions for FarmFusion Landing Page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP ScrollTrigger for section transitions
    gsap.registerPlugin(ScrollTrigger);
    
    // Smooth scroll functionality for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Add transition class to body to indicate page is transitioning
                document.body.classList.add('is-transitioning');
                
                // Smooth scroll with animation
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
                
                // Remove transition class after animation completes
                setTimeout(() => {
                    document.body.classList.remove('is-transitioning');
                }, 1000);
            }
        });
    });
    
    // Create scroll-triggered animations for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // Create a timeline for each section
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
        
        // Add section entrance animation
        tl.fromTo(section, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
    });
    
    // Parallax effect for background elements
    const parallaxElements = document.querySelectorAll('.hero-particles, .logistics-background, .circle');
    parallaxElements.forEach(element => {
        gsap.to(element, {
            y: () => (ScrollTrigger.maxScroll(window) * 0.15),
            ease: "none",
            scrollTrigger: {
                trigger: element.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5
            }
        });
    });
    
    // Create staggered animations for feature cards
    const featureCards = document.querySelectorAll('.feature-card, .logistics-feature');
    gsap.from(featureCards, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: featureCards[0].parentElement,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
    
    // Create staggered animations for process steps
    const processSteps = document.querySelectorAll('.process-step');
    gsap.from(processSteps, {
        opacity: 0,
        x: (i) => i % 2 === 0 ? -50 : 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: processSteps[0].parentElement,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
    
    // Add page transition overlay
    const transitionOverlay = document.createElement('div');
    transitionOverlay.className = 'page-transition-overlay';
    document.body.appendChild(transitionOverlay);
    
    // Handle page load transition
    window.addEventListener('load', () => {
        document.body.classList.add('page-loaded');
        setTimeout(() => {
            transitionOverlay.style.opacity = 0;
            setTimeout(() => {
                transitionOverlay.style.display = 'none';
            }, 500);
        }, 300);
    });
});
