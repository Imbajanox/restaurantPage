export default function loadMenu() {
    const content = document.getElementById('content');

    // Clear existing content
    content.innerHTML = '';

    // Create elements
    const heading = document.createElement('h1');
    const menuList = document.createElement('ul');

    // Set content
    heading.textContent = 'Our Menu';

    const menuItems = [
        'Pizza - $10',
        'Pasta - $12',
        'Salad - $8',
        'Burger - $9',
        'Steak - $20',
    ];

    menuItems.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        menuList.appendChild(listItem);
    });

    // Append elements to the content div
    content.appendChild(heading);
    content.appendChild(menuList);
}