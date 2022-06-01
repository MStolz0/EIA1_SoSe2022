window.addEventListener("load",function() {
    // Sounds einfügen
    var a:HTMLAudioElement = new Audio("./Sounds/A.mp3");
    var a4:HTMLAudioElement = new Audio("./Sounds/A4.mp3");
    var b:HTMLAudioElement = new Audio("./Sounds/B.mp3");
    var c:HTMLAudioElement = new Audio("./Sounds/C.mp3");
    var c4:HTMLAudioElement = new Audio("./Sounds/C4.mp3");
    var d:HTMLAudioElement = new Audio("./Sounds/D.mp3");
    var d4:HTMLAudioElement = new Audio("./Sounds/D4.mp3");
    var e:HTMLAudioElement = new Audio("./Sounds/E.mp3");
    var f:HTMLAudioElement = new Audio("./Sounds/F.mp3");
    var f4:HTMLAudioElement = new Audio("./Sounds/F4.mp3");
    var g:HTMLAudioElement = new Audio("./Sounds/G.mp3");
    var g4:HTMLAudioElement = new Audio("./Sounds/G4.mp3");
    
        var sound:HTMLAudioElement []= [a,a4,b,c,c4,d,d4,e,f,f4,g,g4];
        var loop:HTMLAudioElement []=[sound[0], sound[1], sound[2],sound[3],sound[4],sound[5],sound[6],sound[7],];
    
        var p:string="off";
        var remix:number;
        var i:number=0;
        var beat:number;
    
    // Funktion Sounds abspielen
        function playSample (sound): void{
            sound.play();
        }

    // Funktion Beat
    function playBeat():void {
        playSample(loop[i]);
        if (i >= 7) {
                i = 0;
            }
        else { i++;}
    };
    
    
    // Funktion Play geklickt
        function clickPlay() {
    
        //Button wechselns und Beat abspielen/stoppen
        switch (p) { 
            case "off": beat= setInterval(playBeat, 1000);
                        document.querySelector("#play").style.opacity="0%";
                        document.querySelector("#pause").style.opacity="100%";
                        p="on"; break;
            case "on":  clearInterval(beat);
                        document.querySelector("#play").style.opacity="100%";
                        document.querySelector("#pause").style.opacity="0%";
                        p="off"; 
                        break;
        }
    };
    
    // Funktion Remix
    function clickRemix() {
        clickDelete();
        for (let i: number = 0; i < 8; i++) {
            loop.push(sound[Math.floor((Math.random() * 7))]);
        }
    };
    
    // Funktion Delete
        function clickDelete() {
            loop.length=0;
        };
        
    
//Keydown
document.addEventListener('keydown', (event) => {               
    if (event.key == "Y" || event.key == "y"){
        playSample(sound[3]); 
    }        

    else if (event.key == "S" || event.key == "s"){
        playSample(sound[4]);
    }

    else if (event.key == "X" || event.key == "x"){
        playSample(sound[5]);
    }
    
    else if (event.key == "D" || event.key == "d"){
        playSample(sound[6]);
    }

    else if (event.key == "C" || event.key == "c"){
        playSample(sound[7]);
    }

    else if (event.key == "V" || event.key == "v"){
        playSample(sound[8]);
    }

    else if (event.key == "G" || event.key == "g"){
        playSample(sound[9]);
    }

    else if (event.key == "B" || event.key == "b"){
        playSample(sound[10]);
    }

    else if (event.key == "H" || event.key == "h"){
        playSample(sound[11]);
    }

    else if (event.key == "N" || event.key == "n"){
        playSample(sound[0]);
    }

    else if (event.key == "J" || event.key == "j"){
        playSample(sound[1]);
    }

    else if (event.key == "M" || event.key == "m"){
        playSample(sound[2]);}

    // Event Button klick
        document.querySelector(".white-key-A").addEventListener("click", function() {playSample(sound[0]);});
        document.querySelector(".A4").addEventListener("click", function() {playSample(sound[1]);});
        document.querySelector(".white-key-B").addEventListener("click", function() {playSample(sound[2]);});
        document.querySelector(".white-key-C").addEventListener("click", function() {playSample(sound[3]);});
        document.querySelector(".C4").addEventListener("click", function() {playSample(sound[4]);});
        document.querySelector(".white-key-D").addEventListener("click", function() {playSample(sound[5]);});
        document.querySelector(".D4").addEventListener("click", function() {playSample(sound[6]);});
        document.querySelector(".white-key-E").addEventListener("click", function() {playSample(sound[7]);});
        document.querySelector(".white-key-F").addEventListener("click", function() {playSample(sound[8]);});
        document.querySelector(".F4").addEventListener("click", function() {playSample(sound[9]);});
        document.querySelector(".white-key-G").addEventListener("click", function() {playSample(sound[10]);});
        document.querySelector(".G4").addEventListener("click", function() {playSample(sound[11]);});
        document.querySelector("#play").addEventListener("click", function() {clickPlay();});
        document.querySelector("#remix").addEventListener("click", function() {clickRemix();});
        document.querySelector("#delete").addEventListener("click", function() {clickDelete();});
    });



    
})