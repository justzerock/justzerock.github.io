const scrollToTop = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, scrollTop - scrollTop / 8)
  }
}

scrollToBottom = () => {
  (function smoothscroll() {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // 已经被卷掉的高度
    const clientHeight = document.documentElement.clientHeight; // 浏览器高度
    const scrollHeight = document.documentElement.scrollHeight; // 总高度
    if (scrollHeight - 10 > currentScroll + clientHeight) {
      window.requestAnimationFrame(smoothscroll);
      window.scrollTo(0, currentScroll + (scrollHeight - currentScroll - clientHeight) / 2);
    }
  })();
};


let btnGoTop = document.getElementsByClassName('go-top')[0]
btnGoTop.onclick = function () {
  let btnClass = btnGoTop.getAttribute('class')
  if (btnClass.indexOf('up') > -1) {
    scrollToTop()
  } else {
    scrollToBottom()
  }
}

window.onscroll = function () {
  var g = document.documentElement.scrollTop || document.body.scrollTop;
  var h = document.documentElement.clientHeight
  var s = document.documentElement.scrollHeight
  if (g > (s-h)/2) {
    btnGoTop.classList.add('up')
  }
  else {
    btnGoTop.classList.remove('up')
  }
}