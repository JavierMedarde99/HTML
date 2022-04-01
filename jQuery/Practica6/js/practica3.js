$(document).ready(function () {
    $(document).scroll(function () {
        $("header").css("position", "fixed");
        $("header").css("opacity", 0.4);
    })

    $(window).resize(function () {
            $("#menu").css("display","none");
            
    })

    $("#menu-hamburger").click(function(){
        $("#menu").css("display","flex");
    })
})