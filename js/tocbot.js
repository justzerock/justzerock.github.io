initTocBot = function() {
  let lenToc = document.querySelectorAll('.sidebar__toc').length
  if ( lenToc ) {
    tocbot.init({
      tocSelector: '#sidebar__toc--list',
      contentSelector: '.post__article--content',
      headingSelector: 'h1,h2,h3,h4,h5,h6',
      hasInnerContainers: true,
      collapseDepth: 0,
      scrollSmooth: true,
      scrollSmoothDuration: 250
    });
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  initTocBot()
});   

document.addEventListener('pjax:complete', function (){
  initTocBot()
})
