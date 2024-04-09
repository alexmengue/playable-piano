const pianoKeys = document.querySelectorAll('.piano-keys .key');

let audio = new Audio('tunes/a.wav');

const playTune = (key) => {
  //soon
};

pianoKeys.forEach(key => {
  key.addEventListener('click', () => playTune(key.dataset.key));
});