let enemy;
let pointA;
let pointB;
let speed = 2;
let directionEnnemy = 1;

function moveEnemy() {
  enemy.x += speed * directionEnnemy;
  
  if ((directionEnnemy === 1 && enemy.x >= pointB.x) || (directionEnnemy === -1 && enemy.x <= pointA.x)) {
    directionEnnemy *= -1;
  }
}