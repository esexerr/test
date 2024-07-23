document.addEventListener('DOMContentLoaded', function() {
    var titles = [
        "ㅤ",
        "@",
        "@r",
        "@re",
        "@res",
        "@reso",
        "@resor",
        "@resort",
    ];

    var currentIndex = 0;
    var isDeleting = false;

    var titleInterval = setInterval(function() {
        if (!isDeleting) {
            document.title = titles[currentIndex];
            currentIndex++;
            if (currentIndex === titles.length) {
                isDeleting = true;
                currentIndex = titles.length - 1;
            }
        } else {
            document.title = titles[currentIndex];
            currentIndex--;
            if (currentIndex < 0) {
                isDeleting = false;
                currentIndex = 0;
            }
        }
    }, 500); //
});
