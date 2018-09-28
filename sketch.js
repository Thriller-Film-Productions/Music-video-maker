const dots = [];
let drag = 0.97;
let slider;
let file;
let sound;
let fft;
let capturer = new CCapture({
  framerate: 120,
  verbose: true,
  format: 'webm'
});
let wave;
let cnv;
const scrollSpeed = 20;
document.addEventListener('contextmenu', event => event.preventDefault());

function setup() {
  cnv = createCanvas(windowWidth, windowHeight).position(0, 0).parent("#container");
  slider = createSlider(1, 10000, 2500).position(16, 16);
  file = createFileInput(fileSelected).position(16, 48).style("color", "#ebebeb");
  fft = new p5.FFT;
}


function draw() {
  // requestAnimationFrame(draw);
  background(51, 200);
  capturer.capture(cnv.elt);
  if (wave) {
    for (let i = 0; i < wave.length; i++) {
      strokeWeight(1);
      stroke(235);
      line(i, height, i, map(abs(wave[i]), 0, 4, height, 0));
    }
    noStroke();
    fill(255, 128, 128);
    rect(map(sound.currentTime(), 0, sound.duration(), 0, width), height * 0.75, 5, height / 4);
  }
  for (const dot of dots) {
    dot.show();
  }
  while (dots.length < slider.value()) {
    dots.push(new Dot);
  }
  while (dots.length > slider.value()) {
    dots.pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function waveform(file) {
  return file.getPeaks(width);
}

// function mouseWheel(event) {
//   if (slider.value() > scrollSpeed + 1 && event.delta > 0) {
//     slider.elt.value -= scrollSpeed;
//   } else if (slider.value() < 10000 - scrollSpeed - 1 && event.delta < 0) {
//     slider.elt.value += scrollSpeed;
//   }
// }