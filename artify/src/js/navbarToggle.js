
//Function to toggle navbar and display navbar items for Mobile devices.
export function toggleNavItems() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
}

const hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', toggleNavItems);
