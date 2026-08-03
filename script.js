document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(".content-section, .footer-section");
    const navItems = document.querySelectorAll(".nav-item");
    const siteName = document.getElementById("siteName");

    const observerOptions = {
        root: null,
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0
    };


    const observerCallback = (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");

                console.log("Current section:", currentId);


                // Active navbar link
                navItems.forEach((item) => {
                    item.classList.remove("active");

                    if (item.getAttribute("href") === `#${currentId}`) {
                        item.classList.add("active");
                    }
                });


                // Hide name on ABOUT section
                if (currentId === "about") {
                    siteName.classList.remove("show");
                } 
                else {
                    siteName.classList.add("show");
                }

            }

        });

    };


    const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
    );


    sections.forEach((section) => {
        observer.observe(section);
    });


    // Initial page load: hide name
    if (window.scrollY === 0) {
        siteName.classList.remove("show");
    }

});
