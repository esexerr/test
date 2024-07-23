document.addEventListener('DOMContentLoaded', function() {
    var welcomeScreen = document.querySelector('.welcomeScreen');
    var mainPage = document.querySelector('.mainPage');
    var clickToEnter = document.querySelector('.clickToEnter');
    var audioPlayer = document.getElementById('music');

    clickToEnter.addEventListener('click', function() {
        welcomeScreen.style.display = 'none'; 
        mainPage.classList.add('slideUp');
        mainPage.style.opacity = '100';
        audioPlayer.style.display = 'block'; 
        audioPlayer.play();
    });
});