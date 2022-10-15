let isScrollUp = false
let isScrollDown = false

const scrollToTop = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, scrollTop - scrollTop / 4)
    isScrollUp = true
  } else {
    isScrollUp = false
  }
}

const scrollToBottom = () => {
  (function smoothscroll() {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // 已经被卷掉的高度
    const clientHeight = document.documentElement.clientHeight; // 浏览器高度
    const scrollHeight = document.documentElement.scrollHeight; // 总高度
    if (scrollHeight - 10 > currentScroll + clientHeight) {
      window.requestAnimationFrame(smoothscroll);
      window.scrollTo(0, currentScroll + (scrollHeight - currentScroll - clientHeight) / 4);
      isScrollDown = true
    } else {
      isScrollDown = false
    }
  })();
};


let btnGoTop = document.getElementsByClassName('gotop')[0]
btnGoTop.onclick = function () {
  let btnClass = btnGoTop.getAttribute('class')
  if (btnClass.indexOf('up') > -1 && !isScrollDown) {
    scrollToTop()
  } else if (!isScrollUp) {
    scrollToBottom()
  }
}

window.onscroll = function () {
  var g = document.documentElement.scrollTop || document.body.scrollTop;
  var h = document.documentElement.clientHeight
  var s = document.documentElement.scrollHeight
  if (g > (s-h)/2) {
    btnGoTop.classList.add('up')
    btnGoTop.ariaLabel = '滚动到顶部'
  }
  else {
    btnGoTop.classList.remove('up')
    btnGoTop.ariaLabel = '滚动到底部'
  }
}