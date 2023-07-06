const SECONDS = 10;
const video = document.querySelector('#video');
const progress = document.querySelector('#progress');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const backwardButton = document.querySelector('#backward');
const forwardButton = document.querySelector('#forward');

function handleLoaded() {
    progress.max = video.duration;
}

function handleTimeUpdate() {
    progress.value = video.currentTime;
}

function handleEnded() {
    playButton.hidden = false;
    pauseButton.hidden = true;
}

function handlePlay() {
    video.play();
    pauseButton.hidden = false;
    playButton.hidden = true;
}

function handlePause() {
    video.pause();
    playButton.hidden = false;
    pauseButton.hidden = true;
}

function handleBackward() {
    video.currentTime -= SECONDS;
}

function handleForward() {
    video.currentTime += SECONDS;
}

function handleInput() {
    video.currentTime = progress.value;
}

video.addEventListener('loadedmetadata', handleLoaded);
video.addEventListener('timeupdate', handleTimeUpdate);
video.addEventListener('ended', handleEnded);
playButton.addEventListener('click', handlePlay);
pauseButton.addEventListener('click', handlePause);
backwardButton.addEventListener('click', handleBackward);
forwardButton.addEventListener('click', handleForward);
progress.addEventListener('input', handleInput)