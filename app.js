
//? scrollY > 0 navbar sticky

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var navbar = $(".navbar");

        if (scroll > 0) {
            navbar.addClass("sticky");
        } else {
            navbar.removeClass("sticky");
        }
    });
});

// ? Bolum 7 Qaleriya
$(document).ready(function() {

    $(`[unique-script-id="w-w-dm-id"] .btn-box`).click(function() {
      $(this).parent().children(".overlay").show();
  
    });
  
  
    $(`[unique-script-id="w-w-dm-id"] .close`).click(function() {
      $(".overlay").hide();
    });
  });