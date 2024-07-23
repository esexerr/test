function toggleMute() {
    var audioPlayer = document.getElementById('music');
    
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}