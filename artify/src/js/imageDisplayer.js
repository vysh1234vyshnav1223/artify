import { createApi } from 'unsplash-js';
import { createArtworkCardHTML } from "./artworkCard";
import { addCardClickListeners } from "./cardClickListener";

const unspalsh = createApi({
    accessKey: 'GRnA0-DxtjlGLViRgPEFwRlYoKJF0QjZ5od4aLafWxk',
});

const artworksContainer = document.getElementById('artworks');

let photos = [];

//Function to fetch relevant images from UNSPLASH API
export function fetchAndDisplayImages(category) {
    unspalsh.search
        .getPhotos({
            query: category,
            page: 1,
            perPage: 25,
            orientation: 'portrait',
        })
        .then((result) => {
            if (result.type === 'success') {
                photos = result.response.results;
                const getUrls = photos.map((photo) => {
                    return createArtworkCardHTML(photo);
                });

                artworksContainer.innerHTML = getUrls.join('');
                addCardClickListeners(photos);
            }
        })
        .catch((error) => {
            console.error('Error fetching images:', error);
        });
}

// Function to initialize liked artworks from storage

export function initializeLikedArtworks() {
    const likedArtworks = JSON.parse(localStorage.getItem('likedArtworks')) || [];
    return likedArtworks;
}

export function displayLikedArtworks() {
    const likedPhotoIds = initializeLikedArtworks().map((artwork) => artwork.id);
    // Filter the photos array to get the liked artworks
    const likedPhotos = photos.filter((photo) => likedPhotoIds.includes(photo.id));
    const getUrls = likedPhotos.map((photo) => {
        return createArtworkCardHTML(photo);
    });

    artworksContainer.innerHTML = getUrls.join('');
    addCardClickListeners(likedPhotos);
}

// Function to display a popup message when no liked photos exists
export function displayNoFavoritesPopup() {
    const noFavoritesPopup = document.getElementById('noFavoritesPopup');
    noFavoritesPopup.style.display = 'block';

    const closePopupButton = document.querySelector('#noFavoritesPopup .close');

    closePopupButton.addEventListener('click', () => {
        const noFavoritesPopup = document.getElementById('noFavoritesPopup');
        noFavoritesPopup.style.display = 'none'; // Hide the popup  
    });
}