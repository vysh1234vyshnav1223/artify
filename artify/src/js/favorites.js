import { initializeLikedArtworks } from "./imageDisplayer";
import { displayLikedArtworks, displayNoFavoritesPopup } from "./imageDisplayer";

//Displays the favorites tab when clicked on it unless there's no liked pictures. Also if no liked images exists, a popup appears with a message.
const favoritesTab = document.getElementById('favourites');

favoritesTab.addEventListener('click', () => {
  if (initializeLikedArtworks().length === 0) {
    displayNoFavoritesPopup(); 
  }else{
    displayLikedArtworks();
  }
});

export default favoritesTab;