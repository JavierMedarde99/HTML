$(document).ready(function(){
   $("form > input").focusin(function(e){
       $(this).css("background-color", "blue");
       $(this).css("color", "white");
   })
   $("form > input").focusout(function(e){
    $(this).css("background-color", "white");
    $(this).css("color", "black");
})
})