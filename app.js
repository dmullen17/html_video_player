const video = document.querySelector('video');
const progressBar = document.querySelector('.progress__filled');
const toggleButton = document.querySelector('.toggleButton');
// console.log(video);

video.pause();

function updateProgressBar() {
    const currentTime = video.currentTime; 
    const duration = video.duration; 
    const percentPlayed = (currentTime/duration)*100;
    // console.log(percentPlayed);
    progressBar.style.width = `${percentPlayed}%`;
}

setInterval(updateProgressBar, 500);

// The video object has two methods video.play() and video.pause(), along with a video.paused boolean
function togglePlay() {
    // console.log('hello');
    if (video.paused == true) {
        video.play();
        toggleButton.innerText = '❚ ❚';
    } else {
        video.pause();
        toggleButton.innerText = '▶';
    }
}
toggleButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);












































































































