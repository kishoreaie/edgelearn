export default function decorate(block) {
    // Extract the hero background image
    const heroBackground = block.querySelector(':scope > div:nth-child(1) picture img');
    const heroBackgroundContainer = document.createElement('div');
    heroBackgroundContainer.className = 'ognm-header-recipe__hero-area__bg';
    if (heroBackground) {
      const picture = document.createElement('picture');
      picture.className = 'ognm-header-recipe__hero-area__bg__picture';
      const img = document.createElement('img');
      img.className = 'ognm-header-recipe__hero-area__bg__img';
      img.src = heroBackground.src;
      img.alt = heroBackground.alt || 'Hero Image';
      picture.appendChild(img);
      heroBackgroundContainer.appendChild(picture);
    }
  
    // Extract the heading
    const headingWrapper = block.querySelector(':scope > div:nth-child(4)');
    const headingContent = headingWrapper?.textContent.trim() || '';
    const heroCaptionContainer = document.createElement('div');
    heroCaptionContainer.className = 'ognm-header-recipe__hero-area__caption';
  
    const caption = document.createElement('div');
    caption.className = 'elmt-caption';
    const captionInner = document.createElement('div');
    captionInner.className = 'elmt-caption__inner';
  
    const heading = document.createElement('h1');
    heading.className = 'elmt-caption__title atom-heading atom-heading--lrg';
    heading.textContent = headingContent;
  
    // Append heading to the caption
    captionInner.appendChild(heading);
    caption.appendChild(captionInner);
    heroCaptionContainer.appendChild(caption);
  
    // Extract buttons (Save Recipe, Jump to Recipe)
    const buttonsWrapper = block.querySelector(':scope > div:nth-child(5)');
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'elmt-caption__ctas';
  
    if (buttonsWrapper) {
      const buttons = buttonsWrapper.querySelectorAll('p');
      buttons.forEach((btn) => {
        const button = document.createElement('button');
        button.className = 'atom-button';
        button.textContent = btn.textContent.trim();
        buttonContainer.appendChild(button);
      });
    }
    captionInner.appendChild(buttonContainer);
  
    // Construct the full hero area
    const heroArea = document.createElement('div');
    heroArea.className = 'ognm-header-recipe__hero-area clrs-dark clrs-primary';
    heroArea.appendChild(heroBackgroundContainer);
    heroArea.appendChild(heroCaptionContainer);
  
    // Replace the block content with the new structure
    block.innerHTML = '';
    block.appendChild(heroArea);
  }
  