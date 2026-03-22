const toggle = document.getElementById('darkModeToggle');
const toggleRes = document.getElementById('darkModeToggleRes');
const body = document.body;
const icons = document.querySelectorAll('.icon');

// Check if user had dark mode enabled previously
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark');
  toggle.checked = true;
  toggleRes.checked = true;
  switchIcons('dark');
} else {
  switchIcons('light');
}

// Desktop toggle
toggle.addEventListener('change', () => {
  toggleRes.checked = toggle.checked;
  if (toggle.checked) {
    body.classList.add('dark');
    localStorage.setItem('darkMode', 'enabled');
    switchIcons('dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('darkMode', 'disabled');
    switchIcons('light');
  }
});

// Mobile / responsive toggle
toggleRes.addEventListener('change', () => {
  toggle.checked = toggleRes.checked;
  if (toggleRes.checked) {
    body.classList.add('dark');
    localStorage.setItem('darkMode', 'enabled');
    switchIcons('dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('darkMode', 'disabled');
    switchIcons('light');
  }
});

function switchIcons(mode) {
  icons.forEach(icon => {
    const src = icon.getAttribute(`data-${mode}`);
    if (src) icon.src = src;
  });
}

function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');

  // Update aria-expanded for accessibility
  const expanded = icon.classList.contains('open');
  icon.setAttribute('aria-expanded', expanded);
}

// Keyboard support for hamburger icon (Enter / Space)
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  if (hamburgerIcon) {
    hamburgerIcon.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });
  }
});

// Dynamic Typing Effect
const typingText = document.querySelector(".typing-text");
if (typingText) {
  const words = ["Student", "Software Engineer", "Robotics Instructor", "Full-Stack Developer", "Keyboardist", "Music Producer", "AI Engineer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typingText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
  }

  // Start the typing effect
  setTimeout(typeEffect, 1000);
}
