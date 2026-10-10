// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            event.preventDefault();
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// Small scroll effect for navbar

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 25px rgba(0, 0, 0, 0.25)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


// Current year in footer

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p:last-child");

if (footerText) {
    footerText.textContent =
        `© ${year} Manish Chahar. All Rights Reserved.`;
}