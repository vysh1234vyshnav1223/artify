import { displayLikedArtworks, displayNoFavoritesPopup, initializeLikedArtworks } from "./imageDisplayer";

//Displays the favorites tab when clicked on it unless there's no liked pictures. Also if no liked images exists, a popup appears with a message.
const favoritesTab = document.getElementById('favourites');
let likedArtworks =  initializeLikedArtworks();

favoritesTab.addEventListener('click', () => {
  likedArtworks = initializeLikedArtworks();
  console.log(likedArtworks);
  if (likedArtworks.length === 0) {
    displayNoFavoritesPopup(); 
  }else{
    displayLikedArtworks();
  }
});

export default favoritesTab;
