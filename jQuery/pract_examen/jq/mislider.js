$( document ).ready(function() {

    var SliderModule = (function(){
        var pb = {};
        pb.elslider = $('#slider');
        pb.items = {
            panels: pb.elslider.find('.slider-wrapper > li'),
        }

        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;

        pb.init = function(settings){

            //indicamos que la duracion es la introducida en la variable settings.
            //o en el caso de que no se introduzca se pondra por defecto a 8 segundos.
            this.settings = settings || {duration:8000}
            //inicializamos el slider.
            SliderInit();

            //Creamos una variable controles
            //es un string donde meteremos tantos li bolitas
            //como diapositivas haya.
            
            $('#control-buttons li').hover(function(){
                if(currentSlider !== $(this).index()){
                    cambiarPanel($(this).index());
                }    
            });
        }
        
        var SliderInit = function(){
            //Iniciamos el intervalo cuando iniciamos el slider con la duracion
            //definida en la variable settings.
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
        }

        pb.startSlider = function(){
            //Variable para controlar los paneles del slider.
            var paneles = pb.items.panels;
            //Variable para controlar los controles.
            var controles = $('#control-buttons li');
            //Reiniciar el next cuando el slider llega al final
            //y muestras el ultimo slider
            if(nextSlider >= lengthSlider){
                nextSlider=0;
                currentSlider=lengthSlider-1;
            }

            //Quitamos la clase active del boton correspondiente al slider pasado
            controles.removeClass('active');
            //Aniadimos la clase active al boton con el mismo indice que la imagen actual.
            controles.eq(nextSlider).addClass('active');

            //Realizamos unos efectos para el cambio de sliders.
            //Hacemos un fadeIn del siguiente slider
            //y un fadeOut del que se esta mostrando.

            paneles.eq(currentSlider).hide('slow');

            paneles.eq(nextSlider).show('slow');
            
            //Pasamos de slider al siguiente.
            currentSlider = nextSlider;
            nextSlider += 1;
        }

        var cambiarPanel = function(indice){

            //Reiniciamos el interval para que no te cambie la imagen casi inmediatamente.
            clearInterval(SliderInterval);

            var paneles = pb.items.panels;
            //Variable para controlar los controles.
            var controles = $('#control-buttons li');

            //comprobamos en que boton estamos pulsando y comparamos con
            //la longitud del slider para que no se pase.
            if(indice >= lengthSlider){
                indice=0;
            }else if(indice < 0){
                indice = lengthSlider-1;
            }

            //Quitamos la clase active del boton correspondiente al slider pasado
            controles.removeClass('active');
            //Aniadimos la clase active al boton con el mismo indice que la imagen actual.
            controles.eq(indice).addClass('active');

            //Aqui quitamos el slider actual.
            paneles.eq(currentSlider).hide('slow');
            //Ponemos el slider de la bola pulsada.
            paneles.eq(indice).show('slow');

            //Actualizamos las variables.
            currentSlider = indice;
            nextSlider = indice+1;

            //Reactivamos el slider.
            SliderInit();

        }

        $("#slider ul li img").on({
            mouseenter:function () { 
                clearInterval(SliderInterval);
            },
            mouseleave:function () { 
                SliderInit();
            },
        })

        return pb;
    }());

    SliderModule.init({duration:2000});

});