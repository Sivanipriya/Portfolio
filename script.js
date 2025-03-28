document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".list");

  menu.onclick = () => {
    menu.classList.toggle("fa-xmark"); // Toggle the class for icon change
    navbar.classList.toggle("active"); // Toggle the class to show/hide menu
  };

  // Smooth scrolling logic
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".list a");

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionTop = current.offsetTop - 50;
      const sectionHeight = current.offsetHeight;
      const sectionId = current.getAttribute("id");
      const navLink = document.querySelector(`.list a[href="#${sectionId}"]`);

      if (
        navLink &&
        scrollY >= sectionTop &&
        scrollY < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => link.classList.remove("active-link"));
        navLink.classList.add("active-link");
      } else if (navLink) {
        navLink.classList.remove("active-link");
      }
    });
  }

  window.addEventListener("scroll", () => {
    scrollActive();
    let header = document.querySelector(".head");
    header.classList.toggle("sticky", window.scrollY > 100);
  });

  ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".home-content,.head", { origin: "top" });
  ScrollReveal().reveal(".home-img, .projects-box, .contact form", {
    origin: "bottom",
  });
  ScrollReveal().reveal(".contact h1,.img,.s1,.s3", { origin: "left" });
  ScrollReveal().reveal(".contact p, .about-content,.s2", { origin: "right" });

  const typed = new Typed(".multiple-text", {
    strings: ["FullStack Developer", "Programmer"],
    typeSpeed: 78,
    backSpeed: 78,
    backDelay: 1000,
    loop: true,
  });
  document.getElementById("project-1").addEventListener("click", () => {
    window.location.href =
      "https://sivanipriya.github.io/Burger-Website-Responsive/";
  });

  document.getElementById("project-7").addEventListener("click", () => {
    window.location.href =
      "https://sivanipriya.github.io/Weather-app-Using-react/";
  });

  document.getElementById("project-2").addEventListener("click", () => {
    window.location.href =
      "https://sivanipriya.github.io/Saffron-Clone-Website/";
  });

  document.getElementById("project-3").addEventListener("click", () => {
    window.location.href =
      "https://sivanipriya.github.io/NLW-CARE-responsive-website/";
  });

  document.getElementById("project-4").addEventListener("click", () => {
    window.location.href = "https://sivanipriya.github.io/Expense_Tracker/";
  });
});
