initWaline = function () {
  new MiniValine({
    el: '#waline',
    backend: 'waline',
    serverURLs: 'https://waline.leoo.tech/',
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  initWaline()
})

document.addEventListener('pjax:complete', function (){
  initWaline()
})