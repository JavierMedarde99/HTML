$(document).ready(function () {

    $('#barra-social').fadeIn();

    $('#chat').fadeIn();

    $("#hamburger").click(function (e) {
        
        var invisible = $('#menu-toggle').css("display")=="none";

        if(invisible){
            $('#menu-toggle').slideDown();
            var ancho = $('#hamburger').children().eq(0).css("width");
            $('#hamburger').children().eq(1).animate({"width": ancho}, "fast");

            $('.line-ham').animate({"background-color": 'white'});
        }else{
            $('#menu-toggle').slideUp();
            $('#hamburger').children().eq(1).animate({"width": "1.37rem"}, "fast");

            $('.line-ham').animate({"background-color": 'black'});
        }
        
    });

    $(document).on({

        scroll: function () {
            if($(document).scrollTop() > 0){
                $('#menu-toggle').slideUp();
                $('#hamburger').children().eq(1).animate({"width": "1.37rem"}, "fast");
                $('.line-ham').animate({"background-color": 'black'});

                $('#go-up').fadeIn();
                $('#contenido header#home-header').css({
                    'width':'100%',
                    'position':'fixed',
                    'opacity':'.4'
                })
            }

            if($(document).scrollTop() == 0){
                $('#go-up').fadeOut();
                $('#contenido > header#home-header').css({
                    'position':'relative',
                    'opacity':'1'
                })
            }
        }
    });

    $('#go-up').on({
        click: function(){
            $("html, body").animate({scrollTop: 0}, 1000);
        }
    });

    $('section article.producto').hover(function () {
            
            $(this).children('a').stop( true, true ).slideToggle();

        }, function () {

            $(this).children('a').stop( true, true ).slideToggle();

        
        }
    );

    $( window ).resize(function() {

        $("#hamburger").removeAttr("style");
        $('#menu-toggle').removeAttr("style");
        $('.line-ham').removeAttr("style");
        $("#menu-toggle li").children("ul").removeAttr("style");
    });

    $("#menu-toggle li").on({

        click: function(){

            if($(this).has("ul")){

                var invisible = $(this).children("ul").css("display")=="none";

                if(invisible){
                    $(this).children("ul").fadeIn();
                    $(this).children("ul").animate({
                        left:"0px",
                    },{queue:false});
                    $(this).children("span").html("-");
                }else{
                    $(this).children("ul").animate({
                        left:"-50vw"
                    },{queue:false});
                    $(this).children("ul").fadeOut();
                    $(this).children("span").html("+")
                }

                
            }
        }
    });

    $('#window-chat input').focusout(function(){
        if($(this).val().length == 0 && $(this).prop('required')){
            $(this).next().css({visibility:"visible"});
        }
        if($(this).val().length > 0 && $(this).prop('required')){
            $(this).next().css({visibility:"hidden"});
        }

    })

    $('#window-chat textarea').keyup(function(){
        var longitud = $(this).val().length;
        var restantes = 100-longitud;
        $('#info-caracteres').html(" Dispone de "+restantes+" caracteres")
    })

    $('#header-chat1').on({
        click: function(){
                $(this).siblings("div").slideToggle();
                $(this).css("display","none");
                $('#chat').children().eq(1).css("display","flex");

        },
    });

    $('#header-chat2 span').on({
        click: function(){
            $("#header-chat2").siblings("div").slideToggle();
            $("#header-chat2").css("display","none");
            $('#chat').children().eq(0).css("display","flex");

        },
    })
});