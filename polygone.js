showGrid(50);
width(3);
color("purple");
setSpeed(50);

// goto(350, 0);

let distance;
distance = prompt("distance ?");
while (isNaN(distance)) {
  distance = prompt("enter reel distance");
}

let cotés;
cotés = prompt("nombre de cotés");
while (isNaN(cotés)) {
  cotés = prompt("entrer nombres de coté valide");
}

let compteur = 0;
while (compteur < cotés) {
  forward(distance);
  right(((cotés - 2) * 180) / cotés - 180);
  randomColor_h();
  compteur += 1;
}

// Angle = ((n – 2) * 180°) / n
