import { populatePopup, openPopup } from "./cardPopup";
import favoritesTab from "./favorites";
import { displayLikedArtworks, initializeLikedArtworks } from "./imageDisplayer";

// Initialize the liked artworks from local storage
let likedArtworks = initializeLikedArtworks();

// Function that handles like when clicked on the heart icon and adds it to the favorites tab, also to local storage
export function addCardClickListeners(photos) {
    const cardElements = document.querySelectorAll('.artwork-card');

    cardElements.forEach((cardElement, index) => {
        const heartIcon = cardElement.querySelector('.heart-icon');
        const clickedPhoto = photos[index];
        // Check if the artwork is in the liked artworks list
        let isLiked = likedArtworks.some((artwork) => artwork.id === clickedPhoto.id);

        if (isLiked) {
            heartIcon.classList.add('filled'); // Add the "filled" class
        } else {
            heartIcon.classList.remove('filled'); // Remove the "filled" class
        }

        cardElement.addEventListener('click', (event) => {
            if (event.target === heartIcon) {
                if (isLiked) {
                    // Unlike the artwork
                    likedArtworks = likedArtworks.filter((artwork) => artwork.id !== clickedPhoto.id);
                    localStorage.setItem('likedArtworks', JSON.stringify(likedArtworks));
                    heartIcon.classList.remove('filled');
                } else {
                    // Like the artwork
                    likedArtworks.push({ id: clickedPhoto.id });
                    localStorage.setItem('likedArtworks', JSON.stringify(likedArtworks));
                    heartIcon.classList.add('filled');
                }

                isLiked = !isLiked; 
                likedArtworks = initializeLikedArtworks();
            } else {
                // Clicking elsewhere on the card, open the popup
                const clickedPhoto = photos[index];
                populatePopup(clickedPhoto.alt_description, clickedPhoto.urls.small, clickedPhoto.description, clickedPhoto.tags, clickedPhoto.user);
                openPopup();
            }
        });
    });
}
