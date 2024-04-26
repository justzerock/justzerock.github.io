initWaline = function () {
  new MiniValine({
    el: '#waline',
    backend: 'waline',
    serverURLs: 'https://waline.zerock.eu.org/',
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  initWaline()
})

document.addEventListener('pjax:complete', function (){
  initWaline()
})