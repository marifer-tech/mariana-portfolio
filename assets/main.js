
        // Mobile Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                }
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Experience Tabs
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                
                tabBtns.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                btn.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Back to Top Button
        const backToTopBtn = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Language Toggle (placeholder functionality)
        const languageToggle = document.querySelector('.language-toggle');
        
        languageToggle.addEventListener('click', () => {
            const currentLang = languageToggle.textContent.trim();
            if (currentLang === 'PT-BR') {
                languageToggle.innerHTML = '<i class="fas fa-globe"></i> EN-US';
                // Here you would add actual language switching logic
            } else {
                languageToggle.innerHTML = '<i class="fas fa-globe"></i> PT-BR';
            }
        });
        
        // Animate Skills on Scroll
        const skillBars = document.querySelectorAll('.skill-progress');
        
        function animateSkills() {
            skillBars.forEach(bar => {
                const width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
        
        // Intersection Observer for Skills Animation
        const skillsSection = document.querySelector('#skills');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(skillsSection);
 