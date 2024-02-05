document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.wrapper');
    const startBtn = document.getElementById('startBtn');
    const firstBanner = document.querySelector('.first-banner');  
    const quizWrap = document.querySelector('.quiz-wrap');

    startBtn.addEventListener('click', function () {
      wrapper.style.backgroundImage = 'url("/img/quiz-bg.jpg")'; 
      firstBanner.style.display = 'none';
      quizWrap.style.display = 'block';
    });
});