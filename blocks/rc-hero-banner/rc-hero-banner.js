export default function decorate(block) {
    // Select the wrapper
    const wrapper = block.querySelector('.rc-hero-banner-wrapper');
    if (!wrapper) return; // Exit if wrapper is not found
  
    // Extract dataset
    const data = block.dataset;
  
    // Clear existing content inside the wrapper
    wrapper.innerHTML = '';
  
    // Create Hero Area
    const heroArea = document.createElement('div');
    heroArea.classList.add('ognm-header-recipe__hero-area', 'clrs-dark', 'clrs-primary');
  
    // Background Image
    const heroBg = document.createElement('div');
    heroBg.classList.add('ognm-header-recipe__hero-area__bg');
    const picture = document.createElement('picture');
    picture.classList.add('ognm-header-recipe__hero-area__bg__picture');
  
    // Add desktop and mobile sources if available
    if (data.desktopImage) {
      const sourceDesktop = document.createElement('source');
      sourceDesktop.media = '(min-width: 1025px)';
      sourceDesktop.srcset = data.desktopImage;
      picture.appendChild(sourceDesktop);
    }
    if (data.mobileImage) {
      const sourceMobile = document.createElement('source');
      sourceMobile.media = '(min-width: 768px)';
      sourceMobile.srcset = data.mobileImage;
      picture.appendChild(sourceMobile);
    }
  
    // Fallback image
    const img = document.createElement('img');
    img.classList.add('ognm-header-recipe__hero-area__bg__img');
    img.src = data.mobileImage || data.desktopImage || '';
    img.alt = 'Hero Image';
    picture.appendChild(img);
  
    heroBg.appendChild(picture);
    heroArea.appendChild(heroBg);
  
    // Hero Caption
    const heroCaption = document.createElement('div');
    heroCaption.classList.add('ognm-header-recipe__hero-area__caption');
    const elmtCaption = document.createElement('div');
    elmtCaption.classList.add('elmt-caption');
    const captionInner = document.createElement('div');
    captionInner.classList.add('elmt-caption__inner');
  
    // Eyebrow
    if (data.eyebrow) {
      const eyebrow = document.createElement('p');
      eyebrow.classList.add('elmt-caption__eyebrow', 'atom-eyebrow', 'atom-eyebrow--mega');
      eyebrow.textContent = data.eyebrow;
      captionInner.appendChild(eyebrow);
    }
  
    // Heading
    if (data.heading) {
      const heading = document.createElement('h1');
      heading.classList.add('elmt-caption__title', 'atom-heading', 'atom-heading--lrg');
      heading.textContent = data.heading;
      captionInner.appendChild(heading);
    }
  
    // CTA Buttons
    const ctas = document.createElement('div');
    ctas.classList.add('elmt-caption__ctas', 'elmt-buttons');
  
    if (data.saveRecipeText) {
      const saveRecipeButton = document.createElement('button');
      saveRecipeButton.classList.add('atom-button');
      saveRecipeButton.textContent = data.saveRecipeText;
      ctas.appendChild(saveRecipeButton);
    }
  
    if (data.jumpRecipeText) {
      const jumpRecipeLink = document.createElement('a');
      jumpRecipeLink.classList.add('atom-button-link', 'js-jump-link');
      jumpRecipeLink.href = '#nav-1';
      jumpRecipeLink.textContent = data.jumpRecipeText;
      ctas.appendChild(jumpRecipeLink);
    }
  
    captionInner.appendChild(ctas);
    elmtCaption.appendChild(captionInner);
    heroCaption.appendChild(elmtCaption);
    heroArea.appendChild(heroCaption);
  
    wrapper.appendChild(heroArea);
  
    // Author Card
    if (data.authorName) {
      const authorCard = document.createElement('div');
      authorCard.classList.add('ognm-header-recipe__author-card');
      const authorCardInner = document.createElement('div');
      authorCardInner.classList.add('ognm-header-recipe__author-card__card', 'clrs-light', 'clrs-primary');
      const authorCaption = document.createElement('div');
      authorCaption.classList.add('elmt-caption');
      const authorCaptionInner = document.createElement('div');
      authorCaptionInner.classList.add('elmt-caption__inner');
  
      const authorName = document.createElement('p');
      authorName.classList.add('elmt-caption__title', 'atom-heading');
      authorName.textContent = data.authorName;
  
      authorCaptionInner.appendChild(authorName);
      authorCaption.appendChild(authorCaptionInner);
      authorCardInner.appendChild(authorCaption);
      authorCard.appendChild(authorCardInner);
      wrapper.appendChild(authorCard);
    }
  
    // Recipe Details (Example)
    const recipeDetail = document.createElement('div');
    recipeDetail.classList.add('ognm-header-recipe__detail-area');
    const detailContainer = document.createElement('div');
    detailContainer.classList.add('ognm-header-recipe__container');
  
    if (data.recipeDetailHeading) {
      const recipeHeading = document.createElement('h2');
      recipeHeading.textContent = data.recipeDetailHeading;
      detailContainer.appendChild(recipeHeading);
    }
  
    if (data.recipeDetailDescription) {
      const recipeDescription = document.createElement('p');
      recipeDescription.textContent = data.recipeDetailDescription;
      detailContainer.appendChild(recipeDescription);
    }
  
    recipeDetail.appendChild(detailContainer);
    wrapper.appendChild(recipeDetail);
  }
  