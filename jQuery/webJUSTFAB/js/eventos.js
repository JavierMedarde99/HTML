$(document).ready(function () {
    var cont=0;
   $(window).scroll(function(){
       if($(this).scrollTop()<200){
            $("div#volverarriba").hide();
            cont++;
       }else{
           $("div#volverarriba").show();
           cont++;
       }
       
   })
   
})