$(document).ready(function () {

    $('#menu-toggle').click(function(){
       
        if($(this).attr("class")=="open"){
           $("nav").fadeOut();
            $(this).css('margin-left',"-6%");
            $(this).toggleClass('open');
            $("div#contenido").css("opacity","1")
            $("div.logo").css("display","block")
            $("div#buscador").css("display","block")
            $("div#contenido").css("overflow","visible")
            $("header").css("background","white")
            $("header").css("flex-flow","row")
            $("header").css("justify-content","space-around")
           
        }else{
            $(this).css('margin-left',"0");
            $(this).toggleClass('open');
            $("nav").fadeIn()
            $("div#contenido").css("opacity","0.1")
            $("div.logo").css("display","none")
            $("div#buscador").css("display","none")
            $("div#contenido").css("overflow","hidden")
            $("header").css("background","rgba(255,255,255,.4)")
            $("header").css("flex-flow","column")
            $("header").css("justify-content","flex-start")
            
        }
      })

      $("div#buscador").on({
          click:function(){
            $("nav").css("display", "none");
                $("div.logo").css("display","none")
                $("div#buscador").css("display","none")
                $("div#menu-toggle").css("display","none")
                $("div#contenido").css("opacity","0.1")
                $("header").css("justify-content","space-around")
                $("div#Elbuscador").css("display"," flex")
          }
      });

      $("div#cruz").on({
          click:function(){
            
            $("div.logo").css("display","block")
            $("div#buscador").css("display","block")
            if($(window).width()<1200){
              $("div#menu-toggle").css("display","block")
              $("nav").css("display", "none");
            }else{
              $("div#menu-toggle").css("display","none")
              $("nav").css("display", "flex");
            }
            $("div#contenido").css("opacity","1")
            $("header").css("justify-content","space-around")
            $("div#Elbuscador").css("display"," none")
          }
      })

      $("div#cookies > form > button").on({
          click:function(e){
              
              e.preventDefault();
              $("div#cookies").css("display","none")
          }
      })

      if($("div#slMovil").css("display")=="none" && $("div#slOrdenador").css("display")=="none"){
        if($(window).width()<1200){  
        $('div#slTablet').bxSlider({
        mode: 'fade',
        captions: true,
        controls : false,
        auto: true,
        ariaLive: false,
        pager: false,
        preloadImages: true,
       
      })
    }else{
      $('div#slTablet').bxSlider({
        mode: 'fade',
        captions: true,
        controls : true,
        auto: true,
        ariaLive: false,
        pager: true,
        preloadImages: true,
      })
    }
      }

       if($("div#slTablet").css("display")=="none" && $("div#slOrdenador").css("display")=="none"){
        $('div#slMovil').bxSlider({
            mode: 'fade',
            captions: true,
            controls : false,
            auto: true,
            ariaLive: false,
            pager: false,
            preloadImages: true,
            
          })
      }

     

});

