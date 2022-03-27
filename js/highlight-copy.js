let load_copy = function () {
  document.querySelectorAll('figure.highlight').forEach(element => {
    const box = document.createElement('div');
    element.parentNode.replaceChild(box, element)
    box.appendChild(element)
    box.classList.add('highlight-container');
    box.insertAdjacentHTML('beforeend', '<div class="copy-btn"><i class="if i-copy"></i></div>');
    var button = element.parentNode.querySelector('.copy-btn');
    button.addEventListener('click', event => {
      var target = event.currentTarget;
      var code = [...target.parentNode.querySelectorAll('.code .line')].map(line => line.innerText).join('\n');
      var ta = document.createElement('textarea');
      ta.style.top = window.scrollY + 'px'; // Prevent page scrolling
      ta.style.position = 'absolute';
      ta.style.opacity = '0';
      ta.readOnly = true;
      ta.value = code;
      document.body.append(ta);
      const selection = document.getSelection();
      const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
      ta.select();
      ta.setSelectionRange(0, code.length);
      ta.readOnly = false;
      var result = document.execCommand('copy');
      /* if (CONFIG.copycode.show_result) {
        target.querySelector('i').className = result ? 'fa fa-check fa-fw' : 'fa fa-times fa-fw';
      } */
      target.querySelector('i').className = result ? 'if i-check' : 'if i-times';
      ta.blur(); // For iOS
      target.blur();
      if (selected) {
        selection.removeAllRanges();
        selection.addRange(selected);
      }
      document.body.removeChild(ta);
    });
    button.addEventListener('mouseleave', event => {
      setTimeout(() => {
        event.target.querySelector('i').className = 'if i-copy';
      }, 300);
    });
  });
}
document.addEventListener("DOMContentLoaded", (event) => {
  load_copy()
});   

document.addEventListener('pjax:complete', function (){
  load_copy()
})