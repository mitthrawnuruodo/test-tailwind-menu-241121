const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

const menuItems = [
    { href: '/', text: 'Home' },
    { href: 'about.html', text: 'About' },
    { href: 'contact.html', text: 'Contact' }
];

// Populate menu
menuItems.forEach(item => {
    const menuItem = document.createElement('a');
    menuItem.href = item.href;
    menuItem.textContent = item.text;
    menuItem.className = 'menu-item';
    menu.appendChild(menuItem);
});

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.add('hidden');
    }
});