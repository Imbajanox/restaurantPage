export default function loadHomepage() {
    const content = document.getElementById('content');

    // Clear existing content
    content.innerHTML = '';

    // Create elements
    const heading = document.createElement('h1');
    const image = document.createElement('img');
    const paragraph = document.createElement('p');

    // Set content and attributes
    heading.textContent = 'Welcome to Our Restaurant!';
    image.src = 'https://via.placeholder.com/400x200';
    image.alt = 'Restaurant Image';
    paragraph.textContent = 'We are a family-owned restaurant dedicated to serving the most delicious and authentic dishes. Come visit us and experience the warmth of our hospitality!';

    // Append elements to the content div
    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(paragraph);
}