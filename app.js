const video = document.querySelector('video');
const progressBar = document.querySelector('.progress__filled');
const toggleButton = document.querySelector('.toggleButton');
const volumeInput = document.querySelector("input[name='volume']");
const timeInput = document.querySelector("input[name='time']");
const buttons = document.querySelectorAll('button');

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


// The video has a .volume property that takes values from 0 to 1.  
function updateVolume() {
    // console.log('hi');
    // console.log(this.value);
    video.volume = this.value;
}
volumeInput.addEventListener('change', updateVolume);


function updateTime() {
    //console.log(this.value);
    progressBar.style.transition = 'all 0s linear';
    video.currentTime = this.value;
}
timeInput.addEventListener('change', updateTime);


function scrub() {
    if (!this.dataset.skip) return;
    // console.log(this.dataset.skip);
    progressBar.style.transition = 'all 0s linear';
    // console.log(`${video.currentTime + parseInt(this.dataset.skip)}`);
    video.currentTime += parseInt(this.dataset.skip);
}
buttons.forEach(button => button.addEventListener('click', scrub));








































































































