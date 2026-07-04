//back to top button
const backToTopContainer = document.getElementById('backToTopContainer');
const backToTopButton = document.getElementById('backToTopButton');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopContainer.classList.remove('invisible');
    } else {
        backToTopContainer.classList.add('invisible');
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});