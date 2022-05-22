function playSample() {
    document.querySelector(".piano").addEventListener('click', Key1);
    function Key1() {
        var sound = new Audio('./Sounds/C4.mp3');
        sound.play();
        sound.volume = 8;
    }
}
//# sourceMappingURL=script.js.map