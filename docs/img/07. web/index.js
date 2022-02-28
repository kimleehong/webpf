console.clear();

$('body').imagesLoaded(function() {
  $('.loading').remove();
  AOS.init();
});

// main slide
const swiper = new Swiper(".swiper-box-1 .swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  // If we need pagination
  pagination: {
    el: ".swiper-box-1 .swiper-pagination",
    clickable: true
  }
});

// review slide
const swiper2 = new Swiper(".swiper-box-2 .swiper", {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: ".swiper-box-2 .swiper-pagination",
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-box-2 .swiper-button-next",
    prevEl: ".swiper-box-2 .swiper-button-prev"
  }
});

// menu-box
//탑바 초기화
function TopBar__init() {
  $(".top_bar__menu > img").click(function () {
    SideBar__show();
  });
}

// 사이드바 노출
function SideBar__show() {
  $(".top_bar__menu, .top_bar").addClass("active");
}

TopBar__init();

//사이드바 초기화
function SideBar__init() {
  $(".top_bar__menu>.top_bar__menu-box>.sidebar-close").click(function () {
    SideBar__hidden();
  });
}

//사이드바 숨김
function SideBar__hidden() {
  $(".top_bar__menu, .top_bar").removeClass("active");
}

SideBar__init();

//탑스크롤
var $window = $(window);

var windowScrollTop = 0;
var windowHeight = 0;

function Top__show() {
  $("html");
}

function Top__init() {
  $window.scroll(function () {
    console.log(windowHeight);
    if (windowScrollTop == 0) {
      Top__show();
    }
  });
}

Top__init();

function ToTopBtn__init() {
  $(".btn-to-top")
    .stop()
    .click(function () {
      Top__show();

      $("html,body").animate(
        {
          scrollTop: 0
        },
        300
      );
    });
}

ToTopBtn__init();
