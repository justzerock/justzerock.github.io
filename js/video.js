let load_frame = function() {
  document.querySelectorAll('iframe').forEach(element => {
    const supported = [
      'www.youtube.com',
      'player.vimeo.com',
      'player.youku.com',
      'player.bilibili.com',
      'www.tudou.com'
    ].some(host => element.src.includes(host));
    if (supported && !element.parentNode.matches('.video-container')) {
      const box = document.createElement('div');
      box.className = 'video-container';
      element.parentNode.replaceChild(box, element)
      box.appendChild(element)
    }
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  load_frame()
});   

document.addEventListener('pjax:complete', function (){
  load_frame()
})