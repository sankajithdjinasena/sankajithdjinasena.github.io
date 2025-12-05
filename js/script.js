// DOM Elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const header = document.querySelector('.header');

// Typed.js initialization
const typed = new Typed('.multiple-text', {
    strings: ['Data Scientist', 'ML Engineer', 'AI Developer', 'Full-Stack Developer'],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true
});

// Toggle menu
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
};

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// Sticky header
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Scroll sections active link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 200;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Scroll reveal animations
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        
        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Initial call to check for elements in view
revealOnScroll();

// Form submission handling
const contactForm = document.querySelector('.contact form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('input[type="submit"]');
        const originalText = submitBtn.value;
        
        // Show loading state
        submitBtn.value = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Here you would normally make an API call
            // For demo, we'll simulate a delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Message sent successfully!';
            successMessage.style.cssText = `
                background: linear-gradient(135deg, #10b981, #3b82f6);
                color: white;
                padding: 1.5rem;
                border-radius: 0.5rem;
                margin-top: 2rem;
                text-align: center;
                animation: fadeIn 0.5s ease;
            `;
            
            contactForm.appendChild(successMessage);
            
            // Reset form
            contactForm.reset();
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.style.animation = 'fadeOut 0.5s ease';
                setTimeout(() => {
                    successMessage.remove();
                }, 500);
            }, 3000);
            
        } catch (error) {
            console.error('Error sending message:', error);
            alert('There was an error sending your message. Please try again.');
        } finally {
            submitBtn.value = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Add fadeOut animation for success message
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Card hover effects with animation
const cards = document.querySelectorAll('.experience-box, .education-box, .portfolio-box, .technical-skill-box');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    });
});

// Initialize ScrollReveal
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });
ScrollReveal().reveal('.experience-box, .education-box, .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.technical-skill-box', { 
    origin: 'bottom',
    interval: 200 
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Back to top button behavior
const backToTop = document.querySelector('.footer-iconTop a');
if (backToTop) {
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', () => {
    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    }
});

// Add loading animation to page elements
document.addEventListener('DOMContentLoaded', () => {
    // Add reveal class to elements that should animate on scroll
    const elementsToReveal = document.querySelectorAll(
        '.home-content, .about-img, .about-content, .heading, ' +
        '.experience-box, .education-box, .portfolio-box, ' +
        '.technical-skill-box, .contact form'
    );
    
    elementsToReveal.forEach(element => {
        element.classList.add('reveal');
    });
    
    // Trigger initial reveal check
    setTimeout(revealOnScroll, 100);
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Escape key closes menu
    if (e.key === 'Escape' && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

// Add focus styles for accessibility
document.addEventListener('focusin', (e) => {
    if (e.target.matches('a, button, input, textarea')) {
        e.target.style.outline = '2px solid var(--main-color)';
        e.target.style.outlineOffset = '2px';
    }
});

document.addEventListener('focusout', (e) => {
    if (e.target.matches('a, button, input, textarea')) {
        e.target.style.outline = 'none';
    }
});