// Project Data
const projects = [
    {
        title: "Dodging from Stones",
        description: "An exciting arcade game where players dodge falling stones while collecting power-ups. Features dynamic difficulty scaling and unique power-up mechanics.",
        technologies: ["Unity", "C#"],
        image: "assets/dodging-stones.jpg",
        year: "2023"
    },
    {
        title: "FPS Shooter",
        description: "A first-person shooter game developed for the Chinese market with unique mechanics, including advanced weapon customization and tactical gameplay elements.",
        technologies: ["Unity", "C#", "C++"],
        image: "assets/fps-shooter.jpg",
        year: "2024"
    },
    {
        title: "Space Runner",
        description: "An endless runner set in space with procedurally generated levels and dynamic obstacles. Features unique gravity mechanics and power-ups.",
        technologies: ["Unity", "C#"],
        image: "assets/space-runner.jpg",
        year: "2023"
    },
    {
        title: "Puzzle Master",
        description: "A collection of brain-teasing puzzles with a cyberpunk theme. Includes over 50 unique levels with increasing difficulty.",
        technologies: ["Unity", "C#"],
        image: "assets/puzzle-master.jpg",
        year: "2023"
    },
    {
        title: "Racing Legends",
        description: "A high-speed racing game with futuristic vehicles and dynamic tracks. Features multiplayer support and custom vehicle modifications.",
        technologies: ["Unity", "C#", "C++"],
        image: "assets/racing-legends.jpg",
        year: "2024"
    },
    {
        title: "Cyber Defense",
        description: "A tower defense game with a cyberpunk theme. Players defend their network against various types of cyber attacks using different defense mechanisms.",
        technologies: ["Unity", "C#"],
        image: "assets/cyber-defense.jpg",
        year: "2023"
    }
];

// Binary Rain Effect
function createBinaryRain() {
    const binaryRain = document.querySelector('.binary-rain');
    const characters = '01';
    const columns = Math.floor(window.innerWidth / 20);
    const rows = Math.floor(window.innerHeight / 20);

    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'binary-column';
        column.style.left = `${i * 20}px`;
        
        for (let j = 0; j < rows; j++) {
            const char = document.createElement('span');
            char.textContent = characters[Math.floor(Math.random() * characters.length)];
            char.style.opacity = Math.random();
            char.style.animationDelay = `${Math.random() * 2}s`;
            column.appendChild(char);
        }
        
        binaryRain.appendChild(column);
    }
}

// Skill Bars Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillLevels = {
        'C#': 85,
        'C++': 80,
        'JavaScript': 75,
        'Unity': 90,
        'Visual Studio': 85
    };

    skillBars.forEach(bar => {
        const skill = bar.parentElement.dataset.skill;
        const level = skillLevels[skill] || 0;
        bar.style.width = `${level}%`;
    });
}

// Mobile Navigation
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth Scrolling
function initSmoothScroll() {
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
        });
    });
}

// Project Cards
function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="card-image">
                        <img src="${project.image}" alt="${project.title}">
                        <div class="card-overlay"></div>
                    </div>
                    <div class="card-content">
                        <span class="card-year">${project.year}</span>
                        <h3>${project.title}</h3>
                    </div>
                </div>
                <div class="card-back">
                    <div class="card-back-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="technologies">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <div class="card-actions">
                            <button class="view-project">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add 3D hover effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
        
        projectsGrid.appendChild(card);
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add sending animation
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.innerHTML = '<span class="sending">Sending...</span>';
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.innerHTML = '<span>Message Sent!</span>';
            form.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Send Message</span>';
            }, 2000);
        }, 1500);
    });
}

// Easter Egg (Konami Code)
function initKonamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                // Trigger easter egg
                document.body.classList.add('easter-egg');
                setTimeout(() => {
                    document.body.classList.remove('easter-egg');
                }, 3000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.section-header, .project-card, .skill-bar').forEach(el => {
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createBinaryRain();
    animateSkillBars();
    initMobileNav();
    initSmoothScroll();
    createProjectCards();
    initContactForm();
    initKonamiCode();
    initScrollAnimations();
});

// Add sound effects
function playSound(type) {
    const sounds = {
        click: 'assets/sounds/click.mp3',
        hover: 'assets/sounds/hover.mp3'
    };

    if (sounds[type]) {
        const audio = new Audio(sounds[type]);
        audio.volume = 0.2;
        audio.play();
    }
}

// Add sound effects to buttons
document.querySelectorAll('button, .nav-link').forEach(element => {
    element.addEventListener('mouseenter', () => playSound('hover'));
    element.addEventListener('click', () => playSound('click'));
}); 