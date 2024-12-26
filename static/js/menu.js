// File: static/js/menu.js

import menuData from './menu-data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Function to create a menu item element
    function createMenuItem(item) {
        return `
            <div class="menu-item" data-animation="fade-in">
                <div class="item-header">
                    <h3>${item.name}</h3>
                    <span class="price">$${item.price}</span>
                </div>
                <p class="description">${item.description}</p>
                <div class="tags">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                ${item.allergens.length > 0 ? `
                    <div class="allergens">
                        <small>Contains: ${item.allergens.join(', ')}</small>
                    </div>
                ` : ''}
            </div>
        `;
    }

    // Populate each menu section
    Object.entries(menuData).forEach(([section, items]) => {
        const sectionElement = document.querySelector(`#${section} .menu-items`);
        if (sectionElement) {
            sectionElement.innerHTML = items.map(item => createMenuItem(item)).join('');
        }
    });

    // Initialize animations for menu items
    const menuItems = document.querySelectorAll('.menu-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    menuItems.forEach(item => observer.observe(item));
});