$(document).ready(function(){
    $("article").children("img").mouseover(function(){
        $(this).siblings("h3").toggle();
    })
    $("article").children("img").mouseleave(function(){
        $(this).siblings("h3").toggle();
    })
  


$("article").children("img").hover(function(){
    $(this).siblings("h3").toggle();
    })
})