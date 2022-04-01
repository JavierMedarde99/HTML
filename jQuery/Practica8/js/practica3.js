$(document).ready(function () {
    $("#micapa").click(function(evento){
        $(this).css("width",function(index,value){
            var aumento = prompt("¿Cuanto quieres aumentar?","25");
            return(parseInt(value)+parseInt(aumento))+"px";
        });
    });
})