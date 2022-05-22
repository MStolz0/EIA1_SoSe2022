

function playSample() {

document.querySelector(".piano").addEventListener('click', Key1);
function Key1(){
    var sound:HTMLAudioElement = new Audio('./Sounds/C4.mp3');
    sound.play();
    sound.volume = 8;

}
}