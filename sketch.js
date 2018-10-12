const dots = [];
let seq;
let change = 0;
let drag = 0.97;
let slider;
let file;
let bpm;
let delay;
let randomize;
let sound;
let fft;
// let capturer = new CCapture({
//   framerate: 120,
//   verbose: true,
//   format: 'webm',
//   autoSaveTime: 10
// });
let wave;
let cnv;
const scrollSpeed = 20;
document.addEventListener('contextmenu', event => event.preventDefault());

function setup() {
  cnv = createCanvas(windowWidth, windowHeight).position(0, 0).parent("#container");
  randomize = createButton("reset dots").position(16, 16).mousePressed(reset);
  slider = createSlider(1, 10000, 2500).position(16, 48);
  file = createFileInput(fileSelected).position(16, 80).style("color", "#ebebeb");
  bpm = createInput(120, "number").position(16, 112);
  delay = createInput(0, "number").position(16, 144);
  sequencer = createElement("textarea").position(16, 176).value("0, 0");
  fft = new p5.FFT;
}


function draw() {
  // requestAnimationFrame(draw);
  background(51, 200);
  // capturer.capture(cnv.elt);
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

function reset() {
  for (let dot of dots) {
    dot.x = random(0, windowWidth);
    dot.y = random(0, windowHeight);
  }
}

function keyPressed() {
  if (keyCode == 82) {
    reset();
  }
}
// function mouseWheel(event) {
//   if (slider.value() > scrollSpeed + 1 && event.delta > 0) {
//     slider.elt.value -= scrollSpeed;
//   } else if (slider.value() < 10000 - scrollSpeed - 1 && event.delta < 0) {
//     slider.elt.value += scrollSpeed;
//   }
// }
