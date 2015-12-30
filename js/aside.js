/**
 * Created by Li on 2015/12/30.
 */
$(function () {
    /**/
    $('aside.slide-wrapper').on('touchstart', 'li', function (e) {
      $(this).addClass('current').siblings('li').removeClass('current');
    });

    $('a.slide-menu').on('click', function (e) {
      var wh = $('div.wrapperhove' + 'rtree').height();
      $('div.slide-mask').css('height', wh).show();
      $('aside.slide-wrapper').css('height', wh).addClass('moved');
    });

    $('div.slide-mask').on('click', function () {
      $('div.slide-mask').hide();
      $('aside.slide-wrapper').removeClass('moved');
    });

    $('#stock-tend').on('click', function () {
      var e = window.event || arguments[0];
      var src = e.srcElement || e.target;
      if (src.nodeName == "INPUT") {
        console.log(src,src.value);
        $(src).parent().siblings().removeClass('am-active');
        $(src).parent().addClass('am-active');
        containerPain('', src.value);
      }
    })
  }
)