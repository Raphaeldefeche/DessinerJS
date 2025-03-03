showPixelGrid(50);
for (let i = 0; i < 14; i++) {
  setPixel(i, 13);
}

let score = 0;
let x = 6;
let y = 0;
let prevX = x;
let prevY = y;
let finalY = 0;
async function fall() {
  for (let j = 1; j < 120; j++) {
    if (getPixelSimpleColor(x, y + 1) == "black") {
      document.write("<h1>GAME OVER</h1>");
      return;
    }
    for (let y = 0; getPixelSimpleColor(x, y + 1) == "transparent"; score++) {
      prevX = x;
      prevY = y;
      setPixel(prevX, prevY, "transparent");
      if (keyLeft) {
        x--;
        y++;
      } else if (keyRight) {
        x++;
        y++;
      } else {
        y++;
      }

      if (x < 0) {
        x = 0;
      } else if (x > 13) {
        x = 13;
      }

      setPixel(x, y, "black");
      await delay(50);
    }
  }
}

fall();

// async function fall() {
//   for (let j = 0; j < 12; j++) {
//     prevX = x;
//     prevY = y;
//     setPixel(prevX, prevY, "blue");
//     if (keyLeft) {
//       x--;
//       y++;
//     } else if (keyRight) {
//       x++;
//       y++;
//     } else {
//       y++;
//     }
//     setPixel(x, y, "black");
//     await delay(50);
//   }
// }
