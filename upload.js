function fileSelected(file) {
  seq = sequencer.value().split("\n");
  let seq2 = [];
  for (let thing of seq) {
    seq2.push(JSON.parse("[" + thing + "]"));
  }
  seq = seq2;
  removeElements();
  sound = loadSound(file, () => {
    wave = waveform(sound);
    sound.play();
    setTimeout(() => {
      setInterval(() => {
        change++;
        change %= seq.length;
        console.log(change)
      }, 60 / bpm.value() * 1000)
    }, delay.value())
  })
}

// function startRolling() {
//   capturer.start();
// }

// function finish() {
//   capturer.stop();
//   capturer.save();
// }
