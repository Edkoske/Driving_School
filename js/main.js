// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        document.getElementById('navMenu').classList.remove('active');
    });
});

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// Form submission handler
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const course = formData.get('course');
    const experience = formData.get('experience');
    const message = formData.get('message');

    const subject = `New Driving Lesson Booking Request - ${course}`;
    const body = `New lesson booking request from Open Road Driving School:

- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Course: ${course}
- Experience: ${experience}
- Message: ${message}`;

    const mailtoLink = `mailto:edisonkipkemoi319@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    alert(`Thank you ${name}! Your booking for ${course} is prepared. Check your email client to send it.`);

    event.target.reset();
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .feature-card, .instructor-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 150) {
            element.classList.add('fade-in');
        }
    });
}
window.addEventListener('scroll', animateOnScroll);

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Course selection helper
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!e.target.closest('button')) {
            const courseName = this.querySelector('h3').textContent;
            const coursePrice = this.querySelector('.price-tag').textContent;
            alert(`${courseName}\n${coursePrice}\n\nIncludes all listed features. Contact us to book!`);
        }
    });
});

// Auto-update year
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.footer-bottom p').innerHTML = 
        `&copy; ${new Date().getFullYear()} Open Road Driving School. All rights reserved. | Privacy Policy | Terms`;
});

// Floating hero animation
function addFloatingAnimation() {
    const heroContent = document.querySelector('.hero-content');
    let position = 0;
    setInterval(() => {
        position += 0.5;
        heroContent.style.transform = `translateY(${Math.sin(position * 0.01) * 3}px)`;
    }, 50);
}
window.addEventListener('load', () => {
    addFloatingAnimation();
    animateOnScroll();
});

// Input validation
document.getElementById('name').addEventListener('input', function() {
    this.style.borderColor = this.value.length < 2 ? '#ef4444' : '#10b981';
});
document.getElementById('email').addEventListener('input', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.style.borderColor = emailRegex.test(this.value) ? '#10b981' : '#ef4444';
});
document.getElementById('phone').addEventListener('input', function() {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    this.style.borderColor = phoneRegex.test(this.value.replace(/\D/g, '')) ? '#10b981' : '#ef4444';
});

// Course recommendation
function recommendCourse() {
    const experience = document.getElementById('experience').value;
    const courseSelect = document.getElementById('course');
    if (experience === 'none') {
        courseSelect.value = 'beginner';
        alert('We recommend the Beginner Driver Course.');
    } else if (experience === 'some') {
        courseSelect.value = 'intensive';
        alert('Try the Intensive Driving Course.');
    } else if (experience === 'licensed') {
        courseSelect.value = 'refresher';
        alert('Consider the Refresher Course.');
    } else if (experience === 'experienced') {
        courseSelect.value = 'advanced';
        alert('Advanced Driving course suits you.');
    }
}
document.getElementById('experience').addEventListener('change', recommendCourse);

// Booking simulation
function simulateBooking(courseName) {
    const slots = ['Tomorrow 10 AM','Thu 2 PM','Fri 9 AM','Sat 11 AM','Mon 3 PM'];
    const randomTime = slots[Math.floor(Math.random() * slots.length)];
    if (confirm(`Book ${courseName} at ${randomTime}?`)) {
        alert(`Your ${courseName} is tentatively booked for ${randomTime}. Please call +254732157 to confirm.`);
    }
}

// Add Quick Book buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.service-card').forEach(card => {
        const courseName = card.querySelector('h3').textContent;
        const btn = document.createElement('button');
        btn.textContent = 'Quick Book';
        btn.className = 'submit-btn';
        btn.style.marginTop = '1rem';
        btn.style.width = '100%';
        btn.onclick = () => simulateBooking(courseName);
        card.appendChild(btn);
    });
});
