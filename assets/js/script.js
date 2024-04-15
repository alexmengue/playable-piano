const pianoKeys = document.querySelectorAll('.piano-keys .key');

let allKeys = [], audio = new Audio('assets/tunes/a.wav');

const playTune = (key) => {
  audio.src = `assets/tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-keys='${key}']`);
  clickedKey.classList.add('active');

  setTimeout(() => {
    clickedKey.classList.remove('active');
  }, 150);
};

pianoKeys.forEach(key => {
  allKeys.push(key.dataset.key);
  key.addEventListener('click', () => playTune(key.dataset.key));
});

const pressedKey = (event) => {
  if (allKeys.includes(event.key)) playTune(event.key);
};

document.addEventListener('keydown', pressedKey);