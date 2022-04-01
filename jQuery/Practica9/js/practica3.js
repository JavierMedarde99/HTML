$(document).ready(function () {
    $("div.boton > span").on({
        mouseenter: function () {
            $(this).animate({color:"blue"},500);
        },
        mouseleave: function () {
            $(this).animate({color:"black"},500);
        },
        click: function () {
            $("#menu"). toggle();
        },
    })
})