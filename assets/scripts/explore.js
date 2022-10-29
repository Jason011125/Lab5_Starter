// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    populateVoiceList();
    const button = document.querySelector('button');

    if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }
    button.addEventListener('click', (event) => {
        playVoice(changePicBack);

    })


}

function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
        console.log("return");
        return;
    }

    const voices = speechSynthesis.getVoices();

    for (let i = 0; i < voices.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${voices[i].name} (${voices[i].lang})`;

        if (voices[i].default) {
            option.textContent += ' — DEFAULT';
        }

        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        document.getElementById("voice-select").appendChild(option);
    }
}

function playVoice(callback) {
    let img = document.querySelector('img');
    img.src = "assets/images/smiling-open.png"
    const synth = window.speechSynthesis;
    const input = document.querySelector('textarea');
    const utterThis = new SpeechSynthesisUtterance(input.value);
    const selectedOption = document.getElementById("voice-select").selectedOptions[0].getAttribute('data-name');
    const voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
        }
    }
    synth.speak(utterThis);


}

function changePicBack() {
    let img = document.querySelector('img');
    img.src = "assets/images/smiling.png"
    console.log(123)
}