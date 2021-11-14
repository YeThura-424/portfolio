// nav bar scroll
$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
});
// for skills section
$(".skills-content").waypoint(
  function () {
    $(".progress .progress-bar").each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + "%");
    });
  },
  {
    offset: "80%",
  }
);
// backtotop button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".scrollToTop").fadeIn();
  } else {
    $(".scrollToTop").fadeOut();
  }
});

//Click event to scroll to top
$(".scrollToTop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});

//scroll to div
$('a[href*="#"]').on("click", function (e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    500,
    "linear"
  );
});

// Wrap every letter in a span
anime
  .timeline({ loop: true })
  .add({
    targets: ".ml14 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeInOutExpo",
    duration: 900,
  })
  .add({
    targets: ".ml14 .letter",
    opacity: [0, 1],
    translateX: [40, 0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: "-=600",
    delay: (el, i) => 150 + 25 * i,
  })
  .add({
    targets: ".ml14",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml2 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".ml2",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      '<i class="icofont-rounded-left">',
      '<i class="icofont-rounded-right">',
    ],
  });
});
