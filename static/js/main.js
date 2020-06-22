$(() => {
  (() => {
    var headerHeight = $("nav.navbar").outerHeight(); // Target your header navigation here

    $("nav li a").click(function (e) {
      $(".collapse").collapse("hide");
      $("nav li").removeClass("active");
      $(this).parent().addClass("active");
      var targetHref = $(this).attr("href");

      $("html, body").animate(
        {
          scrollTop: $(targetHref).offset().top - headerHeight, // Add it to the calculation here
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
