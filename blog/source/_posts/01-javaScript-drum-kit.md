---
title: 01 - JavaScript Drum Kit
tags: JavaScript30
abbrlink: 50430
date: 2021-07-20 05:36:39
---
# 作品連結
[Custom Video Player](https://cecilialioooo.github.io/portfolio/11-custom-video-player/)

# 要達成的功能

按下鍵盤上相對應按鍵，會發出聲音，就像用電腦打鼓一樣。

# 規劃要做的步驟

# Step.1 *按下按鍵，回傳data-key，加上 class效果*

- querySelectorAll會產出 類陣列，使用方法受限制，需要轉成陣列才能使用.find
- 使用絕對相等

```jsx
const allData = [...document.querySelectorAll(".key")];
const allAudio = [...document.querySelectorAll("audio")];

window.addEventListener("keydown", function (e) {

    // 回傳data-key
    let theKey = allData.find(element => 
        Number(element.dataset.key) === e.keyCode 
        );

    theKey.classList.add("playing");
});
```

# Step.2 播放聲音

- 使用絕對相等

```jsx
//播放聲音
let theVoice = allAudio.find((element) => {
    return Number(element.dataset.key) === e.keyCodee;
});

theVoice.currentTime = 0;
//要被播放的audio.play();
theVoice.play();
```

# Step.3 移除class

- 使用 keyup

```jsx
//手指離開鍵盤，即移除class
window.addEventListener("keyup", function (e) {
    theKey.classList.remove("playing");
});
```

# Reference material
with my friends ♥