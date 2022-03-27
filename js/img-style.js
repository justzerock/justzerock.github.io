load_style = function () {

  let boxLength = document.querySelectorAll('.post__img--block').length
  
  if (!boxLength) {
    document.querySelectorAll('.post__article--content > p > img').forEach( el => {
      let imgWrapLink = document.createElement('a')
      let imgLink = el.getAttribute('src')
      imgWrapLink.setAttribute('class', 'post__img--link')
      imgWrapLink.setAttribute('href', imgLink)
      imgWrapLink.setAttribute('target', '_blank')
      imgWrapLink.setAttribute('data-img', 'images')

      el.setAttribute('class', 'post__img--img')
      el.parentNode.setAttribute('class', 'post__img--block')
      el.parentNode.replaceChild(imgWrapLink, el)
      imgWrapLink.appendChild(el)

      let imgTitle = el.getAttribute('title') || el.getAttribute('alt')
      if (imgTitle) {
        let elTitle = document.createElement('p')
        elTitle.setAttribute('class', 'post__img--title')
        elTitle.innerHTML = imgTitle
        imgWrapLink.append(elTitle)
        imgWrapLink.setAttribute('title', imgTitle)
        imgWrapLink.setAttribute('data-caption', imgTitle)
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