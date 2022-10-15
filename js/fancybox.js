function fancyBox(selector) {
  // if (!CONFIG.image_zoom.enable || !('fancybox' in jQuery)) { return; }

  jQuery(selector || '.post__article :not(a) > img, .post__gallery--block img').each(function() {
    var $image = jQuery(this);
    var $wrapBlock = $image.parent()
    var $imageWrap = []
    var imageUrl = $image.attr('data-src') || $image.attr('src') || '';
    /* if (CONFIG.image_zoom.img_url_replace) {
      var rep = CONFIG.image_zoom.img_url_replace;
      var r1 = rep[0] || '';
      var r2 = rep[1] || '';
      if (r1) {
        if (/^re:/.test(r1)) {
          r1 = r1.replace(/^re:/, '');
          var reg = new RegExp(r1, 'gi');
          imageUrl = imageUrl.replace(reg, r2);
        } else {
          imageUrl = imageUrl.replace(r1, r2);
        }
      }
    } */
    if (!$image.is('.post__gallery--block img')) {
      $image.addClass('post__img--img')
      $imageWrap = jQuery('<a>',{
        class: 'fancybox post__img--link',
        href: imageUrl
      }).append($image)
      $wrapBlock.append($imageWrap).addClass('post__img--block')
    } else {
      $imageWrap = $image.parent()
    }

    if ($imageWrap.length !== 0) {
      if ($image.is('.post__gallery--block img')) {
        $imageWrap.attr('data-fancybox', 'gallery').attr('rel', 'gallery');
      } else {
        $imageWrap.attr('data-fancybox', 'default').attr('rel', 'default');
      }

      var imageTitle = $image.attr('title') || $image.attr('alt');
      if (imageTitle) {
        $imageWrap.attr('title', imageTitle).attr('data-caption', imageTitle);
      }
    }
  });

  jQuery.fancybox.defaults.hash = false;
  jQuery('.fancybox').fancybox({
    loop: true,
    clickOutside: "close",
    helpers: {
      overlay: {
        locked: false
      }
    },
    mobile: {
      clickContent: function(current, event) {
        return current.type === "image" ? "close" : false;
      },
      clickSlide: function(current, event) {
        return current.type === "image" ? "toggleControls" : "false";
      },
    },
  });

}

document.addEventListener("DOMContentLoaded", (event) => {
  fancyBox()
});   

document.addEventListener('pjax:complete', function (){
  fancyBox()
})