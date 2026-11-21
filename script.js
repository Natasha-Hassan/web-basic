// Typed Text Animation
const typedTextSpan = document.querySelector(".typed-text");
const textArray = [
    "BS Software Engineering Student",
    "Front-End Developer",
    "AI / ML Enthusiast",
    "Generative AI Explorer",
    "Software Engineering Student"
];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 505);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, 1000);
});

// Smooth Scrolling & Active Nav Links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Certificate Modal Image Viewer Functions
function openModal(title, imageSrc) {
    const modal = document.getElementById("certModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    
    modalTitle.textContent = title;
    modalImage.src = imageSrc;
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("certModal");
    modal.style.display = "none";
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    const modal = document.getElementById("certModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}