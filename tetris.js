showPixelGrid(50);
for (let i = 0; i < 14; i++) {
  setPixel(i, 13);
}

let x = 6;
let i = 0;
async function fall() {
  for (let j = 0; j < 12; j++) {
    for (let i = 0; getPixelSimpleColor(x, i) == "transparent"; i++) {
      setPixel(x, i, "black");
      setPixel(x, i - 1, "transparent");
      if (keyLeft) {
        x--;
        return;
      } else if (keyRight) {
        x++;
      }
      await delay(50);
    }
  }
}

fall();

// for (let j = 0; j < 8; j++) {
//   fall();
//   fall();
//   i = 0;
//   console.log(i);
// }
