// Variables globales
let slider;
let circleA, circleB;

function setup() {
   createCanvas(windowWidth, windowHeight);
   slider = createSlider(0, 100, 50);
   slider.center();
   
   // Définition d'un objet cercle A
   circleA = {
       c: { x: 100, y: 100 }, // centre
       r: 50, // rayon
       color: { r: 43, g: 255, b: 123 }
   }
   
   // Définition d'un autre cercle B
   circleB = {
       c: { x: width - 100, y: 100 },
       r: 100,
       color: { r: 176, g: 52, b: 200 }
   }
}

function draw() {
   background(200);
   
   // Affichage du cercle A
   fill(circleA.color.r, circleA.color.g, circleA.color.b);
   circle(circleA.c.x, circleA.c.y, circleA.r * 2); // * 2 pour le diamètre
   
   // Affichage du cercle B
   fill(circleB.color.r, circleB.color.g, circleB.color.b);
   circle(circleB.c.x, circleB.c.y, circleB.r * 2); // * 2 pour le diamètre
   
   // Calcul de la valeur du slider en pourcentage
   let pourcentage = slider.value() / 100;
   
   // Calcul de la position et du rayon interpolés pour le cercle X
   let circleX = {
       c: { x: lerp(circleA.c.x, circleB.c.x, pourcentage), y: 100 },
       r: lerp(circleA.r, circleB.r, pourcentage), // interpolation du rayon
       color: { r: 0, g: 0, b: 0 }
   }
   
   // Affichage du cercle X avec le rayon interpolé
   fill(circleX.color.r, circleX.color.g, circleX.color.b);
   circle(circleX.c.x, circleX.c.y, circleX.r * 2); // * 2 pour le diamètre
}
