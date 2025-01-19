export default function decorate(block) {
    const data = block.dataset;
  
    // General Tab
    const desktopImage = data.desktopImage;
    const mobileImage = data.mobileImage;
    const eyebrow = data.eyebrow;
    const heading = data.heading;
    const saveRecipeText = data.saveRecipeText;
    const jumpRecipeText = data.jumpRecipeText;
  
    // Author Card Tab
    const authorCardEyebrow = data.authorCardEyebrow;
    const authorCardHeading = data.authorCardHeading;
    const authorImage = data.authorImage;
    const authorName = data.authorName;
    const authorDesignation = data.authorDesignation;
  
    // Recipe Detail Tab
    const recipeDetailHeading = data.recipeDetailHeading;
    const recipeDetailDescription = data.recipeDetailDescription;
    const recipeDetailTime = data.recipeDetailTime;
    const recipeDetailYield = data.recipeDetailYield;
    const recipeDetailDifficulty = data.recipeDetailDifficulty;
    const recipeDetailDietary = data.recipeDetailDietary;
    const recipeDetailSubmittedBy = data.recipeDetailSubmittedBy;
  
    // Create HTML for General Tab
    if (desktopImage || mobileImage) {
      const media = document.createElement('div');
      media.classList.add('hero-banner-media');
  
      if (desktopImage) {
        const desktopImg = document.createElement('img');
        desktopImg.src = desktopImage;
        desktopImg.alt = 'Desktop Image';
        desktopImg.classList.add('desktop-image');
        media.appendChild(desktopImg);
      }
  
      if (mobileImage) {
        const mobileImg = document.createElement('img');
        mobileImg.src = mobileImage;
        mobileImg.alt = 'Mobile Image';
        mobileImg.classList.add('mobile-image');
        media.appendChild(mobileImg);
      }
  
      block.appendChild(media);
    }
  
    if (eyebrow) {
      const eyebrowElement = document.createElement('div');
      eyebrowElement.classList.add('hero-eyebrow');
      eyebrowElement.textContent = eyebrow;
      block.appendChild(eyebrowElement);
    }
  
    if (heading) {
      const headingElement = document.createElement('h1');
      headingElement.classList.add('hero-heading');
      headingElement.textContent = heading;
      block.appendChild(headingElement);
    }
  
    if (saveRecipeText || jumpRecipeText) {
      const ctaContainer = document.createElement('div');
      ctaContainer.classList.add('cta-container');
  
      if (saveRecipeText) {
        const saveRecipeButton = document.createElement('button');
        saveRecipeButton.classList.add('save-recipe-button');
        saveRecipeButton.textContent = saveRecipeText;
        ctaContainer.appendChild(saveRecipeButton);
      }
  
      if (jumpRecipeText) {
        const jumpRecipeButton = document.createElement('button');
        jumpRecipeButton.classList.add('jump-recipe-button');
        jumpRecipeButton.textContent = jumpRecipeText;
        ctaContainer.appendChild(jumpRecipeButton);
      }
  
      block.appendChild(ctaContainer);
    }
  
    // Create HTML for Author Card Tab
    const authorCard = document.createElement('div');
    authorCard.classList.add('author-card');
  
    if (authorCardEyebrow) {
      const authorEyebrowElement = document.createElement('div');
      authorEyebrowElement.classList.add('author-eyebrow');
      authorEyebrowElement.textContent = authorCardEyebrow;
      authorCard.appendChild(authorEyebrowElement);
    }
  
    if (authorCardHeading) {
      const authorHeadingElement = document.createElement('h2');
      authorHeadingElement.classList.add('author-heading');
      authorHeadingElement.textContent = authorCardHeading;
      authorCard.appendChild(authorHeadingElement);
    }
  
    if (authorImage) {
      const authorImgElement = document.createElement('img');
      authorImgElement.src = authorImage;
      authorImgElement.alt = 'Author Image';
      authorImgElement.classList.add('author-image');
      authorCard.appendChild(authorImgElement);
    }
  
    if (authorName) {
      const authorNameElement = document.createElement('p');
      authorNameElement.classList.add('author-name');
      authorNameElement.textContent = authorName;
      authorCard.appendChild(authorNameElement);
    }
  
    if (authorDesignation) {
      const authorDesignationElement = document.createElement('p');
      authorDesignationElement.classList.add('author-designation');
      authorDesignationElement.textContent = authorDesignation;
      authorCard.appendChild(authorDesignationElement);
    }
  
    block.appendChild(authorCard);
  
    // Create HTML for Recipe Detail Tab
    const recipeDetail = document.createElement('div');
    recipeDetail.classList.add('recipe-detail');
  
    if (recipeDetailHeading) {
      const recipeHeadingElement = document.createElement('h3');
      recipeHeadingElement.classList.add('recipe-heading');
      recipeHeadingElement.textContent = recipeDetailHeading;
      recipeDetail.appendChild(recipeHeadingElement);
    }
  
    if (recipeDetailDescription) {
      const recipeDescriptionElement = document.createElement('div');
      recipeDescriptionElement.classList.add('recipe-description');
      recipeDescriptionElement.innerHTML = recipeDetailDescription;
      recipeDetail.appendChild(recipeDescriptionElement);
    }
  
    if (recipeDetailTime) {
      const recipeTimeElement = document.createElement('p');
      recipeTimeElement.classList.add('recipe-time');
      recipeTimeElement.textContent = `Time: ${recipeDetailTime}`;
      recipeDetail.appendChild(recipeTimeElement);
    }
  
    if (recipeDetailYield) {
      const recipeYieldElement = document.createElement('p');
      recipeYieldElement.classList.add('recipe-yield');
      recipeYieldElement.textContent = `Yield: ${recipeDetailYield}`;
      recipeDetail.appendChild(recipeYieldElement);
    }
  
    if (recipeDetailDifficulty) {
      const recipeDifficultyElement = document.createElement('p');
      recipeDifficultyElement.classList.add('recipe-difficulty');
      recipeDifficultyElement.textContent = `Difficulty: ${recipeDetailDifficulty}`;
      recipeDetail.appendChild(recipeDifficultyElement);
    }

    if (recipeDetailDietary) {
      const recipeDietaryElement = document.createElement('p');
      recipeDietaryElement.classList.add('recipe-dietary');
      recipeDietaryElement.textContent = `Dietary: ${recipeDetailDietary}`;
      recipeDetail.appendChild(recipeDietaryElement);
    }

    if (recipeDetailSubmittedBy) {
      const recipeSubmittedByElement = document.createElement('p');
      recipeSubmittedByElement.classList.add('recipe-submitted-by');
      recipeSubmittedByElement.textContent = `Submitted By: ${recipeDetailSubmittedBy}`;
      recipeDetail.appendChild(recipeSubmittedByElement);
    }
  
    block.appendChild(recipeDetail);
}
  