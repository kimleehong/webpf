console.clear();

$("body").imagesLoaded(function () {
  $(".loading").remove();
  AOS.init();
});

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

      $("html,body").animate({
          scrollTop: 0
        },
        300
      );
    });
}

ToTopBtn__init();