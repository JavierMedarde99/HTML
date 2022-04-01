$(document).ready(function () {
    //esto es para que aparezca el boton de subir arriba del todo
    $(window).scroll(function () {
        if ($(this).scrollTop() < 100) {
            $("div#volverarriba").hide();
            $("header > div").css("position", "relative");
            //esto para que limpie la cola y asi cuando se petide no se quede parpadeando
            stop(false, true);
        } else {
            $("div#volverarriba").show();
            $("header > div").css("position", "fixed");
            $("header > div").css("width", "100%");
            stop(false, true);
        }
    })

    $("ul#menu").hide();

    $("nav#menu-principal > span").click(function () {
        if ($("ul#menu").css("display") == "none") {
            $("ul#menu").show();
            stop(false, true);
        } else {
            $("ul#menu").hide();
            stop(false, true);
        }

    })

    $("nav#menu-principal > ul#menu").children("li").click(function(){
        if($(this).children("ul").css("display")=="none"){
            $("nav#menu-principal > ul#menu").children("li").children("ul").fadeOut();
            if($("nav#menu-principal > ul#menu").children("li").children("ul").css("display")=="none"){
                $("nav#menu-principal > ul#menu").find("i").removeClass("fa fa-angle-up");
                $("nav#menu-principal > ul#menu").find("i").addClass("fa fa-angle-down");
            }
            $(this).find("i").removeClass("fa fa-angle-down");
           $(this).find("i").addClass("fa fa-angle-up");
            $(this).children("ul").fadeIn();
            stop(false, true);
        }else {
            $(this).children("ul").fadeOut();
            $(this).find("i").removeClass("fa fa-angle-up");
            $(this).find("i").addClass("fa fa-angle-down");
            stop(false, true);
        }
    })

    $("article.item > a > picture > img").hover(
        function(){
            var link=$(this).attr("src");
            for(let i=1;i<=3;i++){
               
                if(link=="img/zapato"+i+".jpg")
            $(this).attr("src","img/zapato"+i+"-1.jpg")
            }
        },
        function(){
            var link=$(this).attr("src");
            for(let i=1;i<=3;i++){
                
                if(link=="img/zapato"+i+"-1.jpg")
            $(this).attr("src","img/zapato"+i+".jpg")
            }
        }
    );
})