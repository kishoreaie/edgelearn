export default function decorate(block) {
    const wrapper = block.querySelector('.rc-hero-banner-wrapper'); // Identify the wrapper
    if (!wrapper) return; // Exit if the wrapper doesn't exist
  
    // Clear existing content within the wrapper
    wrapper.innerHTML = '';
  
    // Hero Area
    const heroArea = document.createElement('div');
    heroArea.classList.add('ognm-header-recipe__hero-area', 'clrs-dark', 'clrs-primary');
  
    const heroBg = document.createElement('div');
    heroBg.classList.add('ognm-header-recipe__hero-area__bg');
  
    const picture = document.createElement('picture');
    picture.classList.add('ognm-header-recipe__hero-area__bg__picture');
  
    // Create sources for the hero image
    const data = block.dataset;
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
    img.alt = 'Hero Image';
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
  
    wrapper.appendChild(heroArea);
  
    // Add Author Card and Recipe Detail as required (similar structure)
    // Example: Author Card
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
}
  