// ── Navbar scroll effect ──────────────────────
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ── Mobile menu toggle ───────────────────────
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close mobile menu on link click
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// ── Scroll reveal ────────────────────────────
const revealElements = document.querySelectorAll(
  ".section-title, .about-grid, .skill-card, .project-card, .contact-content"
);

revealElements.forEach((el) => el.classList.add("reveal"));

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("DOMContentLoaded", revealOnScroll);

// ── Active nav link highlight ────────────────
const sections = document.querySelectorAll("section[id]");

const highlightNav = () => {
  const scrollY = window.scrollY + 120;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.style.color =
        scrollY >= top && scrollY < top + height
          ? "var(--color-accent)"
          : "";
    }
  });
};

window.addEventListener("scroll", highlightNav);

// ── Contact form ─────────────────────────────
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  console.log("Form submitted:", data);

  // Show success feedback
  const btn = form.querySelector("button");
  const original = btn.textContent;
  btn.textContent = "Mensagem Enviada!";
  btn.style.background = "var(--color-accent)";
  btn.style.borderColor = "var(--color-accent)";
  btn.style.color = "#0a0a0f";

  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = "";
    btn.style.borderColor = "";
    btn.style.color = "";
    form.reset();
  }, 2500);
});
