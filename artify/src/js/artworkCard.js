
//Function that dynamically creates the HTML version for every card
export function createArtworkCardHTML(artwork) {
  const cardHTML = `
      <div class="artwork-card" data-liked="false">
        <div class="artwork-image"> 
          <img src="${artwork.urls.small}" alt="${artwork.alt_description}" />
        </div>
        <div class="artwork-details">
        <button class="like-button">
        <span class="heart-icon"></span>
        </button>    
   
        </div>
      </div>
    `;
  return cardHTML;
}