$(() => {
  AOS.init();
  (() => {
    $(window).scroll(function () {
      // Says this function is preformed continuisly while scrolling.
      var Scroll = $(window).scrollTop() + 110, // This variable finds the distance you have scrolled from the top.
        SectionOneOffset = $("#home").offset().top - 110,
        SectionTwoOffset = $("#about").offset().top - 110,
        SectionThreeOffset = $("#skills").offset().top - 110,
        SectionFourOffset = $("#services").offset().top - 110,
        SectionFiveOffset = $("#contact").offset().top - 110;
      $("nav li").removeClass("active");
      if (Scroll >= SectionFiveOffset)
        $(".menu-item-5").parent().addClass("active");
      else if (Scroll >= SectionFourOffset)
        $(".menu-item-4").parent().addClass("active");
      else if (Scroll >= SectionThreeOffset)
        $(".menu-item-3").parent().addClass("active");
      else if (Scroll >= SectionTwoOffset)
        $(".menu-item-2").parent().addClass("active");
      else if (Scroll >= SectionOneOffset)
        $(".menu-item-1").parent().addClass("active");
    });
  })();
  (() => {
    var headerHeight = $("nav.navbar").outerHeight(); // Target your header navigation here

    $("[href]").click(function (e) {
      $(".collapse").collapse("hide");
      var targetHref = $(this).attr("href");

      $("html, body").animate(
        {
          scrollTop: $(targetHref).offset().top - headerHeight + 1, // Add it to the calculation here
        },
        1000
      );

      e.preventDefault();
    });
  })();
  // Set Progress bars
  (() => {
    $(".colored-progress-section").on("click", function () {
      $(this).css("width", $(this).attr("data-value"));
      $(this).css("background-color", $(this).attr("data-color"));
      $(this).css("color", $(this).attr("data-color"));
    });
    $(".colored-progress-section").trigger("click");
  })();
});
