document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const sidebar = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
            if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });
});


function getMarkdownPage() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page') || 'introduction';
    return `docs/${page}.md`;
}
async function loadMarkdown(url, containerId) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('404');

        const text = await response.text();
        const html = marked.parse(text);
        document.getElementById(containerId).innerHTML = html;
    } catch (error) {
        const fallback = await fetch('docs/404.md');
        const fallbackText = await fallback.text();
        const fallbackHtml = marked.parse(fallbackText);
        document.getElementById(containerId).innerHTML = fallbackHtml;
    }
}




function setupSidebarLinks() {
    const links = document.querySelectorAll('.sidebar a[data-page]');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const page = link.dataset.page;
            history.pushState({ page }, '', `?page=${page}`);
            loadMarkdown(`docs/${page}.md`, 'wiki-content');
        });
    });
}
window.addEventListener('popstate', (event) => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page') || 'introduction';
    loadMarkdown(`docs/${page}.md`, 'wiki-content');
});
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page') || 'introduction';
    loadMarkdown(`docs/${page}.md`, 'wiki-content');
    setupSidebarLinks();
    const mdFile = getMarkdownPage();
    loadMarkdown(mdFile, 'wiki-content');
});
