function playSample(beats) {
    var sound = new Audio(beats);
    sound.play();
    sound.volume = 0.2;
    sound.currentTime = 0;
}
document.querySelector(".white-key-C").addEventListener('click', function () { playSample("./Sounds/C.mp3"); });
document.querySelector(".C4").addEventListener('click', function () { playSample("./Sounds/C4.mp3"); });
document.querySelector(".white-key-D").addEventListener('click', function () { playSample("./Sounds/D.mp3"); });
document.querySelector(".D4").addEventListener('click', function () { playSample("./Sounds/D4.mp3"); });
document.querySelector(".white-key-E").addEventListener('click', function () { playSample("./Sounds/E.mp3"); });
document.querySelector(".white-key-F").addEventListener('click', function () { playSample("./Sounds/F.mp3"); });
document.querySelector(".F4").addEventListener('click', function () { playSample("./Sounds/F4.mp3"); });
document.querySelector(".white-key-G").addEventListener('click', function () { playSample("./Sounds/G.mp3"); });
document.querySelector(".G4").addEventListener('click', function () { playSample("./Sounds/G4.mp3"); });
document.querySelector(".white-key-A").addEventListener('click', function () { playSample("./Sounds/A.mp3"); });
document.querySelector(".A4").addEventListener('click', function () { playSample("./Sounds/A4.mp3"); });
document.querySelector(".white-key-B").addEventListener('click', function () { playSample("./Sounds/B.mp3"); });
//Keydown
document.addEventListener('keydown', (event) => {
    if (event.key == "Y" || event.key == "y") {
        playSample("./Sounds/C.mp3");
    }
    else if (event.key == "S" || event.key == "s") {
        playSample("./Sounds/C4.mp3");
    }
    else if (event.key == "X" || event.key == "x") {
        playSample("./Sounds/D.mp3");
    }
    else if (event.key == "D" || event.key == "d") {
        playSample("./Sounds/D4.mp3");
    }
    else if (event.key == "C" || event.key == "c") {
        playSample("./Sounds/E.mp3");
    }
    else if (event.key == "V" || event.key == "v") {
        playSample("./Sounds/F.mp3");
    }
    else if (event.key == "G" || event.key == "g") {
        playSample("./Sounds/F4.mp3");
    }
    else if (event.key == "B" || event.key == "b") {
        playSample("./Sounds/G.mp3");
    }
    else if (event.key == "H" || event.key == "h") {
        playSample("./Sounds/G4.mp3");
    }
    else if (event.key == "N" || event.key == "n") {
        playSample("./Sounds/A.mp3");
    }
    else if (event.key == "J" || event.key == "j") {
        playSample("./Sounds/A4.mp3");
    }
    else if (event.key == "M" || event.key == "m") {
        playSample("./Sounds/B.mp3");
    }
    //Loop
});
var a = new Audio("./Sounds/A.mp3");
var a4 = new Audio("./Sounds/A4.mp3");
var b = new Audio("./Sounds/B.mp3");
var c = new Audio("./Sounds/C.mp3");
var c4 = new Audio("./Sounds/C4.mp3");
var d = new Audio("./Sounds/D.mp3");
var d4 = new Audio("./Sounds/D4.mp3");
var e = new Audio("./Sounds/E.mp3");
var f = new Audio("./Sounds/F.mp3");
var f4 = new Audio("./Sounds/F4.mp3");
var g = new Audio("./Sounds/G.mp3");
var g4 = new Audio("./Sounds/G4.mp3");
var sound = [a, a4, b, c, c4, d, d4, e, f, f4, g, g4];
var loop = [sound[01], sound[02], sound[03], sound[04], sound[05], sound[06], sound[07], sound[08], sound[09], sound[10], sound[11], sound[12],];
var Melody = [
    "./Sounds/C.mp3",
    "./Sounds/B.mp3",
    "./Sounds/G4.mp3",
    "./Sounds/F.mp3",
    "./Sounds/C4.mp3",
    "./Sounds/G.mp3",
    "./Sounds/D.mp3",
    "./Sounds/F.mp3",
    "./Sounds/E.mp3",
    "./Sounds/E.mp3",
    "./Sounds/G.mp3",
    "./Sounds/D.mp3"
];
document.querySelector("#play").addEventListener('click', PlayButton);
var counter = 0;
function PlayButton() {
    setInterval(function () {
        playSample(loop[counter]);
        counter++;
        if (counter == 12) {
            counter = 0;
        }
    }, 500);
}
document.querySelector("#pause").addEventListener('click', stop);
function stop() {
    counter = 13;
}
//switching Buttons
var btn = document.querySelector('#play ');
var btnp = document.querySelector('#pause');
document.querySelector("#play").addEventListener('click', btnSwitch);
function btnSwitch() {
    document.querySelector("#play").style.opacity = "0%";
    document.querySelector("#pause").style.opacity = "100%";
}
document.querySelector("#pause").addEventListener('click', btnpSwitch);
function btnpSwitch() {
    document.querySelector("#play").style.opacity = "100%";
    document.querySelector("#pause").style.opacity = "0%";
}
//# sourceMappingURL=script.js.map