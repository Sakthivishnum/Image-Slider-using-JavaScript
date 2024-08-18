let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

function showSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

function autoSlide() {
    changeSlide(1);
}

// Change slide every 5 seconds
setInterval(autoSlide, 5000);

// Initialize the first slide
showSlide(0);