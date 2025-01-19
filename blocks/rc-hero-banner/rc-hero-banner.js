export default function decorate(block) {
    const data = block.dataset;
  
    // General Section
    const desktopImage = data.desktopImage;
    const mobileImage = data.mobileImage;
    const eyebrow = data.eyebrow;
    const heading = data.heading;
    const saveRecipeText = data.saveRecipeText;
    const jumpRecipeText = data.jumpRecipeText;
  
    // Author Card Section
    const authorCardEyebrow = data.authorCardEyebrow;
    const authorCardHeading = data.authorCardHeading;
    const authorImage = data.authorImage;
    const authorName = data.authorName;
    const authorDesignation = data.authorDesignation;
  
    // Recipe Detail Section
    const recipeDetailHeading = data.recipeDetailHeading;
    const recipeDetailDescription = data.recipeDetailDescription;
    const recipeDetailTime = data.recipeDetailTime;
    const recipeDetailYield = data.recipeDetailYield;
    const recipeDetailDifficulty = data.recipeDetailDifficulty;
    const recipeDetailDietary = data.recipeDetailDietary;
    const recipeDetailSubmittedBy = data.recipeDetailSubmittedBy;
  
    // Clear block to avoid appending multiple times
    block.innerHTML = '';
  
    // Create Hero Area
    const heroArea = document.createElement('div');
    heroArea.classList.add('ognm-header-recipe__hero-area', 'clrs-dark', 'clrs-primary');
  
    const heroBg = document.createElement('div');
    heroBg.classList.add('ognm-header-recipe__hero-area__bg');
    const picture = document.createElement('picture');
    picture.classList.add('ognm-header-recipe__hero-area__bg__picture');
  
    if (desktopImage) {
      const sourceDesktop = document.createElement('source');
      sourceDesktop.media = '(min-width: 1025px)';
      sourceDesktop.srcset = desktopImage;
      picture.appendChild(sourceDesktop);
    }
    if (mobileImage) {
      const sourceMobile = document.createElement('source');
      sourceMobile.media = '(min-width: 768px)';
      sourceMobile.srcset = mobileImage;
      picture.appendChild(sourceMobile);
    }
    const img = document.createElement('img');
    img.classList.add('ognm-header-recipe__hero-area__bg__img');
    img.src = mobileImage || desktopImage || '';
    img.alt = 'Hero Image';
    picture.appendChild(img);
    heroBg.appendChild(picture);
    heroArea.appendChild(heroBg);
  
    const heroCaption = document.createElement('div');
    heroCaption.classList.add('ognm-header-recipe__hero-area__caption', 'elmt-caption');
    const captionInner = document.createElement('div');
    captionInner.classList.add('elmt-caption__inner');
  
    if (eyebrow) {
      const eyebrowElement = document.createElement('p');
      eyebrowElement.classList.add('elmt-caption__eyebrow', 'atom-eyebrow', 'atom-eyebrow--mega');
      eyebrowElement.textContent = eyebrow;
      captionInner.appendChild(eyebrowElement);
    }
  
    if (heading) {
      const headingElement = document.createElement('h1');
      headingElement.classList.add('elmt-caption__title', 'atom-heading', 'atom-heading--lrg');
      headingElement.textContent = heading;
      captionInner.appendChild(headingElement);
    }
  
    const ctas = document.createElement('div');
    ctas.classList.add('elmt-caption__ctas', 'elmt-buttons');
  
    if (saveRecipeText) {
      const saveRecipeButton = document.createElement('button');
      saveRecipeButton.classList.add('atom-button');
      saveRecipeButton.textContent = saveRecipeText;
      ctas.appendChild(saveRecipeButton);
    }
  
    if (jumpRecipeText) {
      const jumpRecipeLink = document.createElement('a');
      jumpRecipeLink.classList.add('atom-button-link', 'js-jump-link');
      jumpRecipeLink.href = '#nav-1';
      jumpRecipeLink.textContent = jumpRecipeText;
      ctas.appendChild(jumpRecipeLink);
    }
  
    captionInner.appendChild(ctas);
    heroCaption.appendChild(captionInner);
    heroArea.appendChild(heroCaption);
  
    block.appendChild(heroArea);
  
    // Author Card
    if (authorCardEyebrow || authorCardHeading || authorImage || authorName || authorDesignation) {
      const authorCard = document.createElement('div');
      authorCard.classList.add('ognm-header-recipe__author-card');
      const authorCardInner = document.createElement('div');
      authorCardInner.classList.add('ognm-header-recipe__author-card__card', 'clrs-light', 'clrs-primary');
  
      const authorCaption = document.createElement('div');
      authorCaption.classList.add('elmt-caption');
      const authorCaptionInner = document.createElement('div');
      authorCaptionInner.classList.add('elmt-caption__inner');
  
      if (authorCardEyebrow) {
        const authorEyebrowElement = document.createElement('p');
        authorEyebrowElement.classList.add('elmt-caption__eyebrow', 'atom-eyebrow');
        authorEyebrowElement.textContent = authorCardEyebrow;
        authorCaptionInner.appendChild(authorEyebrowElement);
      }
  
      if (authorCardHeading) {
        const authorHeadingElement = document.createElement('h2');
        authorHeadingElement.classList.add('elmt-caption__title', 'atom-heading', 'atom-heading--sub-med');
        authorHeadingElement.textContent = authorCardHeading;
        authorCaptionInner.appendChild(authorHeadingElement);
      }
  
      const authorDetails = document.createElement('div');
      authorDetails.classList.add('elmt-caption__author');
  
      if (authorImage) {
        const authorImg = document.createElement('img');
        authorImg.classList.add('elmt-author__portrait__image');
        authorImg.src = authorImage;
        authorImg.alt = 'Author Image';
        authorDetails.appendChild(authorImg);
      }
  
      const authorInfo = document.createElement('div');
      authorInfo.classList.add('elmt-author__info');
  
      if (authorName) {
        const authorNameElement = document.createElement('div');
        authorNameElement.classList.add('elmt-author__info__name');
        authorNameElement.textContent = authorName;
        authorInfo.appendChild(authorNameElement);
      }
  
      if (authorDesignation) {
        const authorDesignationElement = document.createElement('div');
        authorDesignationElement.classList.add('elmt-author__info__desc');
        authorDesignationElement.textContent = authorDesignation;
        authorInfo.appendChild(authorDesignationElement);
      }
  
      authorDetails.appendChild(authorInfo);
      authorCaptionInner.appendChild(authorDetails);
      authorCaption.appendChild(authorCaptionInner);
      authorCardInner.appendChild(authorCaption);
      authorCard.appendChild(authorCardInner);
      block.appendChild(authorCard);
    }
  
    // Recipe Details
    if (recipeDetailHeading || recipeDetailDescription || recipeDetailTime || recipeDetailYield || recipeDetailDifficulty || recipeDetailDietary || recipeDetailSubmittedBy) {
      const recipeDetail = document.createElement('div');
      recipeDetail.classList.add('ognm-header-recipe__detail-area');
  
      const detailContainer = document.createElement('div');
      detailContainer.classList.add('ognm-header-recipe__container');
  
      if (recipeDetailHeading) {
        const recipeHeading = document.createElement('h2');
        recipeHeading.classList.add('atom-heading');
        recipeHeading.textContent = recipeDetailHeading;
        detailContainer.appendChild(recipeHeading);
      }
  
      if (recipeDetailDescription) {
        const recipeDescription = document.createElement('p');
        recipeDescription.classList.add('atom-text');
        recipeDescription.innerHTML = recipeDetailDescription;
        detailContainer.appendChild(recipeDescription);
      }
  
      recipeDetail.appendChild(detailContainer);
      block.appendChild(recipeDetail);
    }

}
