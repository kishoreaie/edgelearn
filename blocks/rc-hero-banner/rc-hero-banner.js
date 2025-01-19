export default function decorate(block) {
    const data = block.dataset;
  
    // Create Hero Area
    const heroArea = document.createElement('div');
    heroArea.classList.add('ognm-header-recipe__hero-area', 'clrs-dark', 'clrs-primary');
  
    const heroBg = document.createElement('div');
    heroBg.classList.add('ognm-header-recipe__hero-area__bg');
  
    const picture = document.createElement('picture');
    picture.classList.add('ognm-header-recipe__hero-area__bg__picture');
  
    // Add image sources dynamically
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
    const img = document.createElement('img');
    img.classList.add('ognm-header-recipe__hero-area__bg__img');
    img.src = data.mobileImage || data.desktopImage || '';
    img.alt = data.altText || 'Hero Image';
    picture.appendChild(img);
    heroBg.appendChild(picture);
    heroArea.appendChild(heroBg);
  
    const heroContainer = document.createElement('div');
    heroContainer.classList.add('ognm-header-recipe__container', 'ognm-header-recipe__container--top', 'elmt-container');
  
    const caption = document.createElement('div');
    caption.classList.add('ognm-header-recipe__hero-area__caption');
  
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
    ctas.classList.add('elmt-caption__ctas');
  
    if (data.saveRecipeText) {
      const saveButton = document.createElement('button');
      saveButton.classList.add('atom-button');
      saveButton.textContent = data.saveRecipeText;
      ctas.appendChild(saveButton);
    }
  
    if (data.jumpRecipeText) {
      const jumpLink = document.createElement('a');
      jumpLink.classList.add('atom-button-link', 'js-jump-link');
      jumpLink.href = '#nav-1';
      jumpLink.textContent = data.jumpRecipeText;
      ctas.appendChild(jumpLink);
    }
  
    captionInner.appendChild(ctas);
    elmtCaption.appendChild(captionInner);
    caption.appendChild(elmtCaption);
    heroContainer.appendChild(caption);
    heroArea.appendChild(heroContainer);
    block.appendChild(heroArea);
  
    // Create Author Card
    if (data.authorCardEyebrow || data.authorCardHeading || data.authorImage || data.authorName || data.authorDesignation) {
      const authorCard = document.createElement('div');
      authorCard.classList.add('ognm-header-recipe__author-card');
  
      const authorCardInner = document.createElement('div');
      authorCardInner.classList.add('ognm-header-recipe__author-card__card', 'clrs-light', 'clrs-primary');
  
      const authorCaption = document.createElement('div');
      authorCaption.classList.add('elmt-caption');
  
      const authorCaptionInner = document.createElement('div');
      authorCaptionInner.classList.add('elmt-caption__inner');
  
      if (data.authorCardEyebrow) {
        const eyebrow = document.createElement('p');
        eyebrow.classList.add('elmt-caption__eyebrow', 'atom-eyebrow');
        eyebrow.textContent = data.authorCardEyebrow;
        authorCaptionInner.appendChild(eyebrow);
      }
  
      if (data.authorCardHeading) {
        const heading = document.createElement('h2');
        heading.classList.add('elmt-caption__title', 'atom-heading', 'atom-heading--sub-med');
        heading.textContent = data.authorCardHeading;
        authorCaptionInner.appendChild(heading);
      }
  
      const authorDetails = document.createElement('div');
      authorDetails.classList.add('elmt-caption__author');
  
      const authorInfo = document.createElement('div');
      authorInfo.classList.add('elmt-author');
  
      if (data.authorImage) {
        const portrait = document.createElement('img');
        portrait.classList.add('elmt-author__portrait__image');
        portrait.src = data.authorImage;
        portrait.alt = `Image of ${data.authorName || 'Author'}`;
        authorInfo.appendChild(portrait);
      }
  
      if (data.authorName || data.authorDesignation) {
        const authorText = document.createElement('div');
        authorText.classList.add('elmt-author__info');
  
        if (data.authorName) {
          const name = document.createElement('div');
          name.classList.add('elmt-author__info__name');
          name.textContent = data.authorName;
          authorText.appendChild(name);
        }
  
        if (data.authorDesignation) {
          const designation = document.createElement('div');
          designation.classList.add('elmt-author__info__desc');
          designation.textContent = data.authorDesignation;
          authorText.appendChild(designation);
        }
  
        authorInfo.appendChild(authorText);
      }
  
      authorDetails.appendChild(authorInfo);
      authorCaptionInner.appendChild(authorDetails);
      authorCaption.appendChild(authorCaptionInner);
      authorCardInner.appendChild(authorCaption);
      authorCard.appendChild(authorCardInner);
      block.appendChild(authorCard);
    }
  
    // Create Detail Area
    const detailArea = document.createElement('div');
    detailArea.classList.add('ognm-header-recipe__detail-area');
  
    const detailContainer = document.createElement('div');
    detailContainer.classList.add('ognm-header-recipe__container', 'ognm-header-recipe__container--detail-simple-flex', 'elmt-container');
  
    const simpleIntro = document.createElement('div');
    simpleIntro.classList.add('ognm-header-recipe__simple-intro');
  
    const detailCaption = document.createElement('div');
    detailCaption.classList.add('elmt-caption');
  
    const detailCaptionInner = document.createElement('div');
    detailCaptionInner.classList.add('elmt-caption__inner');
  
    if (data.recipeDetailHeading) {
      const heading = document.createElement('h2');
      heading.classList.add('elmt-caption__title', 'atom-heading', 'atom-heading--sub-lrg');
      heading.textContent = data.recipeDetailHeading;
      detailCaptionInner.appendChild(heading);
    }
  
    if (data.recipeDetailDescription) {
      const description = document.createElement('p');
      description.classList.add('elmt-caption__desc', 'atom-text', 'atom-text--wysiwyg');
      description.innerHTML = data.recipeDetailDescription;
      detailCaptionInner.appendChild(description);
    }
  
    detailCaption.appendChild(detailCaptionInner);
    simpleIntro.appendChild(detailCaption);
    detailContainer.appendChild(simpleIntro);
    detailArea.appendChild(detailContainer);
    block.appendChild(detailArea);

}
  