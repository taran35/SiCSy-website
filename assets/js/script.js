async function loadComponent(id, file) {
    const el = document.getElementById(id);
    const res = await fetch(`components/${file}`);
    const html = await res.text();
    el.innerHTML = html;

}

loadComponent('navbar-placeholder', 'navbar.html').then(() => {
    setupNavbar();
});
loadComponent('footer-placeholder', 'footer.html').then(() => {
    initThemeSwitcher();
});

function setupNavbar() {
    const toggle = document.querySelector('.navbar-toggle');
    const links = document.querySelector('.navbar-links');

    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('active');
        });
    }
}
function initThemeSwitcher() {
    const toggleSwitch = document.querySelector('.theme-toggle');
    if (!toggleSwitch) {
        console.warn("⚠️ .theme-toggle introuvable");
        return;
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        toggleSwitch.checked = savedTheme === 'dark';
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultTheme = prefersDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', defaultTheme);
        toggleSwitch.checked = prefersDark;
    }

    toggleSwitch.addEventListener('change', e => {
        const theme = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
}




