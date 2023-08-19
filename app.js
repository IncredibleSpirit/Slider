const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');

const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

//создаем переменную для отслеживания активного слайда:
let activeSlideIndex = 0;

//создаем соответствие слайдов сайдбару (по цвету):
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;


upBtn.addEventListener('click', function() {
    changeSlide('up')
});

downBtn.addEventListener('click', function() {
    changeSlide('down')
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        changeSlide('up');
    } else if (event.key === 'ArrowDown') {
        changeSlide('down');
    }
});


function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction ==='down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0){
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}