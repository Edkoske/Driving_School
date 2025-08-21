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
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Close mobile menu if open
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
            
            // Get form data
            const formData = new FormData(event.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const course = formData.get('course');
            const experience = formData.get('experience');
            const message = formData.get('message');
            
            // Create email content
            const subject = `New Driving Lesson Booking Request - ${course}`;
            const body = `New lesson booking request from Open Road Driving School website:

Student Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Course Interest: ${course}
- Driving Experience: ${experience}
- Additional Information: ${message}

Please contact this student to schedule their lesson.

Best regards,
Open Road Driving School Website`;

            // Create mailto link
            const mailtoLink = `mailto:edisonkipkemoi319@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert(`Thank you ${name}! Your booking request for ${course} has been prepared. Your email client should open now to send the request to our team. We'll contact you at ${phone} within 24 hours to schedule your lesson! 🚗`);
            
            // Reset form
            event.target.reset();
        }

        // Animate elements on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.service-card, .feature-card, .instructor-card');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
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
                this.style.transform = 'translateY(-10px) scale(1)';
            });
        });

        // Course selection helper
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.closest('button')) {
                    const courseName = this.querySelector('h3').textContent;
                    const coursePrice = this.querySelector('.price-tag').textContent;
                    alert(`${courseName}\n${coursePrice}\n\nThis comprehensive course includes all listed features. Contact us to book your free consultation and get started! Our instructors will assess your current skill level and create a personalized learning plan.`);
                }
            });
        });

        // Auto-update current year in footer
        document.addEventListener('DOMContentLoaded', function() {
            const currentYear = new Date().getFullYear();
            document.querySelector('.footer-bottom p').innerHTML = 
                `&copy; ${currentYear} Open Road Driving School. All rights reserved. | Privacy Policy | Terms of Service`;
        });

        // Add floating animation to hero elements
        function addFloatingAnimation() {
            const heroContent = document.querySelector('.hero-content');
            let position = 0;
            
            setInterval(() => {
                position += 0.5;
                heroContent.style.transform = `translateY(${Math.sin(position * 0.01) * 3}px)`;
            }, 50);
        }

        // Initialize animations when page loads
        window.addEventListener('load', function() {
            addFloatingAnimation();
            animateOnScroll();
            
            // Show welcome message
            setTimeout(() => {
                console.log('🚗 Welcome to Open Road Driving School! Ready to start your driving journey?');
            }, 2000);
        });

        // Contact form validation
        document.getElementById('name').addEventListener('input', function() {
            if (this.value.length < 2) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '#10b981';
            }
        });

        document.getElementById('email').addEventListener('input', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.value)) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '#10b981';
            }
        });

        document.getElementById('phone').addEventListener('input', function() {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(this.value.replace(/\D/g, ''))) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '#10b981';
            }
        });

        // Course recommendation system
        function recommendCourse() {
            const experience = document.getElementById('experience').value;
            const courseSelect = document.getElementById('course');
            
            if (experience === 'none') {
                courseSelect.value = 'beginner';
                alert('Based on your experience level, we recommend our Beginner Driver Course. This comprehensive program will teach you everything from the basics to road test preparation!');
            } else if (experience === 'some') {
                courseSelect.value = 'intensive';
                alert('With some practice under your belt, our Intensive Driving Course could be perfect for you. Fast-track your learning and get road-ready quickly!');
            } else if (experience === 'licensed') {
                courseSelect.value = 'refresher';
                alert('Our Refresher Course is ideal for licensed drivers who want to rebuild confidence and update their skills. Flexible scheduling available!');
            } else if (experience === 'experienced') {
                courseSelect.value = 'advanced';
                alert('As an experienced driver, you might enjoy our Advanced Driving course to master defensive techniques and challenging conditions!');
            }
        }

        document.getElementById('experience').addEventListener('change', recommendCourse);

        // Booking system simulation
        function simulateBooking(courseName) {
            const availableTimes = [
                'Tomorrow at 10:00 AM',
                'Thursday at 2:00 PM', 
                'Friday at 9:00 AM',
                'Saturday at 11:00 AM',
                'Monday at 3:00 PM'
            ];
            
            const randomTime = availableTimes[Math.floor(Math.random() * availableTimes.length)];
            
            if (confirm(`Great! We have availability for ${courseName}.\n\nNext available slot: ${randomTime}\n\nWould you like to book this time slot? (This is a demo - actual booking requires calling our office)`)) {
                alert(`Excellent! Your ${courseName} lesson is tentatively booked for ${randomTime}.\n\nPlease call +254732157 to confirm your booking and complete the registration process. We'll send you a confirmation email with pickup details and what to bring to your first lesson.`);
            }
        }

        // Add quick booking buttons
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.service-card').forEach(card => {
                const courseName = card.querySelector('h3').textContent;
                const bookButton = document.createElement('button');
                bookButton.textContent = 'Quick Book';
                bookButton.className = 'submit-btn';
                bookButton.style.marginTop = '1rem';
                bookButton.style.width = '100%';
                bookButton.onclick = () => simulateBooking(courseName);
                card.appendChild(bookButton);
            });
        });

(function(){function c(){
    var b=a.contentDocument||a.contentWindow.document;if(b)
        {var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9721a476c2d50f17',t:'MTc1NTY5MDMwNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
