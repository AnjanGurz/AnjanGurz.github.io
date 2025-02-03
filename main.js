// Dark mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

function setDarkMode(isDark) {
    if (isDark) {
        html.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        html.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
    }
}

darkModeToggle.addEventListener('click', () => {
    setDarkMode(!html.classList.contains('dark'));
});

// Check for saved user preference, if any, on load
document.addEventListener('DOMContentLoaded', () => {
    const darkModePreference = localStorage.getItem('darkMode');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (darkModePreference === 'enabled' || (darkModePreference !== 'disabled' && prefersDarkScheme.matches)) {
        setDarkMode(true);
    }
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-slide-up');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);