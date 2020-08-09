// nav bar scroll
$(window).scroll(function() {
    $('nav').toggleClass('scrolled',
        $(this).scrollTop() > 50);
})
// for skills section
$('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
}, {
    offset: '80%'
});
// backtotop button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});

//Click event to scroll to top
$('.scrollToTop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});

//scroll to div
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault()

    $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
    )
})