/////////////////////////////////////////////
///////////FUNCTION KEYSBINDS////////////////
/////////////////////////////////////////////
let path = 7;

function moveLeft() {
  xHero -= heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    xHero += path;
  }
  // HERO Left Animation.
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
  // HERO Top Village Animation
  updateAnimationVillage(myHeroVillageTop);
}

function moveBottomVillage() {
  yHero += heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes  [currentWorld])) {
    yHero -= path;
  }
  // HERO Bottom Village Animation
  updateAnimationVillage(myHeroVillageBottom);
}

function moveLeftVillage() {
  xHero -= heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    xHero += path;
  }
  // HERO Left Village Animation.
  updateAnimationVillage(myHeroVillageLeft);
}

function moveRightVillage() {
  xHero += heroSpeed;
  if (checkCollision(collisonWorlds[currentWorld], worldsTileSizes[currentWorld])) {
    xHero -= path;
  }
  // HERO Right Village Animation.
  updateAnimationVillage(myHeroVillageRight);
}


/////////////////////////////////////////////
/////////////FUNCTION UPDATE/////////////////
/////////////////////////////////////////////

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



/////////////////////////////////////////////
/////////////FUNCTION CHECKKEYS//////////////
/////////////////////////////////////////////

let lastDirection = 'down';
let lastHorizontalDirection = 'left';

function checkKeys(currentMap) {
  if (!gameOver) {
    // Temple, Foret, Grotte, Boss
    if (currentMap === 0 || currentMap === 2 || currentMap === 3 || currentMap === 4) {
      if (keyIsDown(68) && keyIsDown(81)) {
        return;
      }

      if (keyIsDown(68)) {
        moveRight();
        lastHorizontalDirection = 'right';
      } else if (keyIsDown(81)) {
        moveLeft();
        lastHorizontalDirection = 'left';
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
    
    // Village
    if (currentMap === 1 || currentMap === 2 || currentMap === 3) {
      if (keyIsDown(68) && keyIsDown(81)) {
        return;
      }

      if (keyIsDown(90) && keyIsDown(83)) {
        return;
      }

      if (keyIsDown(68)) {
        moveRightVillage();
        lastDirection = 'right';
      } else if (keyIsDown(81)) {
        moveLeftVillage();
        lastDirection = 'left';
      } else if (keyIsDown(90)) {
        moveTopVillage();
        lastDirection = 'up';
      } else if (keyIsDown(83)) {
        moveBottomVillage();
        lastDirection = 'down';
      }
    }

    if (!keyIsDown(68) && !keyIsDown(81) && !keyIsDown(90) && !keyIsDown(83)) {
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
};



/////////////////////////////////////////////
///////////FUNCTION KEYSPRESSED//////////////
/////////////////////////////////////////////

let initialX = 2 * worldTempleTileSize;
let initialY = 6 * worldTempleTileSize;

function keyPressed() {
  if(!introDialogActive && !animation) {
    if (key === 'n' || key === 'N') {
      if (checkGrandSageInteraction()) {
        currentDialogueGrandSageIndex++;
        if (currentDialogueGrandSageIndex >= dialoguesGrandSage.length) {
          currentDialogueGrandSageIndex = dialoguesGrandSage.length - 1;
        }
      }
    }
  };


  if (key === 'n' || key === 'N') {
    if (checkNPCYetiInteraction()) {
      currentDialogueYetiIndex++;
      if (currentDialogueYetiIndex >= dialoguesYeti.length) {
        currentDialogueYetiIndex = dialoguesYeti.length - 1;
      }
    }
  };

  


  
  if (currentWorld === 1 || currentWorld === 2 || currentWorld === 3 || currentWorld === 4) {
    if (key === 'e') {
      attack();
    }
  };

  if (key === 't') {
    let cageIndex = checkCageInteraction();
    if (cageIndex !== -1) {
      counterForet += 3; // Incrémenter le compteur de 3
      counterForet = min(counterForet, 12); // Limiter le compteur à 12
      cageVisible[cageIndex] = false; // Rendre la cage invisible
    }
  }

  if (key === 't') {
    let cageIndexGrotte = checkCageInteractionGrotte();
    if (cageIndexGrotte !== -1) {
      counterGrotte += 3; // Incrémenter le compteur de 3
      counterGrotte= min(counterGrotte, 12); // Limiter le compteur à 12
      cageVisibleGrotte[cageIndexGrotte] = false; // Rendre la cage invisible
    }
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
  };

  // Intro Tuto.
  if (keyCode === 78 && currentIntroductionIndex >= 5 && currentIntroductionIndex <= 10) {
    return;
  };
  
  if (keyCode === 78) { 
    if (introDialogActive && currentIntroductionIndex < dialoguesIntroduction.length - 1) {
      currentIntroductionIndex++;
    } else if (introDialogActive && currentIntroductionIndex === dialoguesIntroduction.length - 1) {
      introDialogActive = false;
    }
  };
  
  if (introDialogActive) {
    if (currentIntroductionIndex === 5) {
      if (keyCode === 81) { // Appuie sur 'q' pour aller à gauche
        currentIntroductionIndex++;
      }
    } else if (currentIntroductionIndex === 6) {
      if (keyCode === 68) { // Appuie sur 'd' pour aller à droite
        currentIntroductionIndex++;
      }
    } else if (currentIntroductionIndex === 7) {
      if (keyCode === 32) { // Appuie sur 'espace' pour sauter
        currentIntroductionIndex++;
      }
    } else if (currentIntroductionIndex === 19) {
      if (keyCode === 13) { // Appuie sur 'enter' pour sauter
        currentIntroductionIndex++;
      }
    } else if(currentIntroductionIndex === 8) {
      if(keyCode === 69) {
        currentIntroductionIndex++;
      }
    } else if(currentIntroductionIndex === 9) {
      if(keyCode === 90) {
        currentIntroductionIndex++
      }
    } else if(currentIntroductionIndex === 10) {
      if(keyCode === 83) {
        currentIntroductionIndex++;
      }
    }
  }
};