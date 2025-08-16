




const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        header.classList.toggle('active');

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

gsap.registerPlugin(ScrollTrigger);

const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMobile.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : 'auto';
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close menu when clicking on menu links
document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Initialize GSAP Timeline
const tl = gsap.timeline();

// Set initial states
gsap.set([".header", ".hero-content", ".hero-characters", ".character", ".speech-bubble", ".nav a", ".book-btn", ".logo", ".hamburger"], {
    opacity: 0
});

gsap.set(".character", { y: 50 });
gsap.set(".hero-content", { y: 30 });
gsap.set(".hero-characters", { x: 30 });
gsap.set(".header", { y: -20 });
gsap.set(".speech-bubble", { scale: 0, y: -10 });
gsap.set(".nav a", { y: -20 });
gsap.set(".book-btn", { scale: 0.8, y: -20 });
gsap.set(".logo", { x: -30 });
gsap.set(".hamburger", { x: 30 });

// Animate in sequence
tl.to(".header", {
    duration: 0.8,
    opacity: 1,
    y: 0,
    ease: "power2.out"
})
.to(".logo", {
    duration: 0.6,
    opacity: 1,
    x: 0,
    ease: "back.out(1.7)"
}, "-=0.6")
.to(".nav a", {
    duration: 0.5,
    opacity: 1,
    y: 0,
    ease: "power2.out",
    stagger: 0.1
}, "-=0.4")
.to(".book-btn", {
    duration: 0.6,
    opacity: 1,
    scale: 1,
    y: 0,
    ease: "back.out(1.7)"
}, "-=0.3")
.to(".hamburger", {
    duration: 0.6,
    opacity: 1,
    x: 0,
    ease: "back.out(1.7)"
}, "-=0.5")
.to(".hero-content", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power2.out"
}, "-=0.2")
.to(".hero-characters", {
    duration: 1,
    opacity: 1,
    x: 0,
    ease: "power2.out"
}, "-=0.6")
.to(".character-1", {
    duration: 0.8,
    opacity: 1,
    y: 0,
    ease: "back.out(1.7)"
}, "-=0.4")
.to(".character-2", {
    duration: 0.8,
    opacity: 1,
    y: 0,
    ease: "back.out(1.7)"
}, "-=0.6")
.to(".character-3", {
    duration: 0.8,
    opacity: 1,
    y: 0,
    ease: "back.out(1.7)"
}, "-=0.6")
.to(".speech-bubble", {
    duration: 0.6,
    opacity: 1,
    scale: 1,
    y: 0,
    ease: "back.out(2)",
    stagger: 0.1
}, "-=0.2");

// Add hover animations for characters
document.querySelectorAll('.character').forEach(character => {
    character.addEventListener('mouseenter', () => {
        gsap.to(character, {
            duration: 0.3,
            y: -10,
            ease: "power2.out"
        });
    });

    character.addEventListener('mouseleave', () => {
        gsap.to(character, {
            duration: 0.3,
            y: 0,
            ease: "power2.out"
        });
    });
});

// Add nav link hover animations
document.querySelectorAll('.nav a:not(.book-btn)').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            duration: 0.3,
            y: -3,
            ease: "power2.out"
        });
    });

    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            duration: 0.3,
            y: 0,
            ease: "power2.out"
        });
    });
});

// Add floating animation for speech bubbles
gsap.to(".speech-bubble", {
    duration: 2,
    y: -5,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    stagger: 0.3
});

// Add click animation for speech bubbles
document.querySelectorAll('.speech-bubble').forEach(bubble => {
    bubble.addEventListener('click', () => {
        gsap.to(bubble, {
            duration: 0.3,
            scale: 1.2,
            ease: "back.out(2)",
            yoyo: true,
            repeat: 1
        });
        
        // Add a little bounce to the character
        const character = bubble.closest('.character');
        gsap.to(character, {
            duration: 0.4,
            y: -15,
            ease: "power2.out",
            yoyo: true,
            repeat: 1
        });
    });
});

// CTA button hover animation
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseenter', () => {
    gsap.to(ctaButton, {
        duration: 0.3,
        scale: 1.05,
        ease: "power2.out"
    });
});

ctaButton.addEventListener('mouseleave', () => {
    gsap.to(ctaButton, {
        duration: 0.3,
        scale: 1,
        ease: "power2.out"
    });
});

