/////////////////////////////////////////////
///////////FUNCTION KEYSBINDS////////////////
/////////////////////////////////////////////
let path = 7;

function moveLeft() {
  xHero -= heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    xHero += path;
  }
  // HERO left Animation.
  updateAnimation(myHeroLeft);
}

function moveRight() {
  xHero += heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    xHero -= path;
  }
  // HERO Right Animation.
  updateAnimation(myHeroRight);
}



function moveTopVillage() {
  yHero -= heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    yHero += path;
  }
  updateAnimationVillage(myHeroVillageTop);
}

function moveBottomVillage() {
  yHero += heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes  [currentWorld])) {
    yHero -= path;
  }
  updateAnimationVillage(myHeroVillageBottom);
}

function moveLeftVillage() {
  xHero -= heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    xHero += path;
  }
  // HERO left Animation.
  updateAnimationVillage(myHeroVillageLeft);
}

function moveRightVillage() {
  xHero += heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    xHero -= path;
  }
  // HERO Right Animation.
  updateAnimationVillage(myHeroVillageRight);
}



function updateAnimation(animationArray) {
  movementCounter += 1;
  if (movementCounter >= 20 / heroSpeed) {
    currentIndex += 1;
    if (currentIndex === animationArray.length) {
      currentIndex = 0;
    }
    currentHeroImage = animationArray[currentIndex];
    movementCounter = 0;
  }
}

function updateAnimationVillage(animationArray) {
  movementCounter += 1;
  if (movementCounter >= 20 / heroSpeed) {
    currentVillageIndex += 1;
    if (currentVillageIndex === animationArray.length) {
      currentVillageIndex = 0;
    }
    currentHeroVillageImage = animationArray[currentVillageIndex];
    movementCounter = 0;
  }
}


let lastDirection = 'down';
let lastHorizontalDirection = 'right';
function checkKeys(currentMap) {
 

  if (!gameOver) {
    if (currentMap === 0 || currentMap === 2 || currentMap === 3 || currentMap === 4) {
      if (keyIsDown(68) && keyIsDown(81)) {
        return;
      }

      if (keyIsDown(68)) {
        moveRight();
        lastHorizontalDirection = 'right';
      }

      if (keyIsDown(81)) {
        moveLeft();
        lastHorizontalDirection = 'left';
      }

      if (keyIsDown(90)) {
        moveTopVillage();
      }

      if (keyIsDown(83)) {
        moveBottomVillage();  
      }

      if (keyIsDown(32)) {
        jump();
      }
      if (!keyIsDown(68) && !keyIsDown(81)) {
        if (lastHorizontalDirection === 'right') {
          updateAnimation(myHeroIdleRight);
        } else if (lastHorizontalDirection === 'left') {
          updateAnimation(myHeroIdleLeft);
        }
      }
    }
    

    if (currentMap === 1) {

      if (keyIsDown(90) && keyIsDown(83)) {
        return;
      }

      if (keyIsDown(90)) {
        moveTopVillage();
        lastDirection = 'up';
      }

      if (keyIsDown(83)) {
        moveBottomVillage();  
        lastDirection = 'down';
      }

      if (keyIsDown(68) && keyIsDown(81)) {
        return;
      }

      if (keyIsDown(68)) {
        moveRightVillage();
        lastDirection = 'right';
      }

      if (keyIsDown(81)) {
        moveLeftVillage();
        lastDirection = 'left';
      }
    }
    // Lorsque la touche est relâchée, vérifiez la direction pour jouer l'animation d'idle appropriée
    if (!keyIsDown(90) && !keyIsDown(83) && !keyIsDown(68) && !keyIsDown(81)) {
      if (lastDirection === 'up') {
        updateAnimationVillage(myHeroVillageIdleTop);
      } else if (lastDirection === 'down') {
        updateAnimationVillage(myHeroVillageIdleBottom);
      } else if (lastDirection === 'left') {
        updateAnimationVillage(myHeroVillageIdleLeft);
      } else if (lastDirection === 'right') {
        updateAnimationVillage(myHeroVillageIdleRight);
      }
    }
  }
}



let initialX = 2 * worldTempleTileSize;
let initialY = 6 * worldTempleTileSize;

function keyPressed() {
  if (key === 'n' || key === 'N') {
    if (checkNPCInteraction()) {
      currentDialogueGrandSageIndex++;
      if (currentDialogueGrandSageIndex >= dialoguesGrandSage.length) {
        currentDialogueGrandSageIndex = dialoguesGrandSage.length - 1;
      }
    };
  };

  if (key === 'n' || key === 'N') {
    if (checkNPCYetiInteraction()) {
      currentDialogueYetiIndex++;
      if (currentDialogueYetiIndex >= dialoguesYeti.length) {
        currentDialogueYetiIndex = dialoguesYeti.length - 1;
      }
    }
};

  if (key === 'h' && !gameOver) {
    loseHeart();
  } else if (gameOver && key === 'r') {
    hearts = 3;
    gameOver = false;
    xHero = initialX;
    yHero = initialY;
  }

  


  if (gameStart) {
    if (keyCode === RIGHT_ARROW) {
      currentImageIndex++;
      if (currentImageIndex >= images.length) {
        introImagesEnd = true;
      }
    } else if (keyCode === LEFT_ARROW) {
      if (currentImageIndex > 0) {
        currentImageIndex--;
      }
    }
  }



  if (keyCode === 78) { 
    if (introDialogActive && currentIntroductionIndex < dialoguesIntroduction.length - 1) {
      currentIntroductionIndex++;
    } else if (introDialogActive && currentIntroductionIndex === dialoguesIntroduction.length - 1) {
      introDialogActive = false;
      tutoEnCours = true;
    }
  }


  if (tutoEnCours) {
    
    if (keyCode === 81 && currentDialogueIndex === 0) {
        currentDialogueIndex++;
    }

    else if (keyCode === 68 && currentDialogueIndex === 1) {
        currentDialogueIndex++;
    }

    else if (keyCode === 32 && currentDialogueIndex === 2) {
      currentDialogueIndex++;
    }
  }
};
