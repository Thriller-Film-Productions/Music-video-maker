function fileSelected(file) {
  removeElements();
  sound = loadSound(file, () => {
    wave = waveform(sound);
    sound.play();
  })
}

// function startRolling() {
//   capturer.start();
// }

// function finish() {
//   capturer.stop();
//   capturer.save();
// }
