document.addEventListener('DOMContentLoaded', function() {
    var titles = [
        "ㅤ",
        "@",
        "@m",
        "@m4",
        "@m4d",
        "@m4d3",
        "@m4d3t",
        "@m4d3th",
        "@m4d3thi",
        "@m4d3this",
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
