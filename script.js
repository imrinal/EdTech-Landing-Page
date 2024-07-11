// Courses Slider Functions
let currentCourseSlide = 0;

function updateCourseSlide() {
    const courseSliderContainer = document.querySelector('.slider-container');
    const courseSlideWidth = document.querySelector('.course-card').offsetWidth;
    const slideGap = 20; // Adjust this gap according to your CSS
    courseSliderContainer.style.transform = `translateX(${-currentCourseSlide * (courseSlideWidth + slideGap)}px)`;
}

function prevCourseSlide() {
    currentCourseSlide = (currentCourseSlide === 0) ? 0 : currentCourseSlide - 1;
    updateCourseSlide();
}

function nextCourseSlide() {
    const totalCourseSlides = document.querySelectorAll('.course-card').length;
    const visibleCourseSlides = Math.floor(document.querySelector('.slider').offsetWidth / (document.querySelector('.course-card').offsetWidth + 20));
    currentCourseSlide = (currentCourseSlide >= totalCourseSlides - visibleCourseSlides) ? currentCourseSlide : currentCourseSlide + 1;
    updateCourseSlide();
}

// Faculty Slider Functions
let currentFacultySlide = 0;

function updateFacultySlide() {
    const facultySliderContainer = document.querySelector('.slider-containerf');
    const facultySlideWidth = document.querySelector('.faculty-card').offsetWidth;
    const slideGap = 20; // Adjust this gap according to your CSS
    facultySliderContainer.style.transform = `translateX(${-currentFacultySlide * (facultySlideWidth + slideGap)}px)`;
}

function prevFacultySlide() {
    currentFacultySlide = (currentFacultySlide === 0) ? 0 : currentFacultySlide - 1;
    updateFacultySlide();
}

function nextFacultySlide() {
    const totalFacultySlides = document.querySelectorAll('.faculty-card').length;
    const visibleFacultySlides = Math.floor(document.querySelector('.sliderf').offsetWidth / (document.querySelector('.faculty-card').offsetWidth + 20));
    currentFacultySlide = (currentFacultySlide >= totalFacultySlides - visibleFacultySlides) ? currentFacultySlide : currentFacultySlide + 1;
    updateFacultySlide();
}


// JavaScript file
let currentRatingSlide = 0;

function updateRatingSlide() {
    const ratingSliderContainer = document.querySelector('.rating-wrapper');
    const ratingSlideWidth = document.querySelector('.rating-card').offsetWidth;
    const slideGap = 20; // Adjust this gap according to your CSS
    ratingSliderContainer.style.transform = `translateX(${ -currentRatingSlide * (ratingSlideWidth + slideGap) }px)`;
}

function prevRatingSlide() {
    currentRatingSlide = (currentRatingSlide === 0) ? 0 : currentRatingSlide - 1;
    updateRatingSlide();
}

function nextratingSlide() {
    const totalRatingSlides = document.querySelectorAll('.rating-card').length;
    const visibleRatingSlides = Math.floor(document.querySelector('.rating-slider').offsetWidth / (document.querySelector('.rating-card').offsetWidth + 20));
    currentRatingSlide = (currentRatingSlide >= totalRatingSlides - visibleRatingSlides) ? currentRatingSlide : currentRatingSlide + 1;
    updateRatingSlide();
}


document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.scroll-to, .dropbtn');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offset = 70; // Adjust this value as needed
                const targetOffset = targetSection.offsetTop - offset;
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

function openLink(url) {
    window.open(url, '_blank');
}


function openQuizLink() {
    window.open('https://imrinal.github.io/Quiz-Game/', '_blank');
}