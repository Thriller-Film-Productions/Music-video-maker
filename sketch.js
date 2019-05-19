const dots = [];
let seq;
let change = 0;
let drag = 0.97;
let zoom = 0.02;
let slider;
let file;
let bpm;
let delay;
let randomize;
let driftSpeed;
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
let perlin1 = Math.random() * 1000000;
let perlin2 = Math.random() * 1000000;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight).position(0, 0).parent("#container");
  randomize = createButton("reset dots").position(16, 16).mousePressed(reset);
  slider = createSlider(1, 10000, 2500).position(16, 48);
  file = createFileInput(fileSelected).position(16, 80).style("color", "#ebebeb");
  bpm = createInput(120, "number").position(16, 112);
  delay = createInput(0, "number").position(16, 144);
  sequencer = createElement("textarea").position(16, 176).value("0, 0");
  driftSpeed = createInput("0", "number").position(16, 239);
  fft = new p5.FFT;
}


function draw() {
  // requestAnimationFrame(draw);
  background(51, 200);
  // for (let i = 0; i < width; i += 2) {
  //   for (let j = 0; j < height; j += 2) {
  //     stroke(grid[i][j] * 255);
  //     strokeWeight(2);
  //     point(i, j)
  //   }
  // }
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

// function gen(w, h) {
//   let vals = [];
//   let positions = [];
//   for (let i = 0; i < 5; i++) {
//     positions.push([floor(random(w)), floor(random(h)), round(Math.random())])
//   }
//   for (let i = 0; i < w; i++) {
//     vals.push([])
//     for (let j = 0; j < h; j++) {
//       vals[i].push(weightedAvg([
//         [positions[0][2], 10 / dist(positions[0][0], positions[0][1], i, j)],
//         [positions[1][2], 10 / dist(positions[1][0], positions[1][1], i, j)],
//         [positions[2][2], 10 / dist(positions[2][0], positions[2][1], i, j)],
//         [positions[3][2], 10 / dist(positions[3][0], positions[3][1], i, j)],
//         [positions[4][2], 10 / dist(positions[4][0], positions[4][1], i, j)],
//       ]))
//     }
//   }
//   return vals;
// }

// function weightedAvg(v) {
//   let avg = 0;
//   let val = 0;
//   for (let i = 0; i < v.length; i++) {
//     val += v[i][1]
//   }
//   for (let i = 0; i < v.length; i++) {
//     avg += (v[i][1] / val) * v[i][0]
//   }
//   return avg;
// }