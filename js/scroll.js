const scrollToTop = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, scrollTop - scrollTop / 8)
  }
}
let btnGoTop = document.getElementsByClassName('go-top')[0]
btnGoTop.onclick = function() {
  scrollToTop()
}

window.onscroll = function () {
  var g = document.documentElement.scrollTop || document.body.scrollTop;
  if (g > 250) {
    btnGoTop.classList.add('show')
  }
  else if (g < 250) {
    btnGoTop.classList.remove('show')
  }
}