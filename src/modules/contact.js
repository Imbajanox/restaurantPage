export default function loadContact() {
    const content = document.getElementById('content');

    // Clear existing content
    content.innerHTML = '';

    // Create elements
    const heading = document.createElement('h1');
    const address = document.createElement('p');
    const phone = document.createElement('p');
    const email = document.createElement('p');

    // Set content
    heading.textContent = 'Contact Us';
    address.textContent = 'Address: 123 Main Street, City, Country';
    phone.textContent = 'Phone: +1 234 567 890';
    email.textContent = 'Email: info@restaurant.com';

    // Append elements to the content div
    content.appendChild(heading);
    content.appendChild(address);
    content.appendChild(phone);
    content.appendChild(email);
}