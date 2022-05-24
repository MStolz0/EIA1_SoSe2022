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
});
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
document.querySelector(".play").addEventListener('click', PlayButton);
function PlayButton() {
    var counter = 0;
    setInterval(function () {
        playSample(Melody[counter]);
        counter++;
        if (counter == 12) {
            counter = 0;
        }
    }, 500);
}
//# sourceMappingURL=script.js.map