// document.addEventListener("DOMContentLoaded", () => {
//   // Theme initialization
//   if (
//     localStorage.getItem("theme") === "dark" ||
//     (!localStorage.getItem("theme") &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches)
//   ) {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }

//   // Icons
//   lucide.createIcons();

//   // Footer year
//   document.getElementById("year").textContent = new Date().getFullYear();

//   // Theme icon handling
//   const themeObserver = new MutationObserver(() => {
//     const isDark = document.documentElement.classList.contains("dark");
//     document.getElementById("theme-icon-light").style.display = isDark ? "none" : "block";
//     document.getElementById("theme-icon-dark").style.display = isDark ? "block" : "none";
//   });
//   themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

//   // Initial icon state
//   const isDark = document.documentElement.classList.contains("dark");
//   document.getElementById("theme-icon-light").style.display = isDark ? "none" : "block";
//   document.getElementById("theme-icon-dark").style.display = isDark ? "block" : "none";

//   // OwlCarousel
//   $(".nav-carousel").owlCarousel({
//     loop: false,
//     margin: 8,
//     nav: false,
//     dots: false,
//     autoWidth: true, // pill-sized items
//     responsive: {
//       0: { items: 2 },
//       600: { items: 4 },
//       1000: { items: 6 },
//     },
//   });
// });

// // Theme toggle function (global so button can call it)
// function toggleTheme() {
//   const html = document.documentElement;
//   html.classList.toggle("dark");
//   localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
// }

       const themeIconLight = document.getElementById("theme-icon-light");
        const themeIconDark = document.getElementById("theme-icon-dark");

        function applyTheme(theme) {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
                themeIconLight.style.display = 'none';
                themeIconDark.style.display = 'block';
            } else {
                document.documentElement.classList.remove('dark');
                themeIconLight.style.display = 'block';
                themeIconDark.style.display = 'none';
            }
        }

        function toggleTheme() {
          const isDark = document.documentElement.classList.contains('dark');
          const newTheme = isDark ? 'light' : 'dark';
          localStorage.setItem('theme', newTheme);
          applyTheme(newTheme);
        }

        document.addEventListener("DOMContentLoaded", () => {
          // Initialize theme on page load
          const savedTheme = localStorage.getItem('theme');
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
          applyTheme(initialTheme);
          
          // Initialize Lucide icons and footer
          lucide.createIcons();
          document.getElementById("year").textContent = new Date().getFullYear();

          // Manually add SVG content to theme icons
          themeIconLight.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>`;
          themeIconDark.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>`;

          // Initialize Owl Carousel
          $(".nav-carousel").owlCarousel({
            loop: false,
            margin: 8,
            nav: false,
            dots: false,
            autoWidth: true,
          });
        });

document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});
