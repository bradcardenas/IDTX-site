//================================
// Scroll Reveal
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15,
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

// ======================================
// Sticky Header
// ======================================

const siteHeader = document.querySelector(".site-header");

function updateHeader() {
    if (window.scrollY > 80) {
        siteHeader.classList.add("is-scrolled");
    } else {
        siteHeader.classList.remove("is-scrolled");
    }
}

window.addEventListener("scroll", updateHeader);

updateHeader();

// ====================================
// Active Navigation Highlight
// ====================================

const sections = document.querySelectorAll(
    "#services, #work, #about, #contact"
);

const navLinks = document.querySelectorAll(
    '.site-header nav a[href^="#"]'
);

function updateActiveNavigation() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }

    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();