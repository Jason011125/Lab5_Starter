// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const jsConfetti = new JSConfetti()
    let party = false;

    const myAudio = document.getElementsByClassName("hidden")[0];
    const selectElement = document.getElementById("horn-select")
    selectElement.addEventListener('change', (event) => {
        const result = document.querySelector("img")
        let horn_value = event.target.value;
        let img_path = "assets/images/" + horn_value + ".svg";
        myAudio.src = "assets/audio/" + horn_value + ".mp3"
        if (myAudio.src == "http://127.0.0.1:5500/assets/audio/party-horn.mp3") {
            party = true;
        } else {
            party = false;
        }
        result.src = img_path;
    });




    const selectElement1 = document.getElementById("volume-controls")
    selectElement1.addEventListener('change', (event) => {
        const result = document.images[1];
        let volume = event.target.value;
        let img_path;
        if (volume < 33 && volume != 0) {
            img_path = "assets/icons/volume-level-1.svg"
        } else if (volume == 0) {
            img_path = "assets/icons/volume-level-0.svg"
        } else if (33 <= volume && volume < 67) {
            img_path = "assets/icons/volume-level-2.svg"
        } else {
            img_path = "assets/icons/volume-level-3.svg"
        }
        result.src = img_path;
        myAudio.volume = volume / 100;


    });

    const button = document.querySelector('button');

    button.addEventListener('click', (event) => {
        let playAudio = new Audio(myAudio.src);
        console.log(playAudio);
        console.log(party);
        if (party) {
            jsConfetti.addConfetti()
        }
        playAudio.play();
    });

}