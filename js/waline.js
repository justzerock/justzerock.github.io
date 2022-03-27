initWaline = function () {
  new MiniValine({
    el: '#waline',
    backend: 'waline',
    serverURLs: 'https://waline-9ib0k0jpp-justzerock.vercel.app/',
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  initWaline()
})

document.addEventListener('pjax:complete', function (){
  initWaline()
})