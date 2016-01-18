/**
 * Created by Li on 2015/12/30.
 */
$(function () {
    /**/
    $('aside.slide-wrapper').on('touchstart', 'li', function (e) {
      $(this).addClass('current').siblings('li').removeClass('current');
    });

    $('a.slide-menu').on('click', function (e) {
      $('body').css("overflow","hidden");
      //var wh = $('div.wrapperhove' + 'rtree').height();
      //$('div.slide-mask').css('height', wh).show();
      //$('aside.slide-wrapper').css('height', wh).addClass('moved');
      $('div.slide-mask').show();
      $('aside.slide-wrapper').addClass('moved');
    });

    $('div.slide-mask').on('click', function () {
      $('div.slide-mask').hide();
      $('aside.slide-wrapper').removeClass('moved');
      $('body').removeAttr('style');
    });

  }
)