export default function decorate(block) {
  /* Div Structure
    1. Title
    2. Description
  */

  const rootDiv = document.createElement('div');
  rootDiv.className = 'ognm-banner-standard ognm-banner-standard--color ognm-banner-standard--compact ognm-banner-standard--vortex tmpl-page__section tmpl-page__section--pd-top-0 tmpl-page__section--pd-btm-sm clrs-light clrs-primary';

  const container = document.createElement('div');
  container.className = 'ognm-banner-standard__container elmt-container clrs-dark clrs-secondary';

  const contents = document.createElement('div');
  contents.className = 'ognm-banner-standard__contents';

  const caption = document.createElement('div');
  caption.className = 'elmt-caption';

  const captionInner = document.createElement('div');
  captionInner.className = 'elmt-caption__inner';

  // Safely retrieve the title
  const titleDiv = block.querySelector(':scope > div:nth-child(1)');
  if (titleDiv) {
    const title = document.createElement('h2');
    title.className = 'elmt-caption__title atom-heading atom-heading--sub-med';
    title.textContent = titleDiv.textContent.trim();
    captionInner.appendChild(title);
  }

  // Safely retrieve the description
  const descriptionDiv = block.querySelector(':scope > div:nth-child(2)');
  if (descriptionDiv) {
    const description = document.createElement('div');
    description.className = 'elmt-caption__desc atom-text atom-text--wysiwyg';
    description.innerHTML = descriptionDiv.textContent.trim();
    captionInner.appendChild(description);
  }

  caption.appendChild(captionInner);
  contents.appendChild(caption);
  container.appendChild(contents);
  rootDiv.appendChild(container);

  block.innerHTML = '';
  block.appendChild(rootDiv);
}
