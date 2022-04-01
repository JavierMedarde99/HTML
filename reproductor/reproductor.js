function empezar(){
    if(document.getElementById("reproductor").paused){
        document.getElementById("reproductor").play();
        document.getElementById("Play").id = "Pause";
    }
    else{
        document.getElementById("reproductor").pause();
        document.getElementById("Pause").id = "Play";
    }
}

function parar(){
    document.getElementById("reproductor").pause();
    document.getElementById("reproductor").currentTime = 0;
}

function masVolumen(){
    document.getElementById("reproductor").volume =  document.getElementById("reproductor").volume + 0.2 ;
}

function menosVolumen(){
    document.getElementById("reproductor").volume = document.getElementById("reproductor").volume - 0.2 ;
}

function reiniciar(){
    document.getElementById("reproductor").currentTime = 0;
    document.getElementById("reproductor").play();
    document.getElementById("Play").id = "Pause";
}