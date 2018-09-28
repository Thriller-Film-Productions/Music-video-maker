function fileSelected(file) {
  removeElements();
  sound = loadSound(file, () => {
    wave = waveform(sound);
    sound.play(startRolling());
  })
}

function startRolling() {
  capturer.start();
  if (i = 0, sound.isPlaying() = false, i++) {
    function finish()
  } else {
    console.log("not done")
  }
}

function finish() {
  capturer.stop();
  capturer.save();
}