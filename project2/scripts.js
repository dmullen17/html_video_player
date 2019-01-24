/* Select Elements */

const player = document.querySelector('.player')
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreenButton = player.querySelector('button[name="fullscreen"]');

/* Build out function */

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function updateButton(e) {
    // console.log('Update the button');
    // console.log(e); type = 'play'
/*    if (e.type == 'play') {
        toggle.innerText = "►";
    }
    if (e.type == 'pause') {
        toggle.innerText = "▌▌";
    }*/
    const icon = this.paused ? '►' : '▌▌';
    //console.log(this.paused);
    toggle.textContent = icon;
}

function skip() {
    // console.log(this.dataset.skip);
    // console.log(typeof(this.dataset.skip)); // it's a string
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    // console.log(this.value);
    // console.log(this.name);
    video[this.name] = this.value;
}

function handleProgress(e) {
    // we can update flex-basis: which is a percentage.
    console.log(e);
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    console.log(e);
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

function fullScreen() {
  /*  video.style.height = `${window.innerHeight}px`;
    video.style.width = `${window.innerWidth}px`;*/
    video.webkitRequestFullScreen();
}

/* Set up Event Listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
progress.addEventListener('click', scrub);
let mousedown = false;
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
fullScreenButton.addEventListener('click', fullScreen);
