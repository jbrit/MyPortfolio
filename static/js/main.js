$(() => {
  (() => {
    // Set Progress bars
    $(".colored-progress-section").on("click", function () {
      $(this).css("width", $(this).attr("data-value"));
      $(this).css("background-color", $(this).attr("data-color"));
    });
    $(".colored-progress-section").trigger("click");
  })();
});
