$(function () {

    //modal
    $("#openModal").click(function () {
        $(".modal-container").css("width", "0");
        $(".modal-content").css("display", "block");
    });

    //close
    $("#modClose").click(function () {
        $(".modal-container").css("width", "0");
        $(".modal-content").css("display", "none");
    });
});
