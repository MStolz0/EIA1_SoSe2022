document.querySelector(".piano").addEventListener('click', playSample);
function playSample(key) {
    document.querySelector(".white-key-C").addEventListener('click', Key1);
    function Key1() {
        var sound = new Audio('./Sounds/C.mp3');
        sound.play();
        sound.volume = 0.2;
        sound.currentTime = 0;
    }
    document.querySelector(".C4").addEventListener('click', black1);
    function black1() {
        var sound = new Audio('./Sounds/C4.mp3');
        sound.play();
        sound.volume = 0.3;
        sound.currentTime = 0;
    }
    document.querySelector(".white-key-D").addEventListener('click', Key2);
    function Key2() {
        var sound = new Audio('./Sounds/D.mp3');
        sound.play();
        sound.volume = 0.3;
        sound.currentTime = 0;
    }
    document.querySelector(".D4").addEventListener('click', black2);
    function black2() {
        var sound = new Audio('./Sounds/D4.mp3');
        sound.play();
        sound.volume = 0.3;
        sound.currentTime = 0;
    }
    document.querySelector(".white-key-E").addEventListener('click', Key3);
    function Key3() {
        var sound = new Audio('./Sounds/E.mp3');
        sound.play();
        sound.volume = 0.3;
        sound.currentTime = 0;
    }
    document.querySelector(".white-key-F").addEventListener('click', Key4);
    function Key4() {
        var sound = new Audio('./Sounds/F.mp3');
        sound.play();
        sound.volume = 0.3;
        sound.currentTime = 0;
    }
    document.querySelector(".F4").addEventListener('click', black3);
    function black3() {
        var sound = new Audio('./Sounds/F4.mp3');
        sound.play();
        sound.volume = 0.3;
        sound.currentTime = 0;
    }
    document.querySelector(".white-key-G").addEventListener('click', Key5);
    function Key5() {
        var sound = new Audio('./Sounds/G.mp3');
        sound.play();
        sound.volume = 0.3;
        sound.currentTime = 0;
    }
    document.querySelector(".G4").addEventListener('click', black4);
    function black4() {
        var sound = new Audio('./Sounds/G4.mp3');
        sound.play();
        sound.volume = 0.3;
        sound.currentTime = 0;
    }
    document.querySelector(".white-key-A").addEventListener('click', Key6);
    function Key6() {
        var sound = new Audio('./Sounds/A.mp3');
        sound.play();
        sound.volume = 0.3;
        sound.currentTime = 0;
    }
    document.querySelector(".A4").addEventListener('click', black5);
    function black5() {
        var sound = new Audio('./Sounds/A4.mp3');
        sound.play();
        sound.volume = 0.3;
        sound.currentTime = 0;
    }
    document.querySelector(".white-key-B").addEventListener('click', Key7);
    function Key7() {
        var sound = new Audio('./Sounds/B.mp3');
        sound.play();
        sound.volume = 0.3;
        sound.currentTime = 0;
    }
    var sound = [
        new Audio("./Sounds/C.mp3"),
        new Audio("./Sounds/C4.mp3"),
        new Audio("./Sounds/D.mp3"),
        new Audio("./Sounds/D4.mp3"),
        new Audio("./Sounds/E.mp3"),
        new Audio("./Sounds/F.mp3"),
        new Audio("./Sounds/F4.mp3"),
        new Audio("./Sounds/G.mp3"),
        new Audio("./Sounds/G4.mp3"),
        new Audio("./Sounds/A.mp3"),
        new Audio("./Sounds/A4.mp3"),
        new Audio("./Sounds/B.mp3"),
    ];
    document.querySelector(".play").addEventListener('click', PlayButton);
    function PlayButton() {
        setInterval(function () {
            sound[2].play();
            sound[1].play();
            sound[2].play();
            sound[6].play();
            sound[8].play();
            sound[5].play();
            sound[6].play();
            sound[7].play();
            sound[1].play();
            sound[6].play();
            sound[10].play();
            sound[11].play();
            sound.volume = 0.2;
        }, 500);
    }
    document.addEventListener('keydown', (event) => {
        if (event.key == "Y" || event.key == "y") {
            Key1();
        }
        else if (event.key == "S" || event.key == "s") {
            black1();
        }
        else if (event.key == "X" || event.key == "x") {
            Key2();
        }
        else if (event.key == "D" || event.key == "d") {
            black2();
        }
        else if (event.key == "C" || event.key == "c") {
            Key3();
        }
        else if (event.key == "V" || event.key == "v") {
            Key4();
        }
        else if (event.key == "G" || event.key == "g") {
            black3();
        }
        else if (event.key == "B" || event.key == "b") {
            Key5();
        }
        else if (event.key == "H" || event.key == "h") {
            black4();
        }
        else if (event.key == "N" || event.key == "n") {
            Key6();
        }
        else if (event.key == "J" || event.key == "j") {
            black5();
        }
        else if (event.key == "M" || event.key == "m") {
            Key7();
        }
    });
}
//# sourceMappingURL=script.js.map