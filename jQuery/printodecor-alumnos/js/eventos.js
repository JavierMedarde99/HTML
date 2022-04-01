$(document).ready(function () {
    //hamburgesa
    $("div#hamburger").click(function(){
    if($("ul#menu-toggle").css("display")=="block"){
        $("ul#menu-toggle").slideUp("slow");
        stop(true,false)
        $(this).children("span").animate({
        
            backgroundColor: "black"
        },50);
        $("span.line-ham:nth-child(2)").animate({
            width: "1.37rem",
           
        });
        
    }else{
        $("ul#menu-toggle").slideDown("slow");
        stop(true,false)
        $(this).children("span").animate({
            backgroundColor: "green"
        },50);
        $("span.line-ham:nth-child(2)").animate({
            width: "1.87rem",
        });
    }
    });

    //submenu
    $("ul#menu-toggle > li ").click(function(){
     if($(this).children("span").html()=="+" || $(this).children("span").html()=="-"){
        
         if($(this).children("ul").css("display")=="block"){
             $(this).children("span").html("+");
             $(this).children("ul").animate({
               left: "-=50vw",
            });
            $(this).children("ul").fadeOut("fast");
            stop(true,false)
         }else{
            $(this).children("span").html("-");
              $(this).children("ul").fadeIn("fast");
         $(this).children("ul").animate({
            left: "+=50vw",
         });
         stop(true,false)
         }
       
     }
    })

    //mover la ventana
    $(window).resize(function(){
        $("div#hamburger").next().removeAttr("style")
        $("div#hamburger").children().removeAttr("style")
    })

    //barra social
    
    $("nav#barra-social").animate({
        opacity: 0.4,
    },function(){
        $("nav#barra-social").show() 
    });

    $("div#chat > header#header-chat1").click(function(){
        $("div#chat").children("header#header-chat2").slideDown();
        $("div#chat").children("div#window-chat").slideDown();
       
    })

    $("div#chat").children("header#header-chat2").children("span").click(function(){
       
        $("div#chat").children("header#header-chat2").slideUp();
        $("div#chat").children("div#window-chat").slideUp();
    })
    
    //chat
    $("div#chat").animate({
        opacity: 0.4,
    },function(){
        $("div#chat").show() 
    });
})