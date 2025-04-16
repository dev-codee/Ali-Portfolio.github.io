// Custom Cursor
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(function() {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 50);
    });
    
    document.addEventListener('mousedown', function() {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        cursorFollower.style.width = '35px';
        cursorFollower.style.height = '35px';
    });
    
    document.addEventListener('mouseup', function() {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
    });
    
    // Hover effect on links
    const allLinks = document.querySelectorAll('a, button, .service-card, .project-card, .about-card, .timeline-item');
    
    allLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            cursor.style.width = '0px';
            cursor.style.height = '0px';
            cursorFollower.style.width = '50px';
            cursorFollower.style.height = '50px';
            cursorFollower.style.borderColor = 'var(--primary-color-alt)';
        });
        
        link.addEventListener('mouseleave', function() {
            cursor.style.width = '10px';
            cursor.style.height = '10px';
            cursorFollower.style.width = '40px';
            cursorFollower.style.height = '40px';
            cursorFollower.style.borderColor = 'var(--primary-color)';
        });
    });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
});

// Header Scroll Effect
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Typewriter Effect
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.typed-text')) {
        new Typed('.typed-text', {
            strings: ['Web Developer', 'Software Engineer', 'ML Enthusiast'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }
});

// Skills Progress Animation
document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.querySelector('#skills');
    
    function animateSkills() {
        const progress = document.querySelectorAll('.progress');
        
        progress.forEach(item => {
            const width = parseFloat(item.style.width);
            item.style.width = '0%';
            
            setTimeout(() => {
                item.style.width = width + '%';
            }, 200);
        });
    }
    
    // Trigger on scroll
    let hasAnimated = false;
    
    window.addEventListener('scroll', function() {
        const sectionTop = skillsSection.offsetTop;
        const sectionHeight = skillsSection.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        
        if (scrollY > (sectionTop - windowHeight / 1.5) && !hasAnimated) {
            animateSkills();
            hasAnimated = true;
        }
    });
});

// Filter Projects
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter projects
            projects.forEach(project => {
                if (filter === 'all') {
                    project.style.display = 'block';
                    
                    setTimeout(() => {
                        project.style.opacity = '1';
                        project.style.transform = 'scale(1)';
                    }, 200);
                } else if (project.getAttribute('data-category') === filter) {
                    project.style.display = 'block';
                    
                    setTimeout(() => {
                        project.style.opacity = '1';
                        project.style.transform = 'scale(1)';
                    }, 200);
                } else {
                    project.style.opacity = '0';
                    project.style.transform = 'scale(0.8)';
                    
                    setTimeout(() => {
                        project.style.display = 'none';
                    }, 500);
                }
            });
        });
    });
});

// Timeline Tabs
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId + '-content').classList.add('active');
        });
    });
});

// Form Label Animation
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentNode.classList.remove('focused');
            }
        });
        
        // Check on load if the input has value
        if (input.value !== '') {
            input.parentNode.classList.add('focused');
        }
    });
});

// Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // You would typically send this data to a server here
            console.log('Form submitted with:', { name, email, subject, message });
            
            // Show success message or handle as needed
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            form.reset();
        });
    }
});

// Scroll to section on click
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetPosition = document.querySelector(targetId).offsetTop - 100;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});

// Scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
});

// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    // Check if GSAP is loaded
    if (typeof gsap !== 'undefined') {
        // Hero section animations
        gsap.from('.hero-content .subtitle', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.2
        });
        
        gsap.from('.hero-content .title', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.4
        });
        
        gsap.from('.hero-content .typewriter', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.6
        });
        
        gsap.from('.hero-content .description', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.8
        });
        
        gsap.from('.cta-buttons', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1
        });
        
        gsap.from('.social-links', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1.2
        });
        
        gsap.from('.image-wrapper', {
            opacity: 0,
            scale: 0.8,
            duration: 1.5,
            delay: 0.5
        });
        
        gsap.from('.shape-1, .shape-2', {
            opacity: 0,
            scale: 0,
            duration: 1.5,
            delay: 0.8,
            stagger: 0.2
        });
        
        // ScrollTrigger for sections
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.utils.toArray('.section-header').forEach(header => {
                gsap.from(header, {
                    opacity: 0,
                    y: 100,
                    duration: 1,
                    scrollTrigger: {
                        trigger: header,
                        start: 'top 80%'
                    }
                });
            });
            
            // About section
            gsap.from('.about-text', {
                opacity: 0,
                x: -100,
                duration: 1,
                scrollTrigger: {
                    trigger: '.about-content',
                    start: 'top 70%'
                }
            });
            
            gsap.from('.about-cards .about-card', {
                opacity: 0,
                y: 100,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.about-cards',
                    start: 'top 70%'
                }
            });
            
            // Services section
            gsap.from('.service-card', {
                opacity: 0,
                y: 100,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.services-grid',
                    start: 'top 70%'
                }
            });
            
            // Projects section
            gsap.from('.projects-filter', {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: '.projects-filter',
                    start: 'top 80%'
                }
            });
            
            gsap.from('.project-card', {
                opacity: 0,
                y: 100,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.projects-grid',
                    start: 'top 70%'
                }
            });
            
            // Timeline section
            gsap.from('.timeline-tabs', {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: '.timeline-tabs',
                    start: 'top 80%'
                }
            });
            
            gsap.from('.timeline-item', {
                opacity: 0,
                y: 100,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: '.timeline-content',
                    start: 'top 70%'
                }
            });
            
            // Contact section
            gsap.from('.contact-card', {
                opacity: 0,
                x: -100,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.contact-info',
                    start: 'top 70%'
                }
            });
            
            gsap.from('.contact-form', {
                opacity: 0,
                x: 100,
                duration: 1,
                scrollTrigger: {
                    trigger: '.contact-form-container',
                    start: 'top 70%'
                }
            });
        }
    }
});