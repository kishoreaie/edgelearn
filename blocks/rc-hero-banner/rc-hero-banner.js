export default function decorate(block) {
    // Select the first div inside the block for the heading content
    const headingWrapper = block.querySelector(':scope > div:nth-child(4)');
  
    // Create a new hero content container
    const heroContent = document.createElement('div');
    heroContent.className = 'ognm-header-recipe tmpl-page__section tmpl-page__section--pd-btm-lg clrs-dark clrs-secondary';
  
    // Process the heading
    if (headingWrapper) {
      const headingText = headingWrapper.textContent.trim(); // Extract the heading text
      const heading = document.createElement('h1');
      heading.className = 'hero-heading'; // Add your custom class for styling
      heading.textContent = headingText; // Set the heading text
      heroContent.appendChild(heading); // Append to hero content
    }
  
    // Replace the block content with the new structure
    block.innerHTML = ''; // Clear existing content
    block.appendChild(heroContent); // Append the new hero content
  }
  