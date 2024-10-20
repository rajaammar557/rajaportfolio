var typed = new Typed('#typed', {
    strings: ['Web Developer', 'Web Designer', 'Web Master', 'Freelancer'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    startDelay: 1000,
    loop: true
});
var typeds = new Typed('#typeds', {
    strings: ['Web Developer', 'Web Designer', 'Web Master', 'Freelancer'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    startDelay: 1000,
    loop: true
});

/*
 * Animation on scroll
 */
window.addEventListener('load', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        // once: true,
        mirror: true,
        offset: 220
    })
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 130) {
        $('#navi').addClass('stick');
    } else if (!scroll > 130) {
        $('#navi').removeClass('stick');
    }
    else {
        $('#navi').removeClass('stick');
    }
});

$(document).ready(function () {

    $('.menu-click').on('click', function () {
        $('.menu').css("margin-right", "5rem");
        $('.nav-list').addClass('nav-list-show');
        $('.menu-click').addClass('hide');
        $('.menu-click').removeClass('menu');
    })


    $('.menu-close').on('click', function () {
        $('.nav-list').removeClass('nav-list-show');
        $('.menu-click').addClass('menu');
        $('.menu').css("margin-right", "");
        $('.menu-click').removeClass('hide');
    })


    $(".toggle-ball").click(function () {
        if ($("#toggle").is(
            ":checked")) {
            $('body').addClass('light_theme');
            $('body').removeClass('dark_theme');
        } else {
            $('body').addClass('dark_theme');
            $('body').removeClass('light_theme');
        }
    });
})

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#7716D8 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
