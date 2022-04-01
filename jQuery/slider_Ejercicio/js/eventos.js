$(document).ready(function () {

    var SliderModule =(function(){
        var pb={};//creamos un objeto
    //Almacenamos nuestro #slider en el atributo elslider
        pb.elslider=$('#slider');
    //El atributo item es un array que almacena los paneles del slider
        pb.items ={
            panels : pb.elslider.find('.slider-wrapper > li'),
        }
        var SliderInterval,
        currentSlider = 0,
        nextSlider = 1,
        lengthSlider = pb.items.panels.length;
    
    //Constructor del Slider
        pb.init = function(settings){
            var loscontroles = '';
    
            this.settings=settings || {duration:5000}
            SliderInit();//Para inicializar el slider
          
            //Creamos los controles del Slider en tiempo de ejecución
            for(var i=0; i<lengthSlider;i++){
                if(i==0)
                loscontroles += '<li class="active"></li>';
                else
                loscontroles += '<li></li>';
            }
    
            //Insertamos los controles creados en el HTML
            $('#control-buttons').html(loscontroles);
            
            $('#control-buttons li').click(function(){
                //al hacer clic vemos en la consola el índice
                //console.log($(this).index());
                if(currentSlider !== $(this).index()){
                       cambiarPanel($(this).index());
                }
            });
        }
    
    //funcion que inicializar el slider
    var SliderInit = function(){
        SliderInterval = setInterval(pb.startSlider,pb.settings.duration);
    }
    
    pb.startSlider = function(){
        var paneles = pb.items.panels;
        var controles = $('#control-buttons li');
      
        
       
        //Controlamos si nos encontramos en el último panel
        if(nextSlider >= lengthSlider){
            nextSlider=0;
            currentSlider=lengthSlider-1;
        }
 
        
              //Efecto
        //Eliminamos la clase en todos los controles
        controles.removeClass('active');
        //añadimos la clase al control del panel seleccionado
        controles.eq(nextSlider).addClass('active');
        //Efecto de transición
        paneles.eq(currentSlider).fadeOut('slow');
        paneles.eq(nextSlider).fadeIn('slow');
    
        //Actualizamos las variables
        currentSlider=nextSlider;
        nextSlider+=1;
        stop();
    
        }
    
    //Función para los controles del Slider
    //Recibe el índice del panel a mostrar
    var cambiarPanel = function(indice){
        //Limpiar el intervalo previamente.
        clearInterval(SliderInterval);
    
        var paneles = pb.items.panels;
        var controles = $('#control-buttons li');
        //Comprobamos que el índice esté disponible
        //dentro de los paneles del slider.
        if(indice>=lengthSlider){
            indice=0;
        }else if(indice < 0){
            indice = lengthSlider -1;
        }
    
        //Efectos
        //eliminamos la clase en todos los controles
        controles.removeClass('active');
        //añadimos la clase al control del panel seleccionado
        controles.eq(indice).addClass('active');
        //Efecto de transición
        paneles.eq(currentSlider).fadeOut('slow');
        //El siguente panel del slider es el que indique
        //el parámetro "indice"
        paneles.eq(indice).fadeIn('slow');
    
        //Actualizamos los datos
        currentSlider = indice;
        nextSlider = indice+1;
    
        //Reactivar el Slider
        SliderInit();
    }
  
    return pb; //devolvemos el objeto pb
    
    }())//()) es para que se ejecute automaticamente.
    
    //llamada al constructor
    
    SliderModule.init({duration:2000});






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

    //ocultar el menu al principio
    $("ul#menu").hide();

    //desplegar el menu
    $("nav#menu-principal > span").click(function () {
        if ($("ul#menu").css("display") == "none") {
            $("ul#menu").show();
            stop(false, true);
        } else {
            $("ul#menu").hide();
            stop(false, true);
        }

    })

    //Desplegar el submenu
    $("nav#menu-principal > ul#menu").children("li").click(function(){
        if($(this).children("ul").css("display")=="none"){
            $("nav#menu-principal > ul#menu").children("li").children("ul").fadeOut();
            if($("nav#menu-principal > ul#menu").children("li").children("ul").css("display")=="none"){
                $("nav#menu-principal > ul#menu").find("i").removeClass("fa fa-angle-up");
                $("nav#menu-principal > ul#menu").find("i").addClass("fa fa-angle-down");
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


    //Cambiar la foto de los zapatos
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