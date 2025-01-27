import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Create the main section element with required classes
  const section = document.createElement('div');
  section.className =
    'ognm-cardlist-left-aligned-caption tmpl-page__section tmpl-page__section--pd-top-0 tmpl-page__section--pd-btm-lg clrs-light clrs-primary';

  // Create the container for the cards
  const container = document.createElement('div');
  container.className = 'ognm-cardlist-left-aligned-caption__container elmt-container';
  section.appendChild(container);

  // Create the flex container for card items
  const flexContainer = document.createElement('div');
  flexContainer.className = 'ognm-cardlist-left-aligned-caption__flex';
  container.appendChild(flexContainer);

  // Iterate over the block's children and create card items
  [...block.children].forEach((row) => {
    const flexItem = document.createElement('div');
    flexItem.className = 'ognm-cardlist-left-aligned-caption__flex__item';

    const card = document.createElement('div');
    card.className = 'mlcl-card-left-aligned-caption clrs-dark clrs-secondary';

    const caption = document.createElement('div');
    caption.className = 'mlcl-card-left-aligned-caption__caption';

    const flexContent = document.createElement('div');
    flexContent.className = 'mlcl-card-left-aligned-caption__caption__flex-content';

    // Extract eyebrow, title, and button from row
    const eyebrowText = row.querySelector('.atom-eyebrow')?.textContent || 'Default Eyebrow';
    const titleText = row.querySelector('h3')?.textContent || 'Default Title';
    const buttonText = row.querySelector('a')?.textContent || 'Default Button';
    const buttonLink = row.querySelector('a')?.href || '#';

    // Eyebrow
    const eyebrow = document.createElement('div');
    eyebrow.className = 'mlcl-card-left-aligned-caption__caption__eyebrow atom-eyebrow';
    eyebrow.textContent = eyebrowText;

    // Title
    const title = document.createElement('h3');
    title.className = 'mlcl-card-left-aligned-caption__caption__title atom-heading atom-heading--sub-sml';
    title.textContent = titleText;

    // Append eyebrow and title to flex content
    flexContent.appendChild(eyebrow);
    flexContent.appendChild(title);

    // CTAs
    const ctas = document.createElement('div');
    ctas.className = 'mlcl-card-left-aligned-caption__caption__ctas';

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'elmt-buttons';

    const button = document.createElement('a');
    button.className = 'atom-button-link';
    button.href = buttonLink;
    button.textContent = buttonText;

    buttonsDiv.appendChild(button);
    ctas.appendChild(buttonsDiv);

    // Append all parts to the card
    caption.appendChild(flexContent);
    caption.appendChild(ctas);
    card.appendChild(caption);
    flexItem.appendChild(card);

    // Move instrumentation from the row to the card
    moveInstrumentation(row, flexItem);

    // Append the flex item to the flex container
    flexContainer.appendChild(flexItem);
  });

  // Optimize all images in the block
  flexContainer.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });

  // Clear the original block content and append the new section
  block.textContent = '';
  block.appendChild(section);
}
