// nav-fixed
window.onscroll = function () {
  const nav = document.querySelector("nav");
  const navFix = nav.offsetTop;

  if (window.pageYOffset > navFix) {
    nav.classList.add("nav-fixed");
  } else {
    nav.classList.remove("nav-fixed");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// link saat di klik
$(".page-scroll").on("click", function (e) {
  var tujuan = $(this).attr("href");
  var elementTujuan = $(tujuan);
  $("html,body").animate(
    {
      scrollTop: elementTujuan.offset().top - 120,
    },
    1000,
    "swing"
  );

  e.preventDefault;
});
