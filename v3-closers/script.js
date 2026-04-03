lucide.createIcons();
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    // Kinetic Typography Slide-up
    gsap.to(".kinetic-text", {
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
    });

    // Subtext fade in
    gsap.to(".kinetic-subtext", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
    });

    // VSL Pop in
    gsap.to(".vsl-reveal", {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 0.8,
        stagger: 0.2,
        ease: "elastic.out(1, 0.7)"
    });

    // Feature Cards
    gsap.to(".feature-card", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
            trigger: ".feature-card",
            start: "top 85%"
        }
    });

});
