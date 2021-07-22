const playBtn = document.querySelector(".toggle");
const video = document.querySelector(".viewer");

let width = 0;
const progress = document.querySelector('.progress');
const progress__filled = document.querySelector('.progress__filled');

const skips = [...document.querySelectorAll('.player__button')];
const sliders = [...document.querySelectorAll('.player__slider')];

// const volume = video.volume;
// play || pause
playBtn.addEventListener('click',function(){
      video.paused ? video.play() : video.pause();
      playBtn.textContent = video.paused ? '►' : '❚ ❚';

      autoProgress();
})

// Progress Bar
function autoProgress() {
      video.addEventListener('timeupdate', (event) => {
            if(video.ended){
                  playBtn.textContent = '►';
            }else{
                  width = (video.currentTime/video.duration)*100 ;
                  progress__filled.style.flexBasis = `${(video.currentTime/video.duration)*100}%`
                  console.log(width);
            }
      });
}

function changeProgress(e) {
      progress__filled.style.flexBasis = `${(e.offsetX / progress.offsetWidth) * 100}%`;
      video.currentTime = video.duration * (e.offsetX / progress.offsetWidth);
}


// skip
function skip() {
      video.currentTime += Number(this.dataset.skip);
}

skips.forEach(s=>s.addEventListener('click',skip));


// sliders
let volume = video.volume;
let playbackRate = video.playbackRate;

sliders.forEach(slider=>{
      slider.addEventListener('change',()=>{
            video[slider.name] = slider.value;
      })
})

// 影片進度拖曳功能
let clicked = false; // 預設為 false，按下左鍵時才會變成 true
progress.addEventListener('mousedown', () => clicked = true);
progress.addEventListener('mouseup', () => clicked = false);

progress.addEventListener('click',(m)=>changeProgress(m));
progress.addEventListener('mousemove',(m)=>clicked && changeProgress(m));


// fullscreen