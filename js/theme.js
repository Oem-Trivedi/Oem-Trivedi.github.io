document.addEventListener("DOMContentLoaded", () => {
  // Theme initialization
  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Icons
  lucide.createIcons();

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Theme icon handling
  const themeObserver = new MutationObserver(() => {
    const isDark = document.documentElement.classList.contains("dark");
    document.getElementById("theme-icon-light").style.display = isDark ? "none" : "block";
    document.getElementById("theme-icon-dark").style.display = isDark ? "block" : "none";
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

  // Initial icon state
  const isDark = document.documentElement.classList.contains("dark");
  document.getElementById("theme-icon-light").style.display = isDark ? "none" : "block";
  document.getElementById("theme-icon-dark").style.display = isDark ? "block" : "none";

  // OwlCarousel
  $(".nav-carousel").owlCarousel({
    loop: false,
    margin: 8,
    nav: false,
    dots: false,
    autoWidth: true, // pill-sized items
    responsive: {
      0: { items: 2 },
      600: { items: 4 },
      1000: { items: 6 },
    },
  });
});

// Theme toggle function (global so button can call it)
function toggleTheme() {
  const html = document.documentElement;
  html.classList.toggle("dark");
  localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
}
