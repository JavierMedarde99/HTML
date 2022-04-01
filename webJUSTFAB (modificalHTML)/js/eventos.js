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

    //Ocultamos el menu
    $("ul#menu").css("margin-left",-500);

    //que se despliegue el menu al hacer click a la hamburgesa
    $("nav#menu-principal > span").click(function () {
        
        if ( $("div#pagina").hasClass("no")) {
            //animacion para desplegar el menu
            $("ul#menu").animate({
                "margin-left": "+=500",
            });
            $("div#pagina").css(
                "margin-right", -500,
                "width","100%"
            )
          
            //cambiar el color
            $("div#pagina").css("background-color","grey")
            $("img").css("opacity", 0.4)
            $("div#pagina").removeClass("no")
            stop(false, true);
        } else { 
            $("div#pagina").addClass("no");
            $("ul#menu").animate({
                "margin-left": "-=500",
            });
            $("div#pagina").css(
                "width","100%"
            )
            $("div#pagina").css("background-color","transparent")
            $("img").css("opacity", 1)
            stop(false, true);  
       
        }

    })

  
        $("main").click(function () {
            if ( !$("div#pagina").hasClass("no")) {
                  $("div#pagina").addClass("no");
            $("ul#menu").animate({
                "margin-left": "-=500",
            });
            $("div#pagina").css(
                "width","100%"
            )
            $("div#pagina").css("background-color","transparent")
            $("img").css("opacity", 1)
        }
   })

   $("header > p").click(function () {
    if ( !$("div#pagina").hasClass("no")) {
    $("div#pagina").addClass("no");
    $("ul#menu").animate({
        "margin-left": "-=500",
    });
    $("div#pagina").css(
        "width","100%"
    )
    $("div#pagina").css("background-color","transparent")
    $("img").css("opacity", 1)
}
   })
   $("header > nav").click(function () {
    if ( !$("div#pagina").hasClass("no")) {
    $("div#pagina").addClass("no");
    $("ul#menu").animate({
        "margin-left": "-=500",
    });
    $("div#pagina").css(
        "width","100%"
    )
    $("div#pagina").css("background-color","transparent")
    $("img").css("opacity", 1)
}
   })
   
//se despliega el submenu
    $("ul#menu").children("li").click(function(){
        if($(this).children("ul").css("display")=="none"){
            $("ul#menu").children("li").children("ul").fadeOut();
            if($("ul#menu").children("li").children("ul").css("display")=="none"){
                $("ul#menu").find("i").removeClass("fa fa-angle-up");
                $("ul#menu").find("i").addClass("fa fa-angle-down");
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



//que cambie la foto
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