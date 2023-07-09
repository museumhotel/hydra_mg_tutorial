let posterLayer,
  txts,
  posterTxt = `Task
The Kunsthaus Zürich is staging an exhibition on the topic of time, this September. Your task is to create a generative AR-poster which announces the exhibition.
The poster has to reflect the notion of time. You are free to use any kind of shapes, colors, images and text. Your concept should take into account both the static printed poster and its screen-based generative AR counterpart. Since this workshop is mostly about the generative AR-layer, please focus on this part in your design.

As a starting point you can ask yourself which parameters are connected to time and could be approached via coding. These could be for example:
Absolute values: the current second; minute; hour; day; month; year; …
Relative values: time since viewing the website; time remaining until exhibition opening; …
Environmental aspects: day; night; …

For designing the poster artwork you are free to use any program you prefer (­InDesign, Illustrator, Text Edit, Processing, …). The minimum requirements for the printed poster are the format F4 and the display of the basic exhibition information which you will find further down.

Format
Print: 895 × 1280 mm, F4 (Weltformat)
Screen: 895 × 1280px

Typeface
When choosing a typeface please make sure that it can be hosted safely on the web. Therefore we encourage you to use a system- or open source typeface.

Poster contents
Time
22.9.2023 — 14.1.2024
An exploration of some notions of time
Kunsthaus Zürich

URL for your poster:
Everyone has an assigned number within a shared URL, ie:
https://ar-posters.glitch.me/1 + [1, 2, 3, …]

QR-Code Generator:
https://www.qrcode-monkey.com/
`;

let showBG = false;

function setup() {
  createCanvas(895, 1280);
  pixelDensity(1);
  posterLayer = createGraphics(
    width,
    height,
    P2D,
    document.getElementById("canvas")
  );
  txts = posterTxt.split("\n\n");
  // print(txts.length)
}

function draw() {
  randomSeed(2);
  if (frameCount % 360 == 0) {
    showBG = !showBG;
  }
  if (showBG) {
    background(255, 20);
  }
  for (let i = 0; i < txts.length; i++) {
    let y =
      map(i, 0, txts.length, 0, height) + sin(i * 15 + frameCount * 0.02) * 40;
    let x =
      -width / 2 +
      ((frameCount * random(0.1, 3) + random(width)) % width) * 1.5;
    fill(0, random(50, 100));
    textSize(random(2, 30));
    text(txts[i], x, y, 400, 400);
  }

  posterLayer.image(
    get(0, 0, width, height),
    0,
    0,
    posterLayer.width,
    posterLayer.height
  );
}
