// ===========================
// NAVBAR — scroll effect
// ===========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===========================
// HAMBURGER MENU
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
    });
});

// ===========================
// BACK TO TOP BUTTON
// ===========================
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// ===========================
// SCROLL REVEAL
// ===========================
const revealElements = document.querySelectorAll(
    '.skill-category, .project-card, .timeline-item, .about-grid, .contact-grid, .section-title, .section-subtitle'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // stagger delay
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// ===========================
// ACTIVE NAV LINK on scroll
// ===========================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#6c63ff';
        }
    });
});

// ===========================
// CONTACT FORM
// ===========================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const original = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    btn.style.background = 'linear-gradient(135deg, #00c853, #00e676)';

    setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
        contactForm.reset();
    }, 3000);
});

// ===========================
// TYPING EFFECT — Hero title
// ===========================
const titles = [
    'Full Stack Developer',
    'Python Enthusiast',
    'Django Developer',
    'Problem Solver'
];

const heroTitle = document.querySelector('.hero-title');
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const current = titles[titleIndex];

    if (!isDeleting) {
        heroTitle.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    } else {
        heroTitle.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

// Start typing effect after a short delay
setTimeout(typeEffect, 1500);
