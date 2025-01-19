export default function decorate(block) {
    // First div: Hero background images (desktop and mobile)
    // Second div: Hero caption with eyebrow, heading, and CTAs
    // Third div: Author card
    // Fourth div: Recipe details
  
    // Hero Background
    const backgroundDiv = block.querySelector(':scope > div:nth-child(1)');
    const desktopImage = backgroundDiv?.querySelector(':scope > div:first-child a')?.href;
    const mobileImage = backgroundDiv?.querySelector(':scope > div:nth-child(2) a')?.href;
  
    const heroBackground = document.createElement('div');
    heroBackground.classList.add('ognm-header-recipe__hero-area__bg');
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
    heroBackground.appendChild(picture);
  
    // Hero Caption
    const captionDiv = block.querySelector(':scope > div:nth-child(2)');
    const heroCaption = document.createElement('div');
    heroCaption.classList.add('ognm-header-recipe__hero-area__caption', 'elmt-caption');
    const captionInner = document.createElement('div');
    captionInner.classList.add('elmt-caption__inner');
  
    const eyebrow = captionDiv?.querySelector(':scope > p:first-child')?.textContent.trim();
    const heading = captionDiv?.querySelector(':scope > h1')?.textContent.trim();
    const saveRecipeText = captionDiv?.querySelector(':scope > div .save-recipe')?.textContent.trim();
    const jumpRecipeText = captionDiv?.querySelector(':scope > div .jump-recipe')?.textContent.trim();
  
    if (eyebrow) {
      const eyebrowEl = document.createElement('p');
      eyebrowEl.classList.add('elmt-caption__eyebrow', 'atom-eyebrow', 'atom-eyebrow--mega');
      eyebrowEl.textContent = eyebrow;
      captionInner.appendChild(eyebrowEl);
    }
  
    if (heading) {
      const headingEl = document.createElement('h1');
      headingEl.classList.add('elmt-caption__title', 'atom-heading', 'atom-heading--lrg');
      headingEl.textContent = heading;
      captionInner.appendChild(headingEl);
    }
  
    const ctas = document.createElement('div');
    ctas.classList.add('elmt-caption__ctas', 'elmt-buttons');
  
    if (saveRecipeText) {
      const saveRecipeBtn = document.createElement('button');
      saveRecipeBtn.classList.add('atom-button');
      saveRecipeBtn.textContent = saveRecipeText;
      ctas.appendChild(saveRecipeBtn);
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
  
    // Author Card
    const authorDiv = block.querySelector(':scope > div:nth-child(3)');
    const authorCard = document.createElement('div');
    authorCard.classList.add('ognm-header-recipe__author-card');
    const authorCardInner = document.createElement('div');
    authorCardInner.classList.add('ognm-header-recipe__author-card__card', 'clrs-light', 'clrs-primary');
  
    const authorEyebrow = authorDiv?.querySelector(':scope > p:first-child')?.textContent.trim();
    const authorHeading = authorDiv?.querySelector(':scope > h2')?.textContent.trim();
    const authorImage = authorDiv?.querySelector(':scope img')?.src;
    const authorName = authorDiv?.querySelector(':scope .author-name')?.textContent.trim();
    const authorDesignation = authorDiv?.querySelector(':scope .author-designation')?.textContent.trim();
  
    const authorCaption = document.createElement('div');
    authorCaption.classList.add('elmt-caption');
    const authorCaptionInner = document.createElement('div');
    authorCaptionInner.classList.add('elmt-caption__inner');
  
    if (authorEyebrow) {
      const authorEyebrowEl = document.createElement('p');
      authorEyebrowEl.classList.add('elmt-caption__eyebrow', 'atom-eyebrow');
      authorEyebrowEl.textContent = authorEyebrow;
      authorCaptionInner.appendChild(authorEyebrowEl);
    }
  
    if (authorHeading) {
      const authorHeadingEl = document.createElement('h2');
      authorHeadingEl.classList.add('elmt-caption__title', 'atom-heading', 'atom-heading--sub-med');
      authorHeadingEl.textContent = authorHeading;
      authorCaptionInner.appendChild(authorHeadingEl);
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
      const authorNameEl = document.createElement('div');
      authorNameEl.classList.add('elmt-author__info__name');
      authorNameEl.textContent = authorName;
      authorInfo.appendChild(authorNameEl);
    }
  
    if (authorDesignation) {
      const authorDesignationEl = document.createElement('div');
      authorDesignationEl.classList.add('elmt-author__info__desc');
      authorDesignationEl.textContent = authorDesignation;
      authorInfo.appendChild(authorDesignationEl);
    }
  
    authorDetails.appendChild(authorInfo);
    authorCaptionInner.appendChild(authorDetails);
    authorCaption.appendChild(authorCaptionInner);
    authorCardInner.appendChild(authorCaption);
    authorCard.appendChild(authorCardInner);
  
    // Recipe Details
    const recipeDiv = block.querySelector(':scope > div:nth-child(4)');
    const recipeDetails = document.createElement('div');
    recipeDetails.classList.add('ognm-header-recipe__detail-area');
  
    if (recipeDiv) {
      recipeDetails.innerHTML = recipeDiv.innerHTML; // Copy inner content dynamically
    }
  
    // Append to Block
    block.innerHTML = ''; // Clear block content before appending new structure
    block.appendChild(heroBackground);
    block.appendChild(heroCaption);
    block.appendChild(authorCard);
    block.appendChild(recipeDetails);
}
  