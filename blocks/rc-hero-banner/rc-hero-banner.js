export default function decorate(block) {

  /* Div Structure
    1. Desktop Banner Image
    2. Mobile Banner Image
    3. Alt Image
    4. Eyebrow
    5. Heading
    6. Save Recipe Text
    7. Jump Recipe Text
    8. Author Eyebrow
    9. Author Heading
    10. Author Image
    11. Author Name
    12. Author Designation
    13. Recipe Detail Heading
    14. Recipe Detail Description
    15. Time
    16. Yield
    17. Difficulty Level
    18. Dietary Interest
    19. Submitted By
  */

  const section = document.createElement('div');
  section.className = 'ognm-header-recipe tmpl-page__section tmpl-page__section--pd-btm-lg clrs-dark clrs-secondary';

  // Create Hero Area
  const heroArea = document.createElement('div');
  heroArea.className = 'ognm-header-recipe__hero-area clrs-dark clrs-primary';

  // Extract the hero background image
  const heroBackground = block.querySelector(':scope > div:nth-child(1) picture img');
  const heroMobileBackground = block.querySelector(':scope > div:nth-child(2) picture img');
  const altText = block.querySelector(':scope > div:nth-child(3)').textContent.trim();
  const heroBackgroundContainer = document.createElement('div');
  heroBackgroundContainer.className = 'ognm-header-recipe__hero-area__bg';

  if (heroBackground) {
    const picture = document.createElement('picture');
    picture.className = 'ognm-header-recipe__hero-area__bg__picture';

    // Add desktop and mobile srcsets
    const sourceDesktop = document.createElement('source');
    sourceDesktop.media = '(min-width: 768px)';
    sourceDesktop.srcset = heroBackground.src;

    const img = document.createElement('img');
    img.className = 'ognm-header-recipe__hero-area__bg__img';
    img.src = heroMobileBackground.src || heroBackground.src;
    img.alt = altText || 'Hero Image';

    picture.appendChild(sourceDesktop);
    picture.appendChild(img);
    heroBackgroundContainer.appendChild(picture);
  }

  // Caption Area
  const captionContainer = document.createElement('div');
  captionContainer.className = 'ognm-header-recipe__container ognm-header-recipe__container--top elmt-container';

  const caption = document.createElement('div');
  caption.className = 'ognm-header-recipe__hero-area__caption';

  const captionInner = document.createElement('div');
  captionInner.className = 'elmt-caption__inner';

  const eyebrow = document.createElement('p');
  eyebrow.className = 'elmt-caption__eyebrow atom-eyebrow atom-eyebrow--mega atom-resp-adjusted';
  eyebrow.textContent = block.querySelector(':scope > div:nth-child(4)').textContent.trim();

  const heading = document.createElement('h1');
  heading.className = 'elmt-caption__title atom-heading atom-heading--lrg';
  heading.textContent = block.querySelector(':scope > div:nth-child(5)').textContent.trim();

  const buttonsWrapper = block.querySelector(':scope > div:nth-child(6)');
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'elmt-caption__ctas';

  if (buttonsWrapper) {
    buttonsWrapper.querySelectorAll('p').forEach((btn) => {
      const button = document.createElement('button');
      button.className = 'atom-button';
      button.textContent = btn.textContent.trim();
      buttonContainer.appendChild(button);
    });
  }

  captionInner.appendChild(eyebrow);
  captionInner.appendChild(heading);
  captionInner.appendChild(buttonContainer);
  caption.appendChild(captionInner);
  captionContainer.appendChild(caption);

  heroArea.appendChild(heroBackgroundContainer);
  heroArea.appendChild(captionContainer);

  // Add Hero Area to the section
  section.appendChild(heroArea);

  // Create Author Card Area
  const authorCard = document.createElement('div');
  authorCard.className = 'ognm-header-recipe__author-card';

  const authorCardInner = document.createElement('div');
  authorCardInner.className = 'ognm-header-recipe__author-card__card clrs-light clrs-primary';

  const authorCaption = document.createElement('div');
  authorCaption.className = 'elmt-caption';

  const authorCaptionInner = document.createElement('div');
  authorCaptionInner.className = 'elmt-caption__inner';

  const authorEyebrowText = block.querySelector(':scope > div:nth-child(8)').textContent.trim();
  const authorEyebrow = document.createElement('p');
  authorEyebrow.className = 'elmt-caption__eyebrow atom-eyebrow';
  authorEyebrow.textContent = authorEyebrowText;

  const authorHeadingText = block.querySelector(':scope > div:nth-child(9)').textContent.trim();
  const authorTitle = document.createElement('h2');
  authorTitle.className = 'elmt-caption__title atom-heading atom-heading--sub-med';
  authorTitle.textContent = authorHeadingText;

  const authorInfoParent = document.createElement('div');
  authorInfoParent.className = 'elmt-author';

  //Author Image
  const authorImage = block.querySelector(':scope > div:nth-child(10) picture img');
  const authorImageParent = document.createElement('div');
  authorImageParent.className = 'elmt-author__portrait';

  const authorImageDiv = document.createElement('img');
  authorImageDiv.className = 'elmt-author__portrait__image';
  authorImageDiv.src = authorImage.src;
  authorImageDiv.alt = 'Author Image';

  authorImageParent.appendChild(authorImageDiv);

  //Author Info (Name, Designation)
  const authorInfo = document.createElement('div');
  authorInfo.className = 'elmt-author__info atom-text atom-text--fine';

  const authorNameText = block.querySelector(':scope > div:nth-child(11)').textContent.trim();
  const authorName = document.createElement('div');
  authorName.className = 'elmt-author__info__name';
  authorName.textContent = authorNameText;

  const authorNameDesc = block.querySelector(':scope > div:nth-child(12)').textContent.trim();
  const authorDesc = document.createElement('div');
  authorDesc.className = 'elmt-author__info__desc';
  authorDesc.textContent = authorNameDesc;

  authorInfo.appendChild(authorName);
  authorInfo.appendChild(authorDesc);

  authorInfoParent.appendChild(authorImageParent);
  authorInfoParent.appendChild(authorInfo);

  authorCaptionInner.appendChild(authorEyebrow);
  authorCaptionInner.appendChild(authorTitle);
  authorCaptionInner.appendChild(authorInfoParent);
  authorCaption.appendChild(authorCaptionInner);
  authorCardInner.appendChild(authorCaption);
  authorCard.appendChild(authorCardInner);

  // Add Author Card Area to the section
  section.appendChild(authorCard);

  // Create Recipe Detail Area
  const detailArea = document.createElement('div');
  detailArea.className = 'ognm-header-recipe__detail-area';

  const detailIntro = document.createElement('div');
  detailIntro.className = 'ognm-header-recipe__simple-intro';

  const detailIntroCaption = document.createElement('div');
  detailIntroCaption.className = 'elmt-caption';

  const detailIntroCaptionInner = document.createElement('div');
  detailIntroCaptionInner.className = 'elmt-caption__inner';

  //recipe detail heading
  const recipeDetailHeading = block.querySelector(':scope > div:nth-child(13)').textContent.trim();
  const detailTitle = document.createElement('h2');
  detailTitle.className = 'elmt-caption__title atom-heading atom-heading--sub-lrg';
  detailTitle.textContent = recipeDetailHeading;

  //recipe detail rating
  const recipeRating = document.createElement('div');
  recipeRating.className = 'elmt-caption__rating elmt-rating';
  recipeRating.textContent = "";

  //recipe detail description
  const recipeDetailDescription = block.querySelector(':scope > div:nth-child(14) > div').innerHTML;
  const recipeDescription = document.createElement('div');
  recipeDescription.className = 'elmt-caption__desc atom-text atom-text--wysiwyg';
  recipeDescription.innerHTML = recipeDetailDescription;

  detailIntroCaptionInner.appendChild(detailTitle);
  detailIntroCaptionInner.appendChild(recipeRating);
  detailIntroCaptionInner.appendChild(recipeDescription);

  detailIntroCaption.appendChild(detailIntroCaptionInner);
  detailIntro.appendChild(detailIntroCaption);

  //recipe detail measurements
  const detailMeasurements = document.createElement('div');
  detailMeasurements.className = 'ognm-header-recipe__combo-details';

  // measurementsRootDiv container
  const measurementsRootDiv = document.createElement('div');
  measurementsRootDiv.className = 'ognm-header-recipe__combo-details__list';

  // Icon List Container
  const iconListContainer = document.createElement('div');
  iconListContainer.className = 'elmt-caption';

  const iconListInner = document.createElement('div');
  iconListInner.className = 'elmt-caption__inner';

  const iconList = document.createElement('div');
  iconList.className = 'elmt-caption__icon-list elmt-caption__icon-list--lrg';

  const ul = document.createElement('ul');
  ul.className = 'elmt-caption__icon-list__ul';

  // Total Time
  const recipeTime = block.querySelector(':scope > div:nth-child(15)').textContent.trim();
  const timeLi = document.createElement('li');
  timeLi.className = 'elmt-caption__icon-list__li elmt-caption__icon-list__li--time';
  const timeLabel = document.createElement('span');
  timeLabel.className = 'atom-eyebrow';
  timeLabel.textContent = 'Total Time';
  const timeValue = document.createElement('span');
  timeValue.className = 'atom-eyebrow';
  timeValue.textContent = recipeTime;
  timeLi.appendChild(timeLabel);
  timeLi.appendChild(timeValue);

  // Yield
  const yieldText = block.querySelector(':scope > div:nth-child(16)').textContent.trim();
  const yieldLi = document.createElement('li');
  yieldLi.className = 'elmt-caption__icon-list__li elmt-caption__icon-list__li--yield';
  const yieldLabel = document.createElement('span');
  yieldLabel.className = 'atom-eyebrow';
  yieldLabel.textContent = 'Yield';
  const yieldLink = document.createElement('a');
  yieldLink.className = 'atom-eyebrow js-jump-link';
  yieldLink.href = '#nav-1';
  yieldLink.textContent = yieldText;
  yieldLi.appendChild(yieldLabel);
  yieldLi.appendChild(yieldLink);

  // Difficulty
  const difficultyLi = document.createElement('li');
  difficultyLi.className = 'elmt-caption__icon-list__li elmt-caption__icon-list__li--difficulty';
  const difficultyLabel = document.createElement('span');
  difficultyLabel.className = 'atom-eyebrow';
  difficultyLabel.textContent = 'Difficulty';
  const difficultyValue = document.createElement('span');
  difficultyValue.className = 'atom-eyebrow';
  difficultyValue.textContent = 'Intermediate';
  difficultyLi.appendChild(difficultyLabel);
  difficultyLi.appendChild(difficultyValue);

  // Append List Items
  ul.appendChild(timeLi);
  ul.appendChild(yieldLi);
  ul.appendChild(difficultyLi);
  iconList.appendChild(ul);
  iconListInner.appendChild(iconList);
  iconListContainer.appendChild(iconListInner);

  // Append to measurementsRootDiv
  measurementsRootDiv.appendChild(iconListContainer);

  detailMeasurements.appendChild(measurementsRootDiv);

  detailArea.appendChild(detailIntro);
  detailArea.appendChild(detailMeasurements);

  const detailAreaInner = document.createElement('div');
  detailAreaInner.className = 'ognm-header-recipe__container ognm-header-recipe__container--detail-simple-flex elmt-container';

  detailAreaInner.appendChild(detailIntro);
  detailAreaInner.appendChild(detailMeasurements);

  detailArea.appendChild(detailAreaInner);

  // Add Recipe Detail Area to the section
  section.appendChild(detailArea);

  // Replace the block content with the newly constructed section
  block.innerHTML = '';
  block.appendChild(section);

}
