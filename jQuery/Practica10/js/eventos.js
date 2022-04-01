$(document).ready(function () {
    $("div.texto").css("display", "none");

    $( "section > div" ).click(function() {
        if($(this).siblings("div.texto").css("display")=="none"){ 
            $(this).siblings("div.texto").slideDown();
        $(this).children("div").children("svg").next('svg').fadeOut();
        }else{
            $(this).siblings("div.texto").slideUp();
            $(this).children("div").children("svg").next('svg').fadeIn();
            
        }
       
    });
})