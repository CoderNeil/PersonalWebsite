/*
 Alpha by HTML5 UP
 html5up.net | @n33co
 Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
 */

(function ($) {
    $("body #navPanel").on("click",  function(event) {
        console.log("click body");
    });

    $(".nav-scroll").click(function(event) {
        console.log(event);
        event.preventDefault();
        $('html,body').stop(true,false).animate({
                scrollTop: $(event.target.hash).offset().top - $(event.currentTarget).data("offset")
            },
            'slow');
    });

    //$(".about").click(function (event) {
    //    console.log(event.target.hash);
    //    event.preventDefault();
    //    $('html,body').stop(true,false).animate({
    //            scrollTop: $("#about-block").offset().top
    //        },
    //        'slow');
    //});
    //$(".project").click(function () {
    //    $('html,body').stop().animate({
    //            scrollTop: $("#project-block").offset().top - 70
    //        },
    //        'slow');
    //});
    //$(".android").click(function () {
    //    $('html,body').stop().animate({
    //            scrollTop: $("#android-block").offset().top - 70
    //        },
    //        'slow');
    //});
    //$(".web").click(function () {
    //    $('html,body').stop().animate({
    //            scrollTop: $("#web-block").offset().top - 70
    //        },
    //        'slow');
    //});
    //$(".ios").click(function () {
    //    $('html,body').stop().animate({
    //            scrollTop: $("#ios-block").offset().top - 70
    //        },
    //        'slow');
    //});

    $(".learnMore a").on("click", function() {
        var $this = $(this);
        var $content = $this.parent().parent().prev("div.content");
        var linkText = $this.text().toUpperCase();

        if(linkText === "SHOW MORE"){
            linkText = "Show less";

            //$content.addClass("showContent");
            //$content.removeClass("hideContent");
            $content.switchClass("hideContent", "showContent", 400);
        } else {
            linkText = "Show more";
            //$content.addClass("hideContent");
            //$content.removeClass("showContent");
            $content.switchClass("showContent", "hideContent", 400);
        };

        $this.text(linkText);
    });

    skel.breakpoints({
        wide: '(max-width: 1680px)',
        normal: '(max-width: 1280px)',
        narrow: '(max-width: 980px)',
        narrower: '(max-width: 840px)',
        mobile: '(max-width: 736px)',
        mobilep: '(max-width: 480px)'
    });

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $header = $('#header'),
            $banner = $('#banner');

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on narrower.
        skel.on('+narrower -narrower', function () {
            $.prioritize(
                '.important\\28 narrower\\29',
                skel.breakpoint('narrower').active
            );
        });

        // Dropdowns.
        $('#nav > ul').dropotron({
            alignment: 'right'
        });

        // Off-Canvas Navigation.

        // Navigation Button.
        $(
            '<div id="navButton">' +
            '<a href="#navPanel" class="toggle"></a>' +
            '</div>'
        )
            .appendTo($body);

        // Navigation Panel.
        $(
            '<div id="navPanel">' +
            '<nav>' +
            $('#nav').navList() +
            '</nav>' +
            '</div>'
        )
            .appendTo($body)
            .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                resetScroll: true,
                resetForms: true,
                side: 'left',
                target: $body,
                visibleClass: 'navPanel-visible'
            });

        // Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
        if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
            $('#navButton, #navPanel, #page-wrapper')
                .css('transition', 'none');

        // Header.
        // If the header is using "alt" styling and #banner is present, use scrollwatch
        // to revert it back to normal styling once the user scrolls past the banner.
        // Note: This is disabled on mobile devices.
        if (!skel.vars.mobile
            && $header.hasClass('alt')
            && $banner.length > 0) {

            $window.on('load', function () {

                $banner.scrollwatch({
                    delay: 0,
                    range: 0.5,
                    anchor: 'top',
                    on: function () {
                        $header.addClass('alt reveal');
                    },
                    off: function () {
                        $header.removeClass('alt');
                    }
                });

            });

        }

    });

})(jQuery);