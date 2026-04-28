document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Reveal Animation
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // 2. Simple Mouse Follow Effect for the background blobs
    const purpleBlob = document.querySelector('.bg-shape-purple');
    const greenBlob = document.querySelector('.bg-shape-green');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        // Subtle movement inverse to mouse position
        if (purpleBlob && greenBlob) {
            purpleBlob.style.transform = `translate(${x * -30}px, ${y * -30}px)`;
            greenBlob.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        }
    });
});
