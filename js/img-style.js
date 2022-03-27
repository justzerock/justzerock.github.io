load_style = function () {

  let boxLength = document.querySelectorAll('.post__img--block').length
  
  if (!boxLength) {
    document.querySelectorAll('.post__article--content img').forEach( el => {
      if ( !el.getAttribute('class') ) {
        let imgWrapLink = document.createElement('a')
        let imgWrapBlock = document.createElement('p')
        let imgLink = el.getAttribute('src')
        imgWrapLink.setAttribute('class', 'post__img--link')
        imgWrapLink.setAttribute('href', imgLink)
        imgWrapLink.setAttribute('target', '_blank')
        imgWrapLink.setAttribute('data-img', 'images')
        imgWrapBlock.setAttribute('class', 'post__img--block')
  
        el.setAttribute('class', 'post__img--img')
        el.warp(imgWrapLink)
        imgWrapLink.warp(imgWrapBlock)
        //el.parentNode.replaceChild(imgWrapBlock, el)
        //imgWrapBlock.appendChild(imgWrapLink)
        //imgWrapLink.appendChild(el)
  
        let imgTitle = el.getAttribute('title') || el.getAttribute('alt')
        if (imgTitle) {
          let elTitle = document.createElement('p')
          elTitle.setAttribute('class', 'post__img--title')
          elTitle.innerHTML = imgTitle
          imgWrapLink.append(elTitle)
          imgWrapLink.setAttribute('title', imgTitle)
          imgWrapLink.setAttribute('data-caption', imgTitle)
        }
      }

    })
    
  }

}

document.addEventListener("DOMContentLoaded", (event) => {
  load_style()
});   

document.addEventListener('pjax:complete', function (){
  load_style()
})