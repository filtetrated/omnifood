// Main JavaScript for animations and interactions
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navigation = document.querySelector('.navigation');
    const navbar = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navigation.classList.toggle('active');
        navbar.style.transform = translateY(0);
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