$(document).ready(function () {
    $(".downAbout").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1500);
    });
});

$(document).ready(function () {
    $(".downSkills").click(function () {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1500);
    });
});

$(document).ready(function () {
    $(".downPortfolio").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1500);
    });
});

$(document).ready(function () {
    $(".downContact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1500);
    });
});

$(document).ready(function () {
    $(".upToTop").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1000);
    });
});