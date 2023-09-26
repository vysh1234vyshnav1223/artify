// index.js
import { toggleNavItems } from './navbarToggle.js';
import { createArtworkCardHTML } from './artworkCard.js';
import { populatePopup, openPopup, closePopup } from './cardPopup.js';
import { addCardClickListeners } from './cardClickListener.js';
import { fetchAndDisplayImages, displayLikedArtworks, initializeLikedArtworks } from './imageDisplayer.js';
import favoritesTab from './favorites.js';
import { displayDefaultImages } from './displayDefaultImages.js';

const categoryButtons = document.querySelectorAll('.navbar h3');

//Load all liked artworks
initializeLikedArtworks();

// Redirecting to Homepage when clicked on "Artify" title header

const artifyTitle = document.getElementById('artify-title');
artifyTitle.addEventListener('click', () => {
  displayDefaultImages();
});


// Function to handle category button clicks
function handleCategoryClick(event) {
  const selectedCategory = event.target.getAttribute('data-category');
  if (selectedCategory) {
    fetchAndDisplayImages(selectedCategory);
  }
}

categoryButtons.forEach((button) => {
  button.addEventListener('click', handleCategoryClick);
});







