$(document).ready(function(){
    $(document).keypress(function(e){
        e.preventDefault();
        if(String.fromCharCode(e.which)=="d"){
                $("article").children("img").siblings("h3").toggle();
        }
    })
   

})