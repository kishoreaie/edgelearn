import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Create the main section element
  const section = document.createElement('section');
  section.className =
    'ognm-cardlist-3-item-mb-carousel tmpl-page__section tmpl-page__section--pd-top-lg tmpl-page__section--pd-btm-lg clrs-light clrs-secondary';
  section.id = 'nav-3';

  // Create the carousel web component
  const carousel = document.createElement('wc-carousel');
  carousel.className = 'ognm-cardlist-3-item-mb-carousel__web-component';
  carousel.setAttribute('mode', '0');
  carousel.setAttribute('infinite', 'false');
  carousel.setAttribute('gap', '16');
  carousel.setAttribute('minwidth', '262');
  section.appendChild(carousel);

  // Create the carousel container
  const container = document.createElement('div');
  container.className = 'ognm-cardlist-3-item-mb-carousel__container elmt-container';
  carousel.appendChild(container);

  // Create the slide area
  const slideArea = document.createElement('div');
  slideArea.className = 'ognm-cardlist-3-item-mb-carousel__slide-area wc-carousel-area';
  slideArea.style.height = '377px';
  container.appendChild(slideArea);

  // Create the overflow wrapper
  const overflowWrapper = document.createElement('div');
  overflowWrapper.className = 'ognm-cardlist-3-item-mb-carousel__overflow-wrapper';
  slideArea.appendChild(overflowWrapper);

  const overflowInner = document.createElement('div');
  overflowInner.className = 'ognm-cardlist-3-item-mb-carousel__overflow-wrapper__inner wc-carousel-overflow';
  overflowWrapper.appendChild(overflowInner);

  // Create the carousel items container
  const itemsContainer = document.createElement('div');
  itemsContainer.className = 'ognm-cardlist-3-item-mb-carousel__items wc-carousel-items';
  overflowInner.appendChild(itemsContainer);

  // Populate carousel items from block children
  [...block.children].forEach((row, index) => {
    const item = document.createElement('div');
    item.className = `ognm-cardlist-3-item-mb-carousel__item wc-carousel-item ${index % 2 === 0 ? 'ognm-cardlist-3-item-mb-carousel__item--caption' : ''}`;
    item.style.order = `${index}`;
    item.style.width = '278.75px';
    item.style.maxWidth = '278.75px';

    // If the row contains an image, create an overlay card
    const image = row.querySelector('img');
    if (image) {
      const link = document.createElement('a');
      link.href = '#';
      link.className = 'mlcl-card-img-overlay clrs-dark clrs-secondary';
      link.setAttribute('draggable', 'false');

      // Add the image to the overlay
      const imgWrapper = document.createElement('div');
      imgWrapper.className = 'mlcl-card-img-overlay__image atom-image-zoom';
      const optimizedImg = createOptimizedPicture(image.src, image.alt, false, [
        { width: '400' },
        { width: '800' },
      ]);
      moveInstrumentation(image, optimizedImg.querySelector('img'));
      imgWrapper.appendChild(optimizedImg);

      // Add the overlay title
      const overlay = document.createElement('div');
      overlay.className = 'mlcl-card-img-overlay__overlay';
      const title = document.createElement('div');
      title.className = 'mlcl-card-img-overlay__overlay__title atom-blurb atom-blurb--sml atom-resp-adjusted';
      title.textContent = row.querySelector('h2')?.textContent || 'Default Title';
      overlay.appendChild(title);

      link.appendChild(imgWrapper);
      link.appendChild(overlay);
      item.appendChild(link);
    } else {
      // Create a caption card
      const inner = document.createElement('div');
      inner.className = 'ognm-cardlist-3-item-mb-carousel__item__inner';

      const caption = document.createElement('div');
      caption.className = 'elmt-caption elmt-caption--center elmt-caption--card';

      const eyebrow = document.createElement('p');
      eyebrow.className = 'elmt-caption__eyebrow atom-eyebrow';
      eyebrow.textContent = row.querySelector('.atom-eyebrow')?.textContent || 'Default Eyebrow';

      const title = document.createElement('h2');
      title.className = 'elmt-caption__title atom-heading atom-heading--sub-lrg';
      title.textContent = row.querySelector('h2')?.textContent || 'Default Caption';

      caption.appendChild(eyebrow);
      caption.appendChild(title);
      inner.appendChild(caption);
      item.appendChild(inner);
    }

    itemsContainer.appendChild(item);
  });

  // Add navigation buttons
  const navButtons = document.createElement('div');
  navButtons.className = 'ognm-cardlist-3-item-mb-carousel__prev-next';
  carousel.appendChild(navButtons);

  const prevButton = document.createElement('button');
  prevButton.className =
    'ognm-cardlist-recipe-programs__arrow-prev wc-carousel-prev atom-button atom-button--secondary atom-button--prev';
  prevButton.setAttribute('aria-label', 'Previous Slide');
  prevButton.style.display = 'none';
  navButtons.appendChild(prevButton);

  const nextButton = document.createElement('button');
  nextButton.className =
    'ognm-cardlist-recipe-programs__arrow-next wc-carousel-next atom-button atom-button--secondary atom-button--next';
  nextButton.setAttribute('aria-label', 'Next Slide');
  nextButton.style.display = 'none';
  navButtons.appendChild(nextButton);

  // Add dots for slides
  const dotsContainer = document.createElement('div');
  dotsContainer.className =
    'ognm-cardlist-3-item-mb-carousel__dots atom-dots u-margin-top--med wc-carousel-dots';
  carousel.appendChild(dotsContainer);

  [...block.children].forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'atom-dots__dot wc-carousel-dot';
    dot.setAttribute('data-goto', `${index}`);
    dot.setAttribute('aria-label', `Go to Slide ${index}`);
    dot.style.display = 'none';
    dotsContainer.appendChild(dot);
  });

  // Clear the original block content and append the decorated section
  block.textContent = '';
  block.appendChild(section);
}
