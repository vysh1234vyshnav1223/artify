
const closeElement = document.querySelector('.close');
const popupContent = document.querySelector('.modal-content');



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Popup contents   
export function populatePopup(title, imageUrl, description, keywords, user) {
    const popupTitle = popupContent.querySelector('h2');
    const popupImage = popupContent.querySelector('img');
    const popupDescription = popupContent.querySelector('.description');
    const popupKeywords = popupContent.querySelector('.keywords');
    const popupArtist = popupContent.querySelector('.Artist');

    popupTitle.textContent = capitalizeFirstLetter(title);
    popupImage.src = imageUrl;
    popupImage.alt = title;
    popupDescription.textContent = description ? `Description: ${description}` : `Description: An image that needs to be admired`;
    popupKeywords.textContent = `Tags: ${keywords.title} `;
    popupArtist.textContent = `By ${user.first_name}`;

    const keywordTitles = keywords.map(keyword => capitalizeFirstLetter(keyword.title));

    if (keywordTitles.length > 0) {
        const keywordsText = keywordTitles.join(', ');
        popupKeywords.textContent = `Keywords: ${keywordsText}`;
    } else {
        // If no keywords provided, hide the keywords section
        popupKeywords.style.display = 'none';
    }
}

// function to open the Popup
export function openPopup() {
    const popup = document.getElementsByClassName('modal')[0];
    popup.style.display = 'block';
}

export function closePopup() {
    const popup = document.getElementById('artPopup');
    popup.style.display = 'none';
}

closeElement.addEventListener('click', () => {
    closePopup();
});


