document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin; triggers when elements are in view
        threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate"); // Add class to start animation
            } else {
                entry.target.classList.remove("animate"); // Remove class to reset animation
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Select all elements to observe
    const elementsToAnimate = document.querySelectorAll("#heading1, #image1, .box");
    elementsToAnimate.forEach(element => {
        observer.observe(element); // Observe each element
    });
});
