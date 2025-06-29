const slides = Array.from(document.querySelectorAll('#carousel img'));
let currentIndex = 0;
let autoScrollInterval;

function updateGallery() {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
    });
}

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateGallery();
    }, 4000);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

slides.forEach((slide, i) => {
    slide.addEventListener('click', () => {
        currentIndex = i;
        updateGallery();
        stopAutoScroll();
        startAutoScroll();
    });
});

document.getElementById('btn-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateGallery();
    stopAutoScroll();
    startAutoScroll();
});

document.getElementById('btn-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateGallery();
    stopAutoScroll();
    startAutoScroll();
});

window.addEventListener('load', () => {
    updateGallery();
    startAutoScroll();
});