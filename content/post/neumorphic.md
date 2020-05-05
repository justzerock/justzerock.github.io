---
title: "Neumorphic"
date: 2020-05-06T00:57:23+08:00
draft: false
---

## 参考B站视频[[CSS] iOS开关按钮（CSS变数、深色模式）by CodingStartup起码课](https://www.bilibili.com/video/BV1t741127Vk/)

## 效果

{{< iframe "/demo/20-05-04/neumorphic.html" >}}

## 代码

### html

````html
  <label for="toggle">
    <input type="checkbox" id="toggle">
    <span></span>
  </label>
````

### css

````css
:root {
  --button-width: 200px;
  --button-height: 120px;
  --toggle-diameter: 100px;
  --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);
  --button-toggle-translatex: calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)); 
  --button-toggle-translatex-wider: calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)); 
  --shadow-offset-out: calc(var(--button-toggle-offset) / 4);
  --shadow-offset-inset: calc(var(--button-toggle-offset) / -4);
  --shadow-blur: calc(var(--button-toggle-offset) / 2);
  --toggle-wider: 125px;
  --color-light: #F3F3F3;
  --color-dark: #27292F;
  --color-primary: #74C2FC;
  --shadow-light-white: rgba(255, 255, 255, 0.5);
  --shadow-dark-white: rgba(255, 255, 255, 0.15);
  --shadow-light-black: rgba(0, 0, 0, 0.08);
  --shadow-dark-black: rgba(0, 0, 0, 0.25);
  --shadow-out-light: var(--shadow-offset-inset) var(--shadow-offset-inset) 
    var(--shadow-blur) var(--shadow-light-white),
    var(--shadow-offset-out) var(--shadow-offset-out)
    var(--shadow-blur) var(--shadow-light-black);
  --shadow-out-dark: var(--shadow-offset-inset) var(--shadow-offset-inset) 
    var(--shadow-blur) var(--shadow-dark-white),
    var(--shadow-offset-out) var(--shadow-offset-out)
    var(--shadow-blur) var(--shadow-dark-black);
  --shadow-inset-light: inset var(--shadow-offset-inset) var(--shadow-offset-inset) 
    var(--shadow-blur) var(--shadow-light-white),
    inset var(--shadow-offset-out) var(--shadow-offset-out)
    var(--shadow-blur) var(--shadow-light-black);
  --shadow-inset-dark: inset var(--shadow-offset-inset) var(--shadow-offset-inset) 
    var(--shadow-blur) var(--shadow-dark-white),
    inset var(--shadow-offset-out) var(--shadow-offset-out)
    var(--shadow-blur) var(--shadow-dark-black);
  --transition: all .25s ease-in-out;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background: var(--color-light);
}

span {
  display: inline-block;
  position: relative;
  width: var(--button-width);
  height: var(--button-height);
  border-radius: calc(var(--button-height) / 2);
  box-shadow: var(--shadow-out-light),
    var(--shadow-inset-light);
  transition: var(--transition);
}

span::before {
  content: '';
  position: absolute;
  width: var(--toggle-diameter);
  height: var(--toggle-diameter);
  border-radius: calc(var(--toggle-diameter) / 2);
  top: var(--button-toggle-offset);
  transform: translateX(var(--button-toggle-offset));
  transition: var(--transition);
  box-shadow: var(--shadow-out-light);
  background-image: -webkit-gradient(linear, left top, right bottom, color-stop(0%,rgba(0,0,0,0.01)), color-stop(100%,rgba(0,0,0,0.04)));
  background-color: var(--color-light);  
}

input[type="checkbox"]:checked + span {
  background: var(--color-primary);
}

input[type="checkbox"]:checked + span::before {
  transform: translateX(var(--button-toggle-translatex));
}

input[type="checkbox"]:active + span::before {
  width: var(--toggle-wider);
}

input[type="checkbox"]:checked:active + span::before {
  transform: translateX(var(--button-toggle-translatex-wider));
}

input[type="checkbox"] {
  display: none;
}

@media(prefers-color-scheme: dark) {
  body {
    background: var(--color-dark);
  }
  span {
    box-shadow: var(--shadow-out-dark),
      var(--shadow-inset-dark);
  }
  span::before {
    box-shadow: var(--shadow-out-dark);
    background-image: -webkit-gradient(linear, left top, right bottom, color-stop(0%,rgba(255,255,255, 0.02)), color-stop(100%,rgba(255,255,255, 0.04)));
    background-color: var(--color-dark);
  }
}
````