/* ===================================================================
 * Viewport切り替え
=================================================================== */
$(document).ready(function(){
  var ua = navigator.userAgent;
  if ((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)) {
     $('head>meta[name="viewport"]').replaceWith('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">');
  } else {
     $('head>meta[name="viewport"]').replaceWith('<meta name="viewport" content="width=1280,user-scalable=no">');
  }
});

/* ===================================================================
 * Android切り替え
=================================================================== */
$(function() {
  var agent = navigator.userAgent;
  if (agent.search(/Android/) != -1) {
      $("body").addClass("android");
  }
});

/* ===================================================================
 * IE スムーズスクロール無効化
=================================================================== */
$(document).ready(function(){
  if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
    $("body.vision").on("mousewheel", function () {
      event.preventDefault();
      var wd = event.wheelDelta;
      var csp = window.pageYOffset;
      window.scrollTo(0, csp - wd);
    });
  }
});

/* ===================================================================
 * アコーディオン
=================================================================== */
$(function () {
  $(".acc-trigger").on("click", function(){
    $(this).next().stop().slideToggle();
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".card-service-box .mh-ttl").matchHeight();
    }
    else {
      $(this).addClass("active");
      $(".card-service-box .mh-ttl").matchHeight();
    }
  });
});

/* ===================================================================
 * メガドロ
=================================================================== */
$(function () {
  if (window.matchMedia('(max-width:767px)').matches) {

    //SP
    $(".sp-menu-btn").on('click', function () {
      var gnav = $('.gnav-wrap');

      if (!(gnav.hasClass("show"))) {
        scroll = $(window).scrollTop();
        gnav.addClass("show").stop(true).slideDown();
        $(this).addClass("cur");
        $(".mask").stop(true).fadeIn(300);
        
        $('html').addClass('fixed');
        $('#wrap').css({
          top: -scroll
        });
      } else {
        gnav.removeClass("show").stop(true).slideUp();
        $(this).removeClass("cur");
        $(".mask").stop(true).fadeOut(300);

        $("html").removeClass("fixed");
        $('#wrap').css({
          top: 0
        });
        $(window).scrollTop(scroll);
      }

    });

    $(".menu-trigger").on('click', function (e) {
      e.preventDefault();
      $(".drop-menu-wrap").slideUp();
      $(this).next().stop(true).slideToggle();
      $(this).toggleClass("active");
    });

    $(".close-btn").on('click', function () {
      $(".gnav-wrap").stop(true).slideUp(300).removeClass("show");
      $(".sp-menu-btn").removeClass("cur");
      $(".mask").fadeOut(300);
      $("html").removeClass("fixed");
      $('#wrap').css({
        top: 0
      });
      $(window).scrollTop(scroll);
    });

  } else {

    //PC
    $(".menu-trigger").on('click', function (e) {
      e.preventDefault();
      $(".drop-menu-wrap").fadeOut(300);
      $(this).next().stop(true).fadeToggle(300);
      $(".menu-linkpanel .arr-txt").matchHeight();
      if ($(this).hasClass("cur")) {
        $(".menu-trigger").removeClass("cur");
        $(".mask").removeClass("show");
      } else {
        $(".menu-trigger").removeClass("cur");
        $(this).addClass("cur");
        $(".mask").addClass("show");
      }
    });

    $(".mask").on('click', function () {
      $(".menu-trigger").removeClass("cur");
      $(".drop-menu-wrap").fadeOut(300);
      $(this).removeClass("show");
    });
    
    $(".pc-close-btn").on('click', function () {
      $(".drop-menu-wrap").fadeOut(300);
      $(".menu-trigger").removeClass("cur");
      $(".mask").removeClass("show");
    });
    
    var headerWrap = $(".header-wrap");
    $(window).on('load scroll', function () {
      if ($(this).scrollTop() > 10) {
        headerWrap.addClass("shadow");
      } else {
        headerWrap.removeClass("shadow");
      }
    });

  }

});


/* ===================================================================
 * ヘッダースクロール
=================================================================== */
$(function () {
  if(window.matchMedia('(min-width:768px)').matches) {
    $(window).on("scroll", function(){
      $(".header-wrap").css("left", -$(window).scrollLeft());
      $(".drop-menu-wrap").css("left", -$(window).scrollLeft());
    });
  }
});


/* ===================================================================
 * トップへ戻るボタン
=================================================================== */
$(window).on('load scroll', function () {
  var pagetop = $('.page-top');
  var ftPosi = $("footer").offset().top;
  var windowHeight = $(window).innerHeight();
  var scrollTop = $(window).scrollTop();
  var btnBottom = 72;
  var spBtnBottom = 55;

  if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
  } else {
      pagetop.fadeOut();
  }
  
  if (window.matchMedia('(max-width:767px)').matches) {
    if (ftPosi + spBtnBottom - scrollTop - windowHeight < 0) {
      $(pagetop).addClass("fix");
    } else {
      $(pagetop).removeClass("fix");
    };
  } else {
    if (ftPosi + btnBottom - scrollTop - windowHeight < 0) {
      $(pagetop).addClass("fix");
    } else {
      $(pagetop).removeClass("fix");
    }
  }
      
});

$(".page-top-btn").on('click', function () {
  $('body, html').animate({
      scrollTop: 0
  }, 500);
  return false;
});


/* ===================================================================
 * 高さを揃える
=================================================================== */
$(function () {
  $(".mHeight").matchHeight();
  $(".merit-box .ttl").matchHeight();
  $(".anchor-box").matchHeight();
  $(".panel-box").matchHeight();
  $(".panel-box .ttl").matchHeight();
  $(".panel-box .txt").matchHeight();
  $(".linkpanel-cmn").matchHeight();
  $(".linkpanel-cmn .ttl").matchHeight();
  $(".linkpanel .txt-box").matchHeight();
});


/* ===================================================================
 * アンカーリンク
=================================================================== */
$(function () {
  $(".anc-trigger").on("click", function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
  
  $("#top .include-anchor").on("click", function (e) {
    e.preventDefault();
    var speed = 500;
    var anchor = e.currentTarget;
    var target = anchor.hash;
    var position = $(target).offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
  
  
});


/* ===================================================================
 * slider
=================================================================== */
$(function () {
  $('.top-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
		}]
  });
  
  $('.mv-slider-wrap').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});


/* ===================================================================
 * hover
=================================================================== */
$(function () {
  
  $(".circle-arr-link").hover(
    function () {
      $(this).addClass("grey");
      setTimeout(function () {
        $(".grey").addClass("back");
      }, 500);
    },
    function () {
      $(this).removeClass("back");
      setTimeout(function () {
        $(".circle-arr-link").removeClass("grey");
      }, 500);
    }
  );
  
});


/* ===================================================================
 * sp table scroll
=================================================================== */
$('.sp-scroll .sp-scroll-guide').on('touchstart', function(){
  $(this).fadeOut();
});


/* ===================================================================
 * 外部リンク 確認ダイアログ
=================================================================== */
// ダイアログを出さないURLリスト
var $noDialogUrlArr = [
  "http://www.tomonycard.co.jp/",
  "https://www.tomonycard.co.jp/"
];

// 外部リンク クリック時
$("a[href^=http]").on("click", function() {
    var url = $(this).attr("href"); // hrefの値
    var title = "他の機関"; // サイトタイトル 初期値
    var compare = false; // hrefとURLリストの一致比較結果 初期値

    var msg =''//強制的にアラートを出す

    // data属性での指定がある場合
    if ($(this).attr('data-siteName')) {
      title = $(this).attr('data-siteName');
    }

    // data-msg属性での指定がある場合
    if ($(this).attr('data-msg')) {
      msg = $(this).attr('data-msg');
    }

    // hrefとURLリストの一致比較
    $.each($noDialogUrlArr, function(i, val) {
      if(!url.indexOf(val)){
        compare = true; //存在する
        return false;
      }
    });

    // 一致可否による分岐処理
  	  if (!compare || msg=='true') {
      // 存在しない　→　ダイアログ表示
//      var ok = confirm('ここから先は、'+ title +'のWEBサイトです。\n移動しますか？');
      var ok = confirm('外部リンクに移動しますがよろしいですか？');
      if (ok) window.open(url,'_blank');
      return false;
    } else {
      // 存在する　→　ダイアログ表示なしで別窓遷移
      window.open(url,'_blank');
    }

//    return false;
//  }
});

