
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

document.querySelectorAll(".skills-box .btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const box = btn.parentElement;
    box.classList.toggle("expanded");

    // Optional: Change button text
    btn.textContent = box.classList.contains("expanded") ? "Read Less" : "Read More";
  });
});

const aboutBtn = document.querySelector(".about .read-more-btn");
const aboutMoreText = document.querySelector(".about .more-text");
const aboutDots = document.querySelector(".about .dots");

aboutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  aboutMoreText.classList.toggle("show");
  aboutDots.classList.toggle("hide");

  aboutBtn.textContent = aboutMoreText.classList.contains("show")
    ? "Read Less"
    : "Read More";
});

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
const typed = new Typed(".multiple-text", {
  strings: ["Student Developer", "IT Student",],
  typeSpeed: 10,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});