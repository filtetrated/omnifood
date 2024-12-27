// Main JavaScript for animations and interactions
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navigation = document.querySelector('.navigation');
    const navbar = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navigation.classList.toggle('active');
        // navbar.style.transform = translateY(0);
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navigation.classList.remove('active');
        });
    });

    // Change navbar background on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.main-nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    // Scroll animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.dish-card, .stat-item, .category-card');
    animateElements.forEach(el => observer.observe(el));

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrolled = window.scrollY;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (isMenuOpen) {
                    navLinks.classList.remove('active');
                    isMenuOpen = false;
                    animateBurgerMenu(false);
                }
            }
        });
    });

    // Form validation and animation
    const reservationForm = document.querySelector('.reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(this)) {
                animateFormSuccess();
                // Add AJAX submission here
            }
        });
    }

    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                shakeElement(input);
            }
        });
        
        return isValid;
    }

    function shakeElement(element) {
        element.classList.add('shake');
        setTimeout(() => element.classList.remove('shake'), 500);
    }

    function animateFormSuccess() {
        const form = document.querySelector('.reservation-form');
        form.innerHTML = '<div class="success-message">Thank you! Your reservation has been received.</div>';
        document.querySelector('.success-message').style.animation = 'fadeInUp 0.5s ease';
    }

    // Lazy loading images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
    // Add to cart animation
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const cart = document.querySelector('.cart-icon');
            
            // Create flying element
            const flyingElement = document.createElement('div');
            flyingElement.className = 'flying-element';
            document.body.appendChild(flyingElement);
            
            // Get positions
            const buttonRect = button.getBoundingClientRect();
            const cartRect = cart.getBoundingClientRect();
            
            // Animate
            flyingElement.style.top = `${buttonRect.top}px`;
            flyingElement.style.left = `${buttonRect.left}px`;
            
            requestAnimationFrame(() => {
                flyingElement.style.top = `${cartRect.top}px`;
                flyingElement.style.left = `${cartRect.left}px`;
                flyingElement.style.opacity = '0';
            });
            
            setTimeout(() => {
                document.body.removeChild(flyingElement);
                cart.classList.add('bounce');
                setTimeout(() => cart.classList.remove('bounce'), 1000);
            }, 1000);
        });
    });
    const siteData = {
        // URLs configuration
        urls: {
            home: '/index.html',
            menu: '../../menu.html',
            reservations: '/reservations.html',
            about: '/about.html',
            contact: '/contact.html',
            make_reservation: '/api/reservations',
            submit_feedback: '/api/feedback',
            newsletter_signup: '/api/newsletter'
        },
    
        // Featured dishes data
        featured_dishes: [
            {
                name: "Beef Wellington",
                description: "Our signature dish features premium beef tenderloin wrapped in mushroom duxelles, prosciutto, and golden puff pastry. Served with roasted root vegetables and red wine reduction.",
                price: "67",
                image: {
                    url: "static/images/wellington.webp"
                }
            },
            {
                name: "Maine Lobster Thermidor",
                description: "Fresh Maine lobster prepared in the classical French style, with a rich brandy-infused sauce, topped with Gruyère cheese and gratinated to perfection.",
                price: "59",
                image: {
                    url: "static/images/lobster.webp"
                }
            },
            {
                name: "Seasonal Truffle Risotto",
                description: "Carnaroli rice slowly cooked with wild mushrooms and finished with seasonal truffles and aged Parmigiano-Reggiano. A celebration of texture and umami.",
                price: "63",
                image: {
                    url: "static/images/risotto.webp"
                }
            },
            {
                name: "Board of Cheeses",
                description: "An artful selection of artisanal cheeses from around the world, paired with seasonal fruits, honeycomb, and freshly baked crackers. A harmonious blend of creamy, tangy, and nutty flavors, perfect for sharing or indulging solo.",
                price: "89",
                image: {
                    url: "static/images/cheesy.webp"
                }
            }
        ],
    
        // Events data
        events: [
            {
                title: "Wine Tasting Evening",
                description: "Join us for an exclusive wine tasting event featuring selected vintages from our cellar.",
                date: "2025-03-15"
            },
            {
                title: "Chef's Table Experience",
                description: "An intimate dining experience with our executive chef featuring a special tasting menu.",
                date: "2025-03-22"
            },
            {
                title: "Spring Menu Launch",
                description: "Be the first to experience our new seasonal menu celebrating spring ingredients.",
                date: "2025-04-01"
            }
        ],
    
        // Customer reviews data
        customer_reviews: [
            {
                content: "An extraordinary dining experience! The attention to detail in every dish was remarkable.",
                author: "James Wilson",
                rating: 5
            },
            {
                content: "The wine pairing suggestions were perfect. A memorable evening.",
                author: "Sarah Thompson",
                rating: 5
            },
            {
                content: "Impeccable service and outstanding cuisine. Will definitely return!",
                author: "Michael Chen",
                rating: 4
            }
        ],
    
        // Team members data
        team_members: [
            {
                name: "Marcus Laurent",
                role: "Founder & Executive Chef",
                photo: {
                    url: "static/images/chef1.jpg"
                }
            },
            {
                name: "Sofia Rodriguez",
                role: "Head Chef",
                photo: {
                    url: "static/images/chef2.jpg"
                }
            },
            {
                name: "Jean-Pierre Dubois",
                role: "Pastry Chef",
                photo: {
                    url: "static/images/chef3.jpg"
                }
            }
        ],
    
        // FAQs data
        faqs: [
            {
                question: "Do you accommodate dietary restrictions?",
                answer: "Yes, we offer various options for vegetarian, vegan, and gluten-free diets. Please inform us of any dietary requirements when making your reservation."
            },
            {
                question: "What is your dress code?",
                answer: "We maintain a formal dress code. Gentlemen are required to wear jackets, and casual wear such as jeans and sneakers is not permitted."
            },
            {
                question: "Do you offer private dining?",
                answer: "Yes, we have private dining rooms available for special occasions. Please contact us directly for arrangements."
            },
            {
                question: "Is parking available?",
                answer: "We offer complimentary valet parking for all our guests."
            }
        ],
    };
    siteData.menu_categories = [
        {
            name: "Starters",
            items: [
                {
                    name: "Pan-Seared Scallops",
                    description: "Perfectly seared sea scallops with cauliflower purée, crispy pancetta, and herb oil",
                    wine_pairing: "Chablis Premier Cru",
                    image: {
                        url: "static/images/scallops.webp"
                    }
                },
                {
                    name: "Wild Mushroom Risotto",
                    description: "Arborio rice with wild mushrooms, aged Parmesan, and white truffle oil",
                    wine_pairing: "Pinot Noir",
                    image: {
                        url: "static/images/mushroom-risotto.webp"
                    }
                },
                {
                    name: "Artisanal Cheese Board",
                    description: "Selection of artisanal cheeses, house-made preserves, honey, and artisanal bread",
                    wine_pairing: "Vintage Port",
                    image: {
                        url: "static/images/cheese-board.webp"
                    }
                }
            ]
        },
        {
            name: "Main Courses",
            items: [
                {
                    name: "Aged Prime Ribeye",
                    description: "21-day aged ribeye with roasted bone marrow, wild mushrooms, and red wine reduction",
                    wine_pairing: "Cabernet Sauvignon",
                    image: {
                        url: "static/images/ribeye.webp"
                    }
                },
                {
                    name: "Pan-Roasted Duck Breast",
                    description: "Maple Leaf Farms duck breast, cherry gastrique, confit fingerling potatoes",
                    wine_pairing: "Pinot Noir",
                    image: {
                        url: "static/images/duck.webp"
                    }
                },
                {
                    name: "Mediterranean Sea Bass",
                    description: "Line-caught sea bass, saffron risotto, grilled asparagus, lemon beurre blanc",
                    wine_pairing: "Sancerre",
                    image: {
                        url: "static/images/sea-bass.webp"
                    }
                }
            ]
        }
    ];
    
    // Function to populate the menu preview section
    function populateMenuPreview() {
        // Find the container for menu categories
        const menuContainer = document.querySelector('.menu-categories');
        if (!menuContainer) return;
    
        // Create HTML for each menu category
        let menuHTML = '';
    
        // Iterate through each category in our menu data
        siteData.menu_categories.forEach(category => {
            // Add the category header if it doesn't exist
            const existingHeaders = Array.from(document.querySelectorAll('h2'));
            const categoryHeaderExists = existingHeaders.some(
                (header) => header.textContent.trim() === category.name
            );

            if (!categoryHeaderExists) {
                menuHTML += `<h2>${category.name}</h2>`;
            }
    
            // Add items from this category
            category.items.forEach(item => {
                menuHTML += `
                    <div class="category-card">
                        <img src="${item.image.url}" alt="${item.name}">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <p class="wine-pairing">Wine Pairing: ${item.wine_pairing}</p>
                        <a href="/menu.html" class="view-more">View Menu</a>
                    </div>
                `;
            });
        });
    
        // Insert the HTML into the container
        menuContainer.innerHTML = menuHTML;
    
        // Add fade-in animation to each card
        menuContainer.querySelectorAll('.category-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 200); // Stagger the animations
        });
    }
    function populateFeaturedDishes() {
        // Find the container for featured dishes
        const featuredContainer = document.querySelector('.featured-dishes');
        if (!featuredContainer) return;
    
        // Get the featured dishes data from our siteData
        const { featured_dishes } = siteData;
    
        // Create HTML for each featured dish
        const dishesHTML = featured_dishes.map(dish => `
            <div class="dish-card">
                <img src="${dish.image.url}" alt="${dish.name}">
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
                <span class="price">$${dish.price}</span>
            </div>
        `).join('');
    
        // Insert the HTML into the container
        featuredContainer.innerHTML = dishesHTML;
    
        // Add fade-in animation class to each card
        featuredContainer.querySelectorAll('.dish-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 200); // Stagger the animations
        });
    }
    
    
    // Function to replace template URLs
    function replaceTemplateUrls() {
        document.querySelectorAll('a[href^="{% url"]').forEach(link => {
            const urlName = link.getAttribute('href').match(/'([^']+)'/)[1];
            link.href = siteData.urls[urlName] || '#';
        });
    }
    
    // Function to format date
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    
    // Function to populate events section
    function populateEvents() {
        const eventsContainer = document.querySelector('.events-container');
        if (eventsContainer) {
            eventsContainer.innerHTML = siteData.events.map(event => `
                <div class="event-card">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                    <span>${formatDate(event.date)}</span>
                </div>
            `).join('');
        }
    }
    
    // Function to populate reviews section
    function populateReviews() {
        const reviewsContainer = document.querySelector('.reviews-container');
        if (reviewsContainer) {
            reviewsContainer.innerHTML = siteData.customer_reviews.map(review => `
                <div class="review-card">
                    <p>"${review.content}"</p>
                    <span>- ${review.author}</span>
                    <div class="rating">
                        ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Function to populate team section
    function populateTeam() {
        const teamContainer = document.querySelector('.team-container');
        if (teamContainer) {
            teamContainer.innerHTML = siteData.team_members.map(member => `
                <div class="team-card">
                    <img src="${member.photo.url}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.role}</p>
                </div>
            `).join('');
        }
    }
    
    // Function to populate FAQs section
    function populateFAQs() {
        const faqContainer = document.querySelector('.faq-container');
        if (faqContainer) {
            faqContainer.innerHTML = siteData.faqs.map(faq => `
                <div class="faq-item">
                    <h3>${faq.question}</h3>
                    <p>${faq.answer}</p>
                </div>
            `).join('');
        }
    }
    
    // Initialize all replacements when DOM is loaded
    replaceTemplateUrls();
    populateEvents();
    populateReviews();
    populateTeam();
    populateFAQs();
    populateFeaturedDishes();
    populateMenuPreview();
    
});
// Add these CSS animations to your existing CSS file
const additionalCSS = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }

    .shake {
        animation: shake 0.5s ease-in-out;
    }

    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }

    .bounce {
        animation: bounce 0.5s ease-in-out;
    }

    .flying-element {
        position: fixed;
        width: 20px;
        height: 20px;
        background: var(--secondary-color);
        border-radius: 50%;
        pointer-events: none;
        transition: all 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    }
`;