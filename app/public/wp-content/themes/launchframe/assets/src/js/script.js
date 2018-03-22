(function($, w){
    "use strict";
    /* global
     * console, setTimeout */

var theWindow = $(window);
var wb = {
    mobileNav: {
        test() {
            return true;
        },
        run() {
            const menu = $("nav ul");
            $(".menu-toggle").on("click", function() {
                $(this).toggleClass("open");
                menu.toggleClass("open");
            });
        }
    },
    scrollFunctions: {
        test() {
            return true;
        },
        run() {
            const homeBody = $("body.home");
            const nav = $("nav");
            const docHeight = $(document).height();
            const windowHeight = $(window).height();
            $(document).on("scroll", function() {
                let scroll = $(window).scrollTop();
                if(scroll < 100) {
                    homeBody.removeClass("scrolled");
                } else {
                    homeBody.addClass("scrolled");
                }
                if(scroll > 50) {
                    nav.addClass("scrolled");
                }
                if(scroll === 0) {
                    nav.addClass("top");
                } else if(scroll + windowHeight > docHeight - 100){
                    nav.addClass("top");
                } else {
                    nav.removeClass("top");
                }
            });
        }
    },
    homeHeroText: {
        test() {
            return true;
        },
        run() {
            function arrayMe(string) {
                // For all matching elements
                $(string).each(function() {

                    // Get contents of string
                    var myStr = $(this).html();

                    // Split myStr into an array of characters
                    myStr = myStr.split("");

                    // Build an html string of characters wrapped in  tags with classes
                    var myContents = "";
                    for (var i = 0, len = myStr.length; i < len; i++) {
                        myContents += '<span class="single-char char-' + i + '">' + myStr[i] + '</span>';
                    }
                    $(".word").addClass("show");
                    // Replace original string with constructed html string
                    $(this).html(myContents);
                });
                $("body").find('.single-char').each(function(k, v) {
                    var el = this;
                    setTimeout(function () {
                        $(el).addClass("show");
                    }, k * 80);
                });
            }

            // Calling arrayMe on page load, on class "sample-text"
            $('document').ready(function() {
                var myStringType = $('.word');
                arrayMe(myStringType);
            });
        }
    },
    services: {
        test() {
            return true;
        },
        run() {
            let serviceBG = $(".service-bg");
            $(".service-container").on("mouseover", function() {
                $(serviceBG).addClass("show");
                $(this).siblings().addClass("hide");
                $(this).addClass("active");
            });
            $(".service-container").on("mouseout", function() {
                $(serviceBG).removeClass("show");
                $(this).siblings().removeClass("hide");
                $(this).removeClass("active");
            });

            // let start = $(".section-1").offset.top + $(".section-1").height();

            // $.jScrollability([
            //     {
            //         'selector': '.slide-in-demo',
            //         'start': 'parent',
            //         'end': 'parent',
            //         'fn': {
            //             'left': {
            //                 'start': 100,
            //                 'end': 0,
            //                 'unit': '%'
            //             }
            //         }
            //     }
            // ]);
        }
    }
};

Object.keys(wb).forEach(function(key){
    if (wb[key].test()){ wb[key].run(); }
});

}(jQuery, window));
