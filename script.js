// Animate Skills Section Circles
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('#skills');
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (skillsPosition < screenPosition) {
        document.querySelectorAll('.circle').forEach(circle => {
            let percent = circle.getAttribute('data-percent');
            circle.style.background = `conic-gradient(#ffbe0b ${percent}%, #2c2c2c ${percent}%)`;
        });
    }
});
