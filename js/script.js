  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".video-parallax").css({
      transform: "translateY(" + -0.35*scroll + "px)"
    });
    $(".overlay").css({
        transform: "translateY(" + -0.35*scroll + "px)"
      });
  });
y