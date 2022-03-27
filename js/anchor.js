initAnchor = function () {
  anchors.options = {
    placement: 'left',
    icon: '#'
  };
  anchors.add('.post__article--content > h1, .post__article--content > h2, .post__article--content > h3, .post__article--content > h4, .post__article--content > h5, .post__article--content > h6');
}

document.addEventListener("DOMContentLoaded", (event) => {
  initAnchor()
});   

document.addEventListener('pjax:complete', function (){
  initAnchor()
})
