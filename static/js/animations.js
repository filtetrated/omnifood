// // Intersection Observer for scroll animations
// const animationObserver = new IntersectionObserver(
//     (entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('animate', entry.target.dataset.animation);
//                 if (!entry.target.dataset.persist) {
//                     animationObserver.unobserve(entry.target);
//                 }
//             } else if (entry.target.dataset.persist) {
//                 entry.target.classList.remove('animate', entry.target.dataset.animation);
//             }
//         });
//     },
//     { threshold: 0.2 }
// );

// // Initialize animations
// function initAnimations() {
//     // Animate elements with data-animation attribute
//     document.querySelectorAll('[data-animation]').forEach(el => {
//         animationObserver.observe(el);
//     });

//     // Stagger children animations
//     document.querySelectorAll('[data-stagger]').forEach(parent => {
//         const children = parent.children;
//         const delay = parseInt(parent.dataset.stagger) || 100;
//         Array.from(children).forEach((child, index) => {
//             child.style.animationDelay = `${index * delay}ms`;
//         });
//     });

//     // Initialize parallax elements
//     initParallax();
// }

// // Parallax effect
// function initParallax() {
//     const parallaxElements = document.querySelectorAll('[data-parallax]');
    
//     window.addEventListener('scroll', () => {
//         const scrolled = window.pageYOffset;
        
//         parallaxElements.forEach(el => {
//             const speed = el.dataset.parallax || 0.5;
//             el.style.transform = `translateY(${scrolled * speed}px)`;
//         });
//     });
// }

// // Smooth reveal animation for menu items
// function animateMenuItems() {
//     const menuItems = document.querySelectorAll('.menu-item');
    
//     menuItems.forEach((item, index) => {
//         item.style.opacity = '0';
//         item.style.transform = 'translateY(20px)';
        
//         setTimeout(() => {
//             item.style.transition = 'all 0.6s ease';
//             item.style.opacity = '1';
//             item.style.transform = 'translateY(0)';
//         }, index * 100);
//     });
// }

// // Hero section text animation
// function animateHeroText() {
//     const heroText = document.querySelector('.hero-content');
//     if (!heroText) return;

//     const text = heroText.textContent;
//     heroText.textContent = '';
    
//     [...text].forEach((char, index) => {
//         const span = document.createElement('span');
//         span.textContent = char;
//         span.style.animationDelay = `${index * 50}ms`;
//         span.classList.add('fade-in');
//         heroText.appendChild(span);
//     });
// }

// // Image reveal animation
// function animateImageReveal() {
//     const images = document.querySelectorAll('.reveal-image');
    
//     images.forEach(img => {
//         const wrapper = document.createElement('div');
//         wrapper.classList.add('image-reveal-wrapper');
        
//         img.parentNode.insertBefore(wrapper, img);
//         wrapper.appendChild(img);
        
//         wrapper.addEventListener('mouseenter', () => {
//             wrapper.classList.add('reveal');
//         });
//     });
// }

// // Counter animation
// function animateCounter(element, target, duration = 2000) {
//     const start = parseInt(element.innerText) || 0;
//     const increment = (target - start) / (duration / 16);
//     let current = start;
    
//     const updateCounter = () => {
//         current += increment;
//         element.innerText = Math.round(current);
        
//         if (increment > 0 ? current < target : current > target) {
//             requestAnimationFrame(updateCounter);
//         } else {
//             element.innerText = target;
//         }
//     };
    
//     requestAnimationFrame(updateCounter);
// }

// // Button hover effect
// function initButtonAnimations() {
//     const buttons = document.querySelectorAll('.animated-button');
    
//     buttons.forEach(button => {
//         button.addEventListener('mouseenter', (e) => {
//             const x = e.clientX - button.getBoundingClientRect().left;
//             const y = e.clientY - button.getBoundingClientRect().top;
            
//             const ripple = document.createElement('span');
//             ripple.classList.add('ripple');
//             ripple.style.left = `${x}px`;
//             ripple.style.top = `${y}px`;
            
//             button.appendChild(ripple);
            
//             setTimeout(() => ripple.remove(), 1000);
//         });
//     });
// }

// // Initialize all animations when DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     initAnimations();
//     animateHeroText();
//     animateImageReveal();
//     initButtonAnimations();
    
//     // Initialize counters when they come into view
//     const counterObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const target = parseInt(entry.target.dataset.target);
//                 animateCounter(entry.target, target);
//                 counterObserver.unobserve(entry.target);
//             }
//         });
//     });
    
//     document.querySelectorAll('[data-counter]').forEach(counter => {
//         counterObserver.observe(counter);
//     });
// });

// // Export functions for use in main.js
// export {
//     initAnimations,
//     animateMenuItems,
//     animateCounter,
//     animateImageReveal
// };
// Intersection Observer for scroll animations
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate', entry.target.dataset.animation);
            if (!entry.target.dataset.persist) {
                animationObserver.unobserve(entry.target);
            }
        } else if (entry.target.dataset.persist) {
            entry.target.classList.remove('animate', entry.target.dataset.animation);
        }
    });
}, { threshold: 0.2 });

// Initialize animations
function initAnimations() {
    // Animate elements with data-animation attribute
    document.querySelectorAll('[data-animation]').forEach(el => {
        animationObserver.observe(el);
    });

    // Stagger children animations
    document.querySelectorAll('[data-stagger]').forEach(parent => {
        const children = parent.children;
        const delay = parseInt(parent.dataset.stagger) || 100;
        Array.from(children).forEach((child, index) => {
            child.style.animationDelay = `${index * delay}ms`;
        });
    });

    // Initialize parallax elements
    initParallax();
}

// Parallax effect
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(el => {
            const speed = el.dataset.parallax || 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Smooth reveal animation for menu items
function animateMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Hero section text animation
function animateHeroText() {
    const heroText = document.querySelector('.hero-content');
    if (!heroText) return;
    const text = heroText.textContent;
    heroText.textContent = '';
    [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${index * 50}ms`;
        span.classList.add('fade-in');
        heroText.appendChild(span);
    });
}

// Image reveal animation
function animateImageReveal() {
    const images = document.querySelectorAll('.reveal-image');
    images.forEach(img => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('image-reveal-wrapper');
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);
        wrapper.addEventListener('mouseenter', () => {
            wrapper.classList.add('reveal');
        });
    });
}

// Counter animation
function animateCounter(element, target, duration = 2000) {
    const start = parseInt(element.innerText) || 0;
    const increment = (target - start) / (duration / 16);
    let current = start;
    const updateCounter = () => {
        current += increment;
        element.innerText = Math.round(current);
        if (increment > 0 ? current < target : current > target) {
            requestAnimationFrame(updateCounter);
        } else {
            element.innerText = target;
        }
    };
    requestAnimationFrame(updateCounter);
}

// Button hover effect
function initButtonAnimations() {
    const buttons = document.querySelectorAll('.animated-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            const x = e.clientX - button.getBoundingClientRect().left;
            const y = e.clientY - button.getBoundingClientRect().top;
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            button.appendChild(ripple);
            setTimeout(() => ripple.remove(), 1000);
        });
    });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    animateHeroText();
    animateImageReveal();
    initButtonAnimations();

    // Initialize counters when they come into view
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('[data-counter]').forEach(counter => {
        counterObserver.observe(counter);
    });
});

// Export functions for use in main.js
export { initAnimations, animateMenuItems, animateCounter, animateImageReveal };
