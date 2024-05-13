let enemies = [];
let enemyImage;
let speed = 2;
let wEnemy = 80;
let hEnemy = 80; 

let enemyLeftImages = [];
let enemyRightImages = [];

const livesGobelin1 = 2;


function preloadEnemy1Image() {
  // Left enemy images
  for (let i = 1; i <= 12; i++) {
    enemyLeftImages.push(loadImage(`characters/enemy/enemyLevel1/assets/left/marche_gauche_gobelin1_${i}.png`));
  }

  // Right enemy images
  for (let i = 1; i <= 12; i++) {
    enemyRightImages.push(loadImage(`characters/enemy/enemyLevel1/assets/right/marche_droite_gobelin1_${i}.png`));
  }
}


function createEnemiesForet() {
  enemies = [];
  enemies.push({
    position: createVector(14 * worldForetTileSize, 10 * worldForetTileSize),
    pointA: createVector(9 * worldForetTileSize, 10 * worldForetTileSize),
    pointB: createVector(14 * worldForetTileSize, 10 * worldForetTileSize),
    direction: 1,
    initialPosition: createVector(14 * worldForetTileSize, 10 * worldForetTileSize),// Enregistrez la position initiale
    lives: livesGobelin1 // Initialisez les vies de l'ennemi
  });

  enemies.push({
    position: createVector(10 * worldForetTileSize, 8 * worldForetTileSize),
    pointA: createVector(10 * worldForetTileSize, 8 * worldForetTileSize),
    pointB: createVector(12 * worldForetTileSize, 8 * worldForetTileSize),
    direction: 1,
    initialPosition: createVector(10 * worldForetTileSize, 8 * worldForetTileSize), // Enregistrez la position initiale
    lives: livesGobelin1 // Initialisez les vies de l'ennemi
  });
  // Add More Ennemies.
}





function resetEnemiesPosition() {
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    // Réinitialise la position de l'ennemi à sa position initiale
    enemy.position.x = enemy.initialPosition.x;
    enemy.position.y = enemy.initialPosition.y;
    // Réinitialise la direction de l'ennemi si nécessaire
    enemy.direction = 1; // Remettre la direction à sa valeur par défaut, si nécessaire
    enemy.lives = livesGobelin1;
  }
}


function moveEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    enemy.position.x += speed * enemy.direction;

    // Inverser la direction si l'ennemi atteint l'un des points de patrouille
    if ((enemy.direction === 1 && enemy.position.x >= enemy.pointB.x) || 
        (enemy.direction === -1 && enemy.position.x <= enemy.pointA.x)) {
      enemy.direction *= -1;
    }
  }
}


function drawEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    let enemyImages = (enemy.direction === 1) ? enemyRightImages : enemyLeftImages;
    let currentImage = enemyImages[Math.floor(frameCount / 5) % enemyImages.length];
    image(currentImage, enemy.position.x, enemy.position.y, wEnemy, hEnemy);
  }
}


// Définir une variable pour le décalage de recul des ennemis
let enemyRecoilDistance = 100; // Vous pouvez ajuster cette valeur selon vos besoins
let enemyRecoilDuration = 0.5; // Durée du recul en secondes

function checkEnemyCollision() {
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    if (isAttacking && rectIsInRect(xHero, yHero, wHero, hHero, enemy.position.x, enemy.position.y, wEnemy, hEnemy)) {
      if (!enemy.isHit) {
        enemy.isHit = true;
        enemy.lives--;

        // Calculer la direction du recul en fonction de la position du héros par rapport à l'ennemi
        let direction = xHero > enemy.position.x ? -1 : 1;

        // Définir la cible finale du recul
        let targetX = enemy.position.x + direction * enemyRecoilDistance;

        // Animer le recul de l'ennemi
        let startTime = Date.now();
        let endTime = startTime + enemyRecoilDuration * 1000; // Conversion en millisecondes

        function animateRecoil() {
          let now = Date.now();
          let progress = (now - startTime) / (endTime - startTime);
          if (progress < 1) {
            enemy.position.x = enemy.position.x + (targetX - enemy.position.x) * progress;
            requestAnimationFrame(animateRecoil);
          } else {
            enemy.position.x = targetX;
          }
        }

        animateRecoil();

        isAttacking = false;
      }
    } else {
      enemy.isHit = false;

      if (!isAttacking && rectIsInRect(xHero, yHero, wHero, hHero, enemy.position.x, enemy.position.y, wEnemy, hEnemy)) {
        // Vérifie la direction du personnage et de l'ennemi
        if ((enemy.direction === 1 && xHero > enemy.position.x) || 
            (enemy.direction === -1 && xHero < enemy.position.x)) {
          loseHeart(); // Vous pouvez retirer cette ligne si vous ne voulez pas que le héros perde de cœur lorsqu'il est touché par un ennemi
        }
      }
    }

    // Si l'ennemi n'a plus de vie, le supprimer
    if (enemy.lives <= 0) {
      enemies.splice(i, 1);
    }
  }
}




