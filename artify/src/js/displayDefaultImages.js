
import { fetchAndDisplayImages } from "./imageDisplayer";

// Function to fetch and display images for the default category (Classic Art)
export function displayDefaultImages() {
    const defaultCategory = 'Classic Art';
    fetchAndDisplayImages(defaultCategory);
}

displayDefaultImages();
