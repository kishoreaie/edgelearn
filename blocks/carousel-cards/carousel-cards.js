export default function decorate(block) {
  // Create the main section element
  const section = document.createElement('section');
  section.className = 'ognm-cardlist-3-item-mb-carousel tmpl-page__section tmpl-page__section--pd-top-lg tmpl-page__section--pd-btm-lg clrs-light clrs-secondary';
  section.id = 'nav-3';

  // Create the carousel component
  const carousel = document.createElement('wc-carousel');
  carousel.className = 'ognm-cardlist-3-item-mb-carousel__web-component';
  carousel.setAttribute('mode', '0');
  carousel.setAttribute('infinite', 'false');
  carousel.setAttribute('gap', '16');
  carousel.setAttribute('minwidth', '262');
  section.appendChild(carousel);

  // Create the container and slide area
  const container = document.createElement('div');
  container.className = 'ognm-cardlist-3-item-mb-carousel__container elmt-container';
  carousel.appendChild(container);

  const slideArea = document.createElement('div');
  slideArea.className = 'ognm-cardlist-3-item-mb-carousel__slide-area wc-carousel-area';
  container.appendChild(slideArea);

  const overflowWrapper = document.createElement('div');
  overflowWrapper.className = 'ognm-cardlist-3-item-mb-carousel__overflow-wrapper';
  slideArea.appendChild(overflowWrapper);

  const overflowInner = document.createElement('div');
  overflowInner.className = 'ognm-cardlist-3-item-mb-carousel__overflow-wrapper__inner wc-carousel-overflow';
  overflowWrapper.appendChild(overflowInner);

  // Create the static items container
  const itemsContainer = document.createElement('div');
  itemsContainer.className = 'ognm-cardlist-3-item-mb-carousel__items wc-carousel-items';
  overflowInner.appendChild(itemsContainer);

  // Static Item 1 (Caption Card)
  const item1 = document.createElement('div');
  item1.className = 'ognm-cardlist-3-item-mb-carousel__item wc-carousel-item ognm-cardlist-3-item-mb-carousel__item--caption clrs-light clrs-primary';
  const inner1 = document.createElement('div');
  inner1.className = 'ognm-cardlist-3-item-mb-carousel__item__inner';
  const caption1 = document.createElement('div');
  caption1.className = 'elmt-caption elmt-caption--center elmt-caption--card';
  const eyebrow1 = document.createElement('p');
  eyebrow1.className = 'elmt-caption__eyebrow atom-eyebrow';
  eyebrow1.textContent = 'Make it A Meal';
  const title1 = document.createElement('h2');
  title1.className = 'elmt-caption__title atom-heading atom-heading--sub-lrg';
  title1.textContent = 'Serve Up Perfect Pairings';
  caption1.appendChild(eyebrow1);
  caption1.appendChild(title1);
  inner1.appendChild(caption1);
  item1.appendChild(inner1);
  itemsContainer.appendChild(item1);

  // Static Item 2 (Image Overlay)
  const item2 = document.createElement('div');
  item2.className = 'ognm-cardlist-3-item-mb-carousel__item wc-carousel-item';
  const link2 = document.createElement('a');
  link2.href = '#';
  link2.className = 'mlcl-card-img-overlay clrs-dark clrs-secondary';
  const imgWrapper2 = document.createElement('div');
  imgWrapper2.className = 'mlcl-card-img-overlay__image atom-image-zoom';
  const img2 = document.createElement('img');
  img2.className = 'mlcl-card-img-overlay__image__img';
  img2.src = '//picsum.photos/id/75/400/400';
  img2.srcset = '//picsum.photos/id/75/400/400 1x, //picsum.photos/id/75/800/800 2x';
  img2.alt = 'A Sample Image';
  img2.loading = 'lazy';
  imgWrapper2.appendChild(img2);
  const overlay2 = document.createElement('div');
  overlay2.className = 'mlcl-card-img-overlay__overlay';
  const overlayTitle2 = document.createElement('div');
  overlayTitle2.className = 'mlcl-card-img-overlay__overlay__title atom-blurb atom-blurb--sml atom-resp-adjusted';
  overlayTitle2.textContent = 'Whole Wheat Cinnamon Date Rolls';
  overlay2.appendChild(overlayTitle2);
  link2.appendChild(imgWrapper2);
  link2.appendChild(overlay2);
  item2.appendChild(link2);
  itemsContainer.appendChild(item2);

  // Static Item 3 (Image Overlay)
  const item3 = document.createElement('div');
  item3.className = 'ognm-cardlist-3-item-mb-carousel__item wc-carousel-item';
  const link3 = document.createElement('a');
  link3.href = '#';
  link3.className = 'mlcl-card-img-overlay clrs-dark clrs-secondary';
  const imgWrapper3 = document.createElement('div');
  imgWrapper3.className = 'mlcl-card-img-overlay__image atom-image-zoom';
  const img3 = document.createElement('img');
  img3.className = 'mlcl-card-img-overlay__image__img';
  img3.src = '//picsum.photos/id/225/400/400';
  img3.srcset = '//picsum.photos/id/225/400/400 1x, //picsum.photos/id/225/800/800 2x';
  img3.alt = 'A Sample Image';
  img3.loading = 'lazy';
  imgWrapper3.appendChild(img3);
  const overlay3 = document.createElement('div');
  overlay3.className = 'mlcl-card-img-overlay__overlay';
  const overlayTitle3 = document.createElement('div');
  overlayTitle3.className = 'mlcl-card-img-overlay__overlay__title atom-blurb atom-blurb--sml atom-resp-adjusted';
  overlayTitle3.textContent = 'Kombucha Margarita';
  overlay3.appendChild(overlayTitle3);
  link3.appendChild(imgWrapper3);
  link3.appendChild(overlay3);
  item3.appendChild(link3);
  itemsContainer.appendChild(item3);

  // Add navigation buttons
  const navButtons = document.createElement('div');
  navButtons.className = 'ognm-cardlist-3-item-mb-carousel__prev-next';
  carousel.appendChild(navButtons);

  const prevButton = document.createElement('button');
  prevButton.className = 'ognm-cardlist-recipe-programs__arrow-prev wc-carousel-prev atom-button atom-button--secondary atom-button--prev';
  prevButton.setAttribute('aria-label', 'Previous Slide');
  navButtons.appendChild(prevButton);

  const nextButton = document.createElement('button');
  nextButton.className = 'ognm-cardlist-recipe-programs__arrow-next wc-carousel-next atom-button atom-button--secondary atom-button--next';
  nextButton.setAttribute('aria-label', 'Next Slide');
  navButtons.appendChild(nextButton);

  // Add dots for navigation
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'ognm-cardlist-3-item-mb-carousel__dots atom-dots u-margin-top--med wc-carousel-dots';
  carousel.appendChild(dotsContainer);

  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('button');
    dot.className = 'atom-dots__dot wc-carousel-dot';
    dot.setAttribute('data-goto', `${i}`);
    dot.setAttribute('aria-label', `Go to Slide ${i + 1}`);
    dotsContainer.appendChild(dot);
  }

  // Clear the original block content and append the static section
  block.textContent = '';
  block.appendChild(section);
}
