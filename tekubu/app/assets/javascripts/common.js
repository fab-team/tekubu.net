// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//

$(function () {
	$('.p-header__menu__btn').on('click', function (event) {
		if (!$(this).hasClass('is_active')) {
			$(this).addClass('is_active');
			$('.p-header__menu').fadeIn();
		}else {
			$(this).removeClass('is_active');
			$('.p-header__menu').fadeOut();
		}
	});

    var hoge = $('.c-box__title').text();
    console.log(hoge);

  /*-----------------------------------
   * twitter
   -----------------------------------*/
   $('.js-sharebtn').on('click', function (e) {
    e.preventDefault();

    var dualScreenLeft = undefined;
    var dualScreenTop = undefined;
    var windowWidth = undefined;
    var windowHeight = undefined;
    var popupWidth = 650;
    var popupHeight = 450;
    var top = undefined;
    var left = undefined;
    var href = undefined;
    var description = '';

    // URLを取得
    var protocol = location.protocol;
    var host = location.host;
    var title = $(this).find('.c-button__sns__title').text();
    var talkUrl = $(this).find('.c-button__sns__link').text();
    var snsUrl = encodeURIComponent(host + talkUrl);
    console.log(title);

    // 変数に止まったテキストを代入
    // for (var i = 0; i < SLOT_NUM; i++) {
    //   description += $slot_txt[i].text() + '\n';
    // }

    description += 'オススメのプログラミング本';
    description += '\n';
    description += '「';
    description += $(this).find('.c-button__sns__title').text();
    description += '」';
    description += '\n\n';

    if (typeof window.screenLeft !== 'undefined') {
      dualScreenLeft = window.screenLeft;
      dualScreenTop = window.screenTop;
    } else {
      dualScreenLeft = window.screen.left;
      dualScreenTop = window.screen.top;
    }

    if (typeof window.innerWidth !== 'undefined') {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
    } else if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined') {
      windowWidth = document.documentElement.clientWidth;
      windowWidth = document.documentElement.clientHeight;
    } else {
      windowWidth = window.screen.width;
      windowWidth = window.screen.height;
    }

    left = windowWidth / 2 - popupWidth / 2 + dualScreenLeft;
    top = windowHeight / 2 - popupHeight / 2 + dualScreenTop;


    href = 'http://twitter.com/share?url=http://' + snsUrl + '&text=' + encodeURIComponent(description) + '&hashtags=' + encodeURIComponent('Tekubu') + ',' + encodeURIComponent('プログラミング') + ',' + encodeURIComponent('オススメのプログラミング本をご紹介');

    window.open(href, 'twitter', 'width=' + popupWidth + ', height=' + popupHeight + ', top=' + top + ', left=' + left);
  });
});