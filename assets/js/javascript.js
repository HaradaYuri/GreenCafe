
$(document).ready(function () {
    // hamburger
    //open
    $("#hamOpen").click(function () {
        $(".hamburger-container").css("width", "100%");
    });

    //close
    $("#hamClose").click(function () {
        $(".hamburger-container").css("width", "0%");
    });

    //link
    $(".ham-ul li").click(function () {
        $(".hamburger-container").css("width", "0%");
    });

    //modal
    //open
    // $('#openModal').click(function(){
    //     $('.modal-container').css('width','0');
    //     $('.modal-content').css('display','block');
    // });

    // //close
    // $('#modClose').click(function(){
    //     $('.modal-container').css("width","0");
    //     $('.modal-content').css("display","none")
    // });

    //h1 fadeIn
    $(".banner-content").hide().fadeIn(1500);

    //icon animation

    // goDown();

    // function goDown(){
    //     $('.logo-h2 i').animate(
    //         {
    //             bottom:'-10px',
    //         },
    //         'slow', function(){
    //             goUp();
    //         }
    //         );
    //     };

    //     function goUp(){
    //         $(".logo-h2 i").animate(

    //             {
    //                 bottom: '10px',
    //             },
    //             'slow', function(){
    //                 goDown();
    //             }
    //         );
    //     };

    // bannerSlider
    //bannerSlider auto slide

    function autoBanner() {
        bannerInterval = setInterval(function () {
            moveBanner();
        });
    }

    //これONでスライドショーstart
    autoBanner();

    var bannerWidth = $("#bannerSlider ul li").width();
    var bannerHeight = $("#bannerSlider ul li").height();
    var bannerCount = $("#bannerSlider ul li").length;

    var bannerUIWidth = bannerWidth * bannerCount;

    // $("#bannerSlider").css({ width: bannerWidth, height: bannerHeight });
    $("#bannerSlider ul").css({
        width: bannerUIWidth,
        height: bannerHeight,
        // marginRight: bannerWidth,
        // marginLeft: -bannerWidth,
    });

    $("#bannerSlider ul li").last().prependTo("#bannerSlider ul");

    function moveBanner() {
        $("#bannerSlider ul").animate(
            {
                left: -bannerWidth,
            },
            50000,
            "linear",
            function () {
                $("#bannerSlider ul li").first().appendTo("#bannerSlider ul");
                $("#bannerSlider ul").css("left", "0");
            }
        );
    }

    //menu effects
    //top rotate
    function topRotate() {
        $("#smo-top").css("transform", "rotate(0)");
        $("#toa-top").css("transform", "rotate(0)");
    }

    //sub fadeIn
    // function subIn(){
    //     $("#sub-box1").hide().fadeIn(1000);
    //     $("#sub-box2").hide().fadeIn(2000);
    //     $("#sub-box3").hide().fadeIn(3000);
    //     $("#sub-box4").hide().fadeIn(4000);
    // }

    //calling
    $(".menu-anime-trigger").hover(function () {
        topRotate();
        // subIn();
    });

    //storeSlider
    //storeSlider auto slide
    function autoSlide() {
        interval = setInterval(function () {
            moveRight();
        }, 3500);
    }

    autoSlide();

    $(".move-left").hover(
        function () {
            // over
            clearInterval(interval);
        },
        function () {
            // out
            autoSlide();
        }
    );

    $(".move-right").hover(
        function () {
            // over
            clearInterval(interval);
        },
        function () {
            // out
            autoSlide();
        }
    );

    //instagram accordion

    if (window.matchMedia("(min-width:786px)").matches) {
        //matchMedia == responsive javascript
        $("#flip1").click(function () {
            $("#flipTx1").slideToggle();
            $(".flip1").toggleClass("active");
        });

        $("#flip2").click(function () {
            $("#flipTx2").slideToggle();
            $(".flip2").toggleClass("active");
        });

        $("#flip3").click(function () {
            $("#flipTx3").slideToggle();
            $(".flip3").toggleClass("active");
        });
    }

    //function ver.
    // function flip1() {
    //     $("#flipTx1").slideToggle();
    //     $(".flip1").toggleClass("active");
    // }

    // function flip2() {
    //     $("#flipTx2").slideToggle();
    //     $(".flip2").toggleClass("active");
    // }

    // function flip3() {
    //     $("#flipTx3").slideToggle();
    //     $(".flip3").toggleClass("active");
    // }

    // stores slider
    var sliderWidth = $("#storesSlider ul li").width();
    var sliderHeight = $("#storesSlider ul li").height();
    var sliderCount = $("#storesSlider ul li").length;

    var sliderUIWidth = sliderWidth * sliderCount;

    $("#storesSlider").css({ width: sliderWidth, height: sliderHeight });
    $("#storesSlider ul").css({
        width: sliderUIWidth,
        height: sliderHeight,
        marginLeft: -sliderWidth,
    });
    // marginLeft: -sliderWidth  == pull next Li!!!!!!!

    $("#storesSlider ul li").last().prependTo("#storesSlider ul");

    function moveLeft() {
        $("#storesSlider ul").animate(
            {
                left: sliderWidth,
            },
            1000,
            function () {
                $("#storesSlider ul li").last().prependTo("#storesSlider ul");
                $("#storesSlider ul").css("left", "0");
            }
        );
    }

    function moveRight() {
        $("#storesSlider ul").animate(
            {
                left: -sliderWidth,
            },
            1000,
            function () {
                $("#storesSlider ul li").first().appendTo("#storesSlider ul");
                $("#storesSlider ul").css("left", "0");
            }
        );
    }

    $(".move-left").click(function () {
        moveLeft();
    });

    $(".move-right").click(function () {
        moveRight();
    });
});