// Book button hover animation
document.querySelectorAll('.book-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
            duration: 0.3,
            scale: 1.05,
            ease: "power2.out"
        });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            duration: 0.3,
            scale: 1,
            ease: "power2.out"
        });
    });
});

// Easter Egg: Konami Code Detection
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        activateDevMode();
        konamiCode = [];
    }
});

// Matrix rain effect
function createMatrixRain() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    return setInterval(draw, 35);
}

// Developer mode functions
let matrixInterval;

function activateDevMode() {
    const devMode = document.getElementById('devMode');
    devMode.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Start matrix rain
    matrixInterval = createMatrixRain();
    
    // Add some extra effects
    gsap.fromTo('.dev-console', 
        { opacity: 0, scale: 0.8, y: 50 },
        { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            duration: 1, 
            ease: "back.out(1.7)" 
        }
    );
    
    // Sound effect simulation (visual feedback)
    const title = document.querySelector('.dev-title');
    gsap.to(title, {
        duration: 0.1,
        scale: 1.1,
        ease: "power2.out",
        yoyo: true,
        repeat: 5
    });
}

function closeDevMode() {
    const devMode = document.getElementById('devMode');
    
    gsap.to('.dev-console', {
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
            devMode.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (matrixInterval) {
                clearInterval(matrixInterval);
            }
        }
    });
}

// Add keyboard shortcut for closing dev mode
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('devMode').style.display === 'block') {
        closeDevMode();
    }
});

// Add some fun interactions
let clickCount = 0;
document.querySelector('.logo-icon').addEventListener('click', () => {
    clickCount++;
    gsap.to('.logo-icon', {
        duration: 0.3,
        rotation: clickCount * 360,
        ease: "back.out(1.7)"
    });
    
    if (clickCount === 5) {
        // Easter egg: logo changes color
        gsap.to('.logo-icon', {
            duration: 0.5,
            background: 'linear-gradient(45deg, #28a745, #007bff)',
            ease: "power2.out"
        });
        clickCount = 0;
    }
});

// Add typing effect to speech bubbles on click
const originalTexts = ['hola!', 'hola!', 'hola!'];
const spanishPhrases = [
    ['¡Hola!', '¡Bienvenido!', '¡Estudia!'],
    ['¡Gracias!', '¡Perfecto!', '¡Increíble!'],
    ['¡Vamos!', '¡Excelente!', '¡Fantástico!']
];

document.querySelectorAll('.speech-bubble').forEach((bubble, index) => {
    let phraseIndex = 0;
    bubble.addEventListener('click', () => {
        const phrases = spanishPhrases[index];
        bubble.textContent = phrases[phraseIndex % phrases.length];
        phraseIndex++;
        
        // Reset after a few seconds
        setTimeout(() => {
            bubble.textContent = originalTexts[index];
        }, 2000);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const characters = document.querySelector('.hero-characters');
    const content = document.querySelector('.hero-content');
    
    if (characters && content) {
        gsap.to(characters, {
            duration: 0.5,
            y: scrolled * 0.2,
            ease: "power1.out"
        });
        
        gsap.to(content, {
            duration: 0.5,
            y: scrolled * 0.1,
            ease: "power1.out"
        });
    }
});

// Add resize handler for matrix canvas
window.addEventListener('resize', () => {
    const canvas = document.getElementById('matrixCanvas');
    if (canvas && document.getElementById('devMode').style.display === 'block') {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// Performance optimization: pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        gsap.globalTimeline.pause();
    } else {
        gsap.globalTimeline.resume();
    }
});

// Add smooth scrolling for anchor links
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

// Initialize page load animation
window.addEventListener('load', () => {
    // Add a subtle page entrance effect
    gsap.from('body', {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out"
    });
});

// Add accessibility features
document.addEventListener('keydown', (e) => {
    // Tab navigation enhancement
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Console easter egg
console.log(
    '%c🎓 Spain Academy Developer Console 🎓',
    'color: #28a745; font-size: 20px; font-weight: bold;'
);
console.log(
    '%cTry the Konami Code: ↑↑↓↓←→←→BA',
    'color: #666; font-size: 14px;'
);
console.log(
    '%cClick the logo 5 times for a surprise! 🎨',
    'color: #666; font-size: 14px;'
);

