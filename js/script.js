document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const themeIcon = themeSwitch.querySelector('i');
    
    themeSwitch.addEventListener('click', function() {
        if (document.body.getAttribute('data-theme') === 'light') {
            document.body.removeAttribute('data-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        }
    });
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                const menu = document.querySelector('.menu');
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                }
            }
        });
    });
    
    const fadeElements = document.querySelectorAll('.section-content');
    
    const fadeInOnScroll = function() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };
    
    fadeInOnScroll();
    
    window.addEventListener('scroll', fadeInOnScroll);
    
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
    
    const counters = document.querySelectorAll('.counter');
    
    const startCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const count = +counter.innerText;
            const increment = target / 100;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(startCounters, 40);
            } else {
                counter.innerText = target;
            }
        });
    };
    
    const statsSection = document.getElementById('stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                startCounters();
                observer.unobserve(statsSection);
            }
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }

    /* Hero animation using GSAP */
    if (window.gsap) {
        gsap.from('.vision-subtitle', {y: 20, opacity: 0, duration: 1});
        gsap.from('.vision-title', {y: 40, opacity: 0, duration: 1, delay: 0.2});
        gsap.from('.vision-description', {y: 40, opacity: 0, duration: 1, delay: 0.4});
        gsap.from('.vision-motto', {y: 40, opacity: 0, duration: 1, delay: 0.6});
        gsap.from('.cta-button', {y: 40, opacity: 0, duration: 1, delay: 0.8});
    }

    /* Testimonials slider */
    const testimonials = document.querySelectorAll('#testimonials .testimonial');
    if (testimonials.length > 0) {
        let currentTestimonial = 0;
        setInterval(() => {
            testimonials[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].classList.add('active');
        }, 5000);
    }

    /* FAQ accordion */
    document.querySelectorAll('#faq .faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('open');
        });
    });

    /* Scroll to top button */
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight / 2) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition < window.innerHeight) {
            const heroContent = document.querySelector('.hero-content');
            const parallaxSpeed = 0.5;
            
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
            }
            
            const heroBg = document.querySelector('#hero .hexagon-bg');
            if (heroBg) {
                heroBg.style.transform = `translateY(${scrollPosition * -0.2}px)`;
            }
        }
    });
});
