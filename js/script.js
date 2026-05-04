// DOM Elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const header = document.querySelector('.header');

// Typed.js initialization
const typed = new Typed('.multiple-text', {
    strings: ['Data Scientist', 'ML Engineer', 'AI Developer'],
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

const certs = document.querySelectorAll(".certification-box");
const seeMoreBtn = document.getElementById("seeMoreBtn");
const seeLessBtn = document.getElementById("seeLessBtn");

const step = 6;
let visibleCount = step;

// Initial state: hide items beyond the 6th one
certs.forEach((cert, index) => {
    if (index >= visibleCount) {
        cert.style.display = "none";
    }
});

// Check if there are more than 6 certificates
if (certs.length <= step) {
    // Hide both buttons if there are 6 or fewer certificates
    if (seeMoreBtn) seeMoreBtn.style.display = "none";
    if (seeLessBtn) seeLessBtn.style.display = "none";
} else {
    // Show "See More" and hide "See Less" initially if there are more than 6
    if (seeMoreBtn) seeMoreBtn.style.display = "inline-block";
    if (seeLessBtn) seeLessBtn.style.display = "none";
}

// See More Button Logic
if (seeMoreBtn) {
    seeMoreBtn.addEventListener("click", () => {
        let shown = 0;

        for (let i = visibleCount; i < certs.length && shown < step; i++) {
            certs[i].style.display = "block";
            shown++;
        }

        visibleCount += shown;

        // When everything is visible
        if (visibleCount >= certs.length) {
            seeMoreBtn.style.display = "none";
            if (seeLessBtn) seeLessBtn.style.display = "inline-block";
        }
    });
}

// See Less Button Logic
if (seeLessBtn) {
    seeLessBtn.addEventListener("click", () => {
        visibleCount = step;

        certs.forEach((cert, index) => {
            cert.style.display = index < step ? "block" : "none";
        });

        seeLessBtn.style.display = "none";
        if (seeMoreBtn) seeMoreBtn.style.display = "inline-block";
    });
}


const certs2 = document.querySelectorAll(".achievement-box");
const seeMoreBtn2 = document.getElementById("seeMoreBtn2");
const seeLessBtn2 = document.getElementById("seeLessBtn2");

let step2 = 6;
let visibleCount2 = step2; // Fixed typo: changed 'step' to 'step2'

// Initial state: hide items beyond the 6th one
certs2.forEach((cert, index) => {
    if (index >= visibleCount2) {
        cert.style.display = "none";
    }
});

// Check if there are more than 6 certificates
if (certs2.length <= step2) {
    // Hide both buttons if there are 6 or fewer certificates
    if (seeMoreBtn2) seeMoreBtn2.style.display = "none";
    if (seeLessBtn2) seeLessBtn2.style.display = "none";
} else {
    // Show "See More" and hide "See Less" initially if there are more than 6
    if (seeMoreBtn2) seeMoreBtn2.style.display = "inline-block"; 
    if (seeLessBtn2) seeLessBtn2.style.display = "none";
}

// See More Button Logic
if (seeMoreBtn2) {
    seeMoreBtn2.addEventListener("click", () => {
        let shown = 0;

        for (let i = visibleCount2; i < certs2.length && shown < step2; i++) {
            certs2[i].style.display = "block";
            shown++;
        }

        visibleCount2 += shown; // Fixed typo: changed 'visibleCount' to 'visibleCount2'

        // When everything becomes visible, swap buttons
        if (visibleCount2 >= certs2.length) {
            seeMoreBtn2.style.display = "none";
            seeLessBtn2.style.display = "inline-block";
        }
    });
}

// See Less Button Logic
if (seeLessBtn2) {
    seeLessBtn2.addEventListener("click", () => {
        visibleCount2 = step2;

        certs2.forEach((cert, index) => {
            cert.style.display = index < step2 ? "block" : "none";
        });

        seeLessBtn2.style.display = "none";
        seeMoreBtn2.style.display = "inline-block";
    });
}

const certs3 = document.querySelectorAll(".volunteering-box");
const seeMoreBtn3 = document.getElementById("seeMoreBtn3");
const seeLessBtn3 = document.getElementById("seeLessBtn3");

let step3 = 6;
let visibleCount3 = step3;

// Initial state: hide items beyond the 6th one
certs3.forEach((cert, index) => {
    if (index >= visibleCount3) {
        cert.style.display = "none";
    }
});

// Check if there are more than 6 items
if (certs3.length <= step3) {
    if (seeMoreBtn3) seeMoreBtn3.style.display = "none";
    if (seeLessBtn3) seeLessBtn3.style.display = "none";
} else {
    if (seeMoreBtn3) seeMoreBtn3.style.display = "inline-block";
    if (seeLessBtn3) seeLessBtn3.style.display = "none";
}

// See More Button Logic
if (seeMoreBtn3) {
    seeMoreBtn3.addEventListener("click", () => {
        let shown = 0;

        for (let i = visibleCount3; i < certs3.length && shown < step3; i++) {
            certs3[i].style.display = "block";
            shown++;
        }

        visibleCount3 += shown;

        if (visibleCount3 >= certs3.length) {
            seeMoreBtn3.style.display = "none";
            seeLessBtn3.style.display = "inline-block";
        }
    });
}

// See Less Button Logic
if (seeLessBtn3) {
    seeLessBtn3.addEventListener("click", () => {
        certs3.forEach((cert, index) => {
            if (index >= step3) {
                cert.style.display = "none";
            }
        });

        visibleCount3 = step3;
        seeLessBtn3.style.display = "none";
        seeMoreBtn3.style.display = "inline-block";
    });
}

// See Less Button Logic
if (seeLessBtn3) {
    seeLessBtn3.addEventListener("click", () => {
        visibleCount3 = step3;

        certs3.forEach((cert, index) => {
            cert.style.display = index < step3 ? "block" : "none";
        });

        seeLessBtn3.style.display = "none";
        seeMoreBtn3.style.display = "inline-block";
    });
}

// ===========================
// DATA SCIENCE CANVAS ANIMATION
// ===========================
(function () {
  const canvas = document.getElementById('ds-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Neural network nodes
  const layers = [3, 5, 5, 3];
  let nodes = [];
  let connections = [];

  function buildNetwork() {
    nodes = [];
    connections = [];
    const W = canvas.width, H = canvas.height;
    const layerGap = W / (layers.length + 1);

    layers.forEach((count, li) => {
      const x = layerGap * (li + 1);
      const nodeGap = H / (count + 1);
      for (let ni = 0; ni < count; ni++) {
        nodes.push({
          x, y: nodeGap * (ni + 1),
          layer: li,
          index: ni,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03
        });
      }
    });

    // Build connections
    for (let li = 0; li < layers.length - 1; li++) {
      const fromNodes = nodes.filter(n => n.layer === li);
      const toNodes = nodes.filter(n => n.layer === li + 1);
      fromNodes.forEach(from => {
        toNodes.forEach(to => {
          connections.push({
            from, to,
            weight: Math.random(),
            signal: Math.random(),
            signalSpeed: 0.005 + Math.random() * 0.01,
            active: Math.random() > 0.3
          });
        });
      });
    }
  }

  buildNetwork();
  window.addEventListener('resize', buildNetwork);

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    connections.forEach(conn => {
      if (!conn.active) return;
      const alpha = 0.08 + conn.weight * 0.15;
      ctx.beginPath();
      ctx.moveTo(conn.from.x, conn.from.y);
      ctx.lineTo(conn.to.x, conn.to.y);
      ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Animated signal dot
      conn.signal += conn.signalSpeed;
      if (conn.signal > 1) conn.signal = 0;
      const sx = conn.from.x + (conn.to.x - conn.from.x) * conn.signal;
      const sy = conn.from.y + (conn.to.y - conn.from.y) * conn.signal;
      ctx.beginPath();
      ctx.arc(sx, sy, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 255, 136, 0.85)`;
      ctx.fill();
    });

    // Draw nodes
    nodes.forEach(node => {
      node.pulse += node.pulseSpeed;
      const glow = 0.5 + 0.5 * Math.sin(node.pulse);

      // Outer glow ring
      const grad = ctx.createRadialGradient(node.x, node.y, 2, node.x, node.y, 14);
      grad.addColorStop(0, `rgba(0, 212, 255, ${0.2 * glow})`);
      grad.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(node.x, node.y, 14, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Core node
      ctx.beginPath();
      ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = node.layer === 0 || node.layer === layers.length - 1
        ? `rgba(0, 255, 136, ${0.7 + 0.3 * glow})`
        : `rgba(0, 212, 255, ${0.7 + 0.3 * glow})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,255,255,0.4)`;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    requestAnimationFrame(draw);
  }

  draw();

  // Animated counters
  document.querySelectorAll('.ds-stat-value').forEach(el => {
    const target = parseFloat(el.dataset.target);
    const isDecimal = target < 1;
    const isLarge = target > 100;
    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let step = 0;

    const timer = setInterval(() => {
      current += increment;
      step++;
      if (step >= steps) { current = target; clearInterval(timer); }
      el.textContent = isDecimal
        ? current.toFixed(3)
        : isLarge
        ? Math.round(current).toLocaleString()
        : current.toFixed(1);
    }, duration / steps);
  });
})();

// Slider + Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxDots = document.getElementById('lightboxDots');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(images, index) {
  lightboxImages = images;
  lightboxIndex = index;

  lightboxDots.innerHTML = '';
  images.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === index) dot.classList.add('active');
    dot.addEventListener('click', () => updateLightbox(i));
    lightboxDots.appendChild(dot);
  });

  updateLightbox(lightboxIndex);
  lightbox.classList.add('active');
  lightboxOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateLightbox(index) {
  lightboxIndex = (index + lightboxImages.length) % lightboxImages.length;
  lightboxImg.src = lightboxImages[lightboxIndex].src;
  lightboxImg.alt = lightboxImages[lightboxIndex].alt;
  lightboxDots.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === lightboxIndex);
  });
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightboxOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => updateLightbox(lightboxIndex - 1));
lightboxNext.addEventListener('click', () => updateLightbox(lightboxIndex + 1));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') updateLightbox(lightboxIndex - 1);
  if (e.key === 'ArrowRight') updateLightbox(lightboxIndex + 1);
});

// Sliders (single loop — handles both slider + lightbox)
document.querySelectorAll('[data-slider]').forEach(slider => {
  const track = slider.querySelector('.slider-track');
  const imgs = [...track.querySelectorAll('img')];
  const dotsContainer = slider.querySelector('.slider-dots');
  let current = 0;

  imgs.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.slider-dot');

  function goTo(index) {
    current = (index + imgs.length) % imgs.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[current].classList.add('active');
  }

  slider.querySelector('.prev').addEventListener('click', () => goTo(current - 1));
  slider.querySelector('.next').addEventListener('click', () => goTo(current + 1));

  imgs.forEach((img, i) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(imgs, i));
  });
});
