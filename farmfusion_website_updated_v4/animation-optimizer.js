// Animation Performance Optimization for FarmFusion Landing Page

// Intersection Observer to only animate elements when they're visible
document.addEventListener('DOMContentLoaded', function() {
    // Create an observer for section transitions
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Unobserve after animation is triggered to save resources
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px'
    });
    
    // Observe all section-transition elements
    document.querySelectorAll('.section-transition').forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Optimize animations for low-power devices
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        // Apply simplified animations for users who prefer reduced motion
        document.body.classList.add('reduced-motion');
    }
    
    // Detect low-end devices based on navigator.hardwareConcurrency
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
    if (isLowEndDevice) {
        document.body.classList.add('low-end-device');
    }
    
    // Throttle scroll events for better performance
    let lastScrollTime = 0;
    const scrollThreshold = 50; // ms
    
    window.addEventListener('scroll', function() {
        const now = Date.now();
        if (now - lastScrollTime > scrollThreshold) {
            lastScrollTime = now;
            // Handle scroll-based animations here
            checkElementsInViewport();
        }
    }, { passive: true }); // Use passive listener for better scroll performance
    
    // Check which elements are in viewport and trigger animations
    function checkElementsInViewport() {
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .slide-in-down, .zoom-in, .bounce-in');
        
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isInViewport = (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
            
            if (isInViewport && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    }
    
    // Initial check for elements in viewport
    checkElementsInViewport();
    
    // Optimize GSAP animations
    if (typeof gsap !== 'undefined' && gsap.ticker) {
        // Reduce GSAP ticker frequency on low-end devices
        if (isLowEndDevice) {
            gsap.ticker.fps(30); // Reduce from default 60fps to 30fps
        }
    }
    
    // Lazy load images for better performance
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
    
    // Debounce resize events for better performance
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Handle resize-based adjustments here
        }, 100);
    }, { passive: true });
    
    // Optimize particle effects if they exist
    const particlesJS = document.getElementById('particles-js');
    if (particlesJS && window.particlesJS && isLowEndDevice) {
        // Reduce particle count for low-end devices
        window.particlesJS.load('particles-js', {
            particles: {
                number: {
                    value: 30 // Reduced from default
                },
                opacity: {
                    value: 0.3
                }
            }
        });
    }
});
