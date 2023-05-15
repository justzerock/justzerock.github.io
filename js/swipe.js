function _touch() {
  var startX;//让startX在touch事件函数里是全局性变量。
  var endX;
  var startY;
  var endY;
  var startTop;
  var endTop;
  //var el=document.getElementById('box');document.getElementsByTagName("body")[0] 
  var el = document.getElementsByTagName("body")[0];
  function cons() {   //独立封装这个事件可以保证执行顺序，从而能够访问得到应该访问的数据。
    //console.log(startY, endY);
    var l = Math.abs(startX - endX);
    var h = Math.abs(startY - endY);

    if (l < h) {
      // x事件
      /* if (startX > endX) {
        // alert('left');
      } else if (startX < endX) {
        // alert('right');
      } */
      if ((startTop - endTop) > ($(window).height()/20) ) {
        $('.menu').removeClass('swipe');
        $('.post__back').removeClass('swipe');
        //$('.settings').addClass('hide');
        //$('.settings').removeClass('open');
        //$('.blur').removeClass('open');
      } else if ((endTop - startTop) > ($(window).height()/20) ) {
        $('.menu').addClass('swipe');
        $('.post__back').addClass('swipe');
        //$('.settings').removeClass('hide');
      }

    } /* else {
      // y事件
      if (startY > endY) {
        // alert('top');
        $('.menu').addClass('swipe');
        $('.post__back').addClass('swipe');
        //$('.settings').addClass('hide');
        //$('.settings').removeClass('open');
        //$('.blur').removeClass('open');
      } else if (startY < endY) {
        // alert('bottom');
        $('.menu').removeClass('swipe');
        $('.post__back').removeClass('swipe');
        //$('.settings').removeClass('hide');
      }
    } */

  }
  el.addEventListener('touchstart', function (e) {
    var touch = e.changedTouches;
    startX = touch[0].clientX;
    startY = touch[0].clientY;
    startTop = document.documentElement.scrollTop
  });
  el.addEventListener('touchend', function (e) {
    var touch = e.changedTouches;
    endX = touch[0].clientX;
    endY = touch[0].clientY;
    endTop = document.documentElement.scrollTop
    cons();  //startX endX 的数据收集应该放在touchend事件后执行，而不是放在touchstart事件里执行，这样才能访问到touchstart和touchend这2个事件产生的startX和endX数据。另外startX和endX在_touch事件函数里是全局性的，所以在此函数中都可以访问得到，所以只需要注意事件执行的先后顺序即可。
  });
}

_touch();