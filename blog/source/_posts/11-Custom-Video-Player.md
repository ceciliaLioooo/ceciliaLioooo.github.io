---
title: 11 - Custom Video Player
tags: JavaScript30
abbrlink: 24331
date: 2021-07-20 05:44:01
---

# 要達成的功能

自己打造一個影片的控制列

1. 影片播放、暫停
2. 影片快轉 25 秒
3. 影面倒轉 10 秒
4. 影片音量調整
5. 影片進度條
6. 影片速度調整條

# 規劃要做的步驟

# Step.1 影片播放、暫停

- 影片播放、暫停
- 左下角icon顯示'►' : '❚ ❚'

```jsx
const playBtn = document.querySelector(".toggle");
const video = document.querySelector(".viewer");

playBtn.addEventListener('click',function(){
      video.paused ? video.play() : video.pause();
      playBtn.textContent = video.paused ? '►' : '❚ ❚';

      autoProgress();
})
```

# Step.2 快退10秒、快進45秒

```jsx
const skips = [...document.querySelectorAll('.player__button')];
const sliders = [...document.querySelectorAll('.player__slider')];

skips.forEach(s=>s.addEventListener('click',skip));
function skip() {
      video.currentTime += Number(this.dataset.skip);
}
```

# Step.3 調整音量或速率

- video.volume = video[volume] 不同取法，意思一樣
- 音量 HTMLMediaElement.volume 值為0到1雙精度值，0為靜音、1為最大聲
- 速率 HTMLMediaElement.playbackRate 浮點數1.0表示正常的播放速率

```jsx
let volume = video.volume;
let playbackRate = video.playbackRate;

sliders.forEach(slider=>{
      slider.addEventListener('change',()=>{
            video[slider.name] = slider.value;
      })
})
```

# Step.4 影片進度條

- 用 timeupdate ，當時間被暫停時，就會停止計算時間(video.currentTime) → 停止計算長度

```jsx
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
```

# Step.5 拖曳影片進度條

```jsx
let clicked = false; // 預設為 false，按下左鍵時才會變成 true
progress.addEventListener('mousedown', () => clicked = true);
progress.addEventListener('mouseup', () => clicked = false);

progress.addEventListener('click',(m)=>changeProgress(m));
progress.addEventListener('mousemove',(m)=>clicked && changeProgress(m));

function changeProgress(e) {
      progress__filled.style.flexBasis = `${(e.offsetX / progress.offsetWidth) * 100}%`;
      video.currentTime = video.duration * (e.offsetX / progress.offsetWidth);
}
```

# Reference material

[JS30 Day 11 - Custom Video Player - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10205323)