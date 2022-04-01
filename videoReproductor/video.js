var v = document.getElementById("video");

function hora(segundos) {
    var d = new Date(segundos * 1000);
    var hora = (d.getHours() == 0) ? 23 : d.getHours() - 1;
    var hora = (hora < 9) ? "0" + hora : hora;
    var minuto = (d.getMinutes() < 9) ? "0" + d.getMinutes() : d.getMinutes();
    var segundo = (d.getSeconds() < 9) ? "0" + d.getSeconds() : d.getSeconds();
    return (hora - 23) + ":" + minuto + ":" + segundo;
}

v.addEventListener("timeupdate", function (ev) {
    document.getElementById("tiempo").innerHTML = hora(v.currentTime);
}, true);

v.addEventListener("loadeddata", function (ev) {
    document.getElementById("tiempototal").innerHTML = hora(v.duration);
}, true);

function pantallaComp() {
    if (v.requestFullscreen) {
        v.requestFullscreen();
    }
}

function atras() {
    if (!v.paused) {
        v.currentTime -= 5.000000
    }
}

function avanzar() {
    if (!v.paused) {
        v.currentTime += 5.000000
    }
}

function masrapido() {

    if (v.playbackRate != 2.00) {
        v.playbackRate += 0.25;
    }

}

function menosrapido() {

    if (v.playbackRate != 0.25) {
        v.playbackRate -= 0.25;
    }

}

function mute() {
    if (v.muted == true) {
        v.muted = false;
        document.getElementById("nomute").id = "mute";
    } else {
        v.muted = true;
        document.getElementById("mute").id = "nomute";
    }

}

function empezar() {
    if (v.paused) {
        v.play();
        document.getElementById("play").id = "pause";
    } else {
        v.pause();
        document.getElementById("pause").id = "play";
    }
}

function parar() {
    v.pause();
    v.currentTime = 0;
    document.getElementById("pause").id = "play";
}

volumen.addEventListener("change", function (ev) {
    v.volume = ev.currentTarget.value;
}, true);