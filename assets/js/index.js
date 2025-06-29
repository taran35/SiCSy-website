
document.querySelector('.arrow-circle').addEventListener('click', () => {
    const target = document.getElementById('features');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
});