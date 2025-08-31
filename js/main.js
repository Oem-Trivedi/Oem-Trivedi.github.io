// Set theme on initial load
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Theme toggle function
function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

lucide.createIcons();
document.getElementById('year').textContent = new Date().getFullYear();

// Update theme icon visibility based on theme
const themeObserver = new MutationObserver(() => {
    const isDark = document.documentElement.classList.contains('dark');
    document.getElementById('theme-icon-light').style.display = isDark ? 'none' : 'block';
    document.getElementById('theme-icon-dark').style.display = isDark ? 'block' : 'none';
});
themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

// Manually trigger initial check
const isDark = document.documentElement.classList.contains('dark');
document.getElementById('theme-icon-light').style.display = isDark ? 'none' : 'block';
document.getElementById('theme-icon-dark').style.display = isDark ? 'block' : 'none';