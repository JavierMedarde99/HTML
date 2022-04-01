$(document).ready(function () {
    $("div.boton > span").on({
        mouseenter: function () {
            $(this).css("color", "blue");
        },
        mouseleave: function () {
            $(this).css("color", "black");
        },
        click: function () {
            $("#menu"). toggle();
        },
    })
})