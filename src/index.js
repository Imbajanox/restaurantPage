import loadHomepage from './modules/homepage.js';
import loadMenu from './modules/menu.js';
import loadContact from './modules/contact.js';

// Load the homepage by default
loadHomepage();

// Add event listeners for the buttons
document.getElementById('home').addEventListener('click', loadHomepage);
document.getElementById('menu').addEventListener('click', loadMenu);
document.getElementById('about').addEventListener('click', loadContact);