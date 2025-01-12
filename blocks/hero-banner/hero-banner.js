export default function decorate(block) {
    const variant = block.dataset.variant;
    const headline = block.querySelector('.headline');
    const description = block.querySelector('.description');
    const cta = block.querySelector('.cta');
    const media = block.querySelector('.media');
  
    if (variant === 'image-text-cta') {
      const imgSrc = block.dataset.image;
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = 'Hero Banner Image';
      media.appendChild(img);
    } else if (variant === 'video-text-cta') {
      const videoSrc = block.dataset.video;
      const video = document.createElement('video');
      video.src = videoSrc;
      video.setAttribute('autoplay', true);
      video.setAttribute('loop', true);
      video.setAttribute('muted', true);
      video.setAttribute('playsinline', true);
      media.appendChild(video);
    }
  
    // Append headline and description
    const headlineElement = document.createElement('h1');
    headlineElement.textContent = headline;
    block.appendChild(headlineElement);
  
    const descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = description;
    block.appendChild(descriptionElement);
  
    // Add CTA button
    if (cta) {
      const ctaButton = document.createElement('a');
      ctaButton.href = block.dataset.ctaLink;
      ctaButton.textContent = block.dataset.ctaText;
      ctaButton.classList.add('cta-button');
      block.appendChild(ctaButton);
    }
}
  