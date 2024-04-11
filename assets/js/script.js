const pianoKeys = document.querySelectorAll('.piano-keys .key');

let audio = new Audio('assets/tunes/a.wav');

const playTune = (key) => {
  audio.src = `assets/tunes/${key}.wav`;
  audio.play();
};

pianoKeys.forEach(key => {
  key.addEventListener('click', () => playTune(key.dataset.key));
});

const pressedKey = () => {
  //soon
};

document.addEventListener('keydown', pressedKey);