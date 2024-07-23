const nickname = document.getElementById('nickname');
let gradientPosition = 0;
let direction = 1;

function changeGradient() {
    gradientPosition += direction;
    if (gradientPosition >= 100 || gradientPosition <= 0) {
        direction *= -1;
    }
    nickname.style.backgroundPosition = `${gradientPosition}% 0%`;
}

setInterval(changeGradient, 25);