$(function () {
    //tabbing
    //default
    $(".tabcontent").hide();
    $(".seasonal-container").show();

    // $('.link-seasonal').css({
    //     backgroundColor: 'white',
    //     color: '#e8633c',
    //     border: "2px solid #e8633c",
    // });

    //hover
    // $('.btn-wrapper button').hover(function(){
    //     //hover
    //     $(this).css({
    //         backgroundColor: "white",
    //         color: "#e8633c",
    //         border: "2px solid #e8633c",
    //     });

    // }, function(){
    //     //out
    //     $(this).css({
    //         backgroundColor: "#e8633c",
    //         color: "white",
    //         border: "none",
    //     });

    // });

    //coloring function
    // function colored() {
    //     alert('he');
    //     $('theLink').css({
    //         backgroundColor: "white",
    //         color: "#e8633c",
    //         border: "2px solid #e8633c",
    //     });
    // }

    $(".link-seasonal").click(function () {
        $(".tabcontent").hide();
        $(".seasonal-container").show();
    });

    $(".link-toasts").click(function () {
        $(".tabcontent").hide();
        $(".toast-container").show();
    });

    $(".link-smoothies").click(function () {
        $(".tabcontent").hide();
        $(".smoothie-container").show();
    });

    $(".link-drinks").click(function () {
        $(".tabcontent").hide();
        $(".drink-container").show();
    });

    // menu-img effects
    $("img").hover(function () {
        $(this).css({
            //hover
            width: "95%",
            height: "200px",
        });
    });

    $("img").mouseleave(function () {
        $(this).css({
            width: "100%",
            height: "220px",
        });
    });

    //effect back
    function effectBack() {
        $(".effect-back").css({
            transform: "translateY(-100vh)",
        });
    }

    effectBack();




    
});