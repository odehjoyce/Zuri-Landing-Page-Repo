$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".logo").addClass(".sticky");
    } else {
      $(".logo").removeClass(".sticky");
    }
  });
});
