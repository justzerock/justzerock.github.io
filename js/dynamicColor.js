function dynamicColor(text) {
  if (text.length < 3) {
    text += 'abc'
  }
  let hex = ''
  for(let i = 0; i < text.length; i++) {
    hex += text.charCodeAt(i).toString(16).slice(0, 2)
  }
  return '#' + hex.slice(0, 6) + '99'
}

function loadColor() {
  //let elements = document.getElementsByClassName('post-list__tag')
  //for(let i = 0; i< elements.)
  document.querySelectorAll('.post-list__tag, .post-list__category').forEach( el => {
    el.style.color = dynamicColor(el.innerText)
  })
}

document.addEventListener("DOMContentLoaded", (event) => {
  //loadColor()
});   

document.addEventListener('pjax:complete', function (){
  //loadColor()
})
