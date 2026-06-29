document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggling
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check localStorage or system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    html.setAttribute('data-theme', 'light');
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Mobile Navigation
  const hamburger = document.querySelector('.hamburger');
  const body = document.body;
  const navLinks = document.querySelectorAll('.nav-links a');

  hamburger.addEventListener('click', () => {
    const isOpen = body.classList.contains('nav-open');
    if (isOpen) {
      body.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.innerHTML = '☰';
    } else {
      body.classList.add('nav-open');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.innerHTML = '✕';
    }
  });

  // Close mobile nav when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      body.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.innerHTML = '☰';
    });
  });

  // Intersection Observer for scroll animations and active nav links
  const fadeElements = document.querySelectorAll('.fade-up');
  const sections = document.querySelectorAll('section');
  
  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Fade-up animation
      if (entry.isIntersecting) {
        if (!prefersReducedMotion) {
          entry.target.classList.add('visible');
        }
      }

      // Active nav link tracking (only for sections)
      if (entry.isIntersecting && entry.target.tagName.toLowerCase() === 'section') {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.removeAttribute('aria-current');
          if (link.getAttribute('href') === `#${id}`) {
            link.setAttribute('aria-current', 'page');
          }
        });
      }
    });
  }, observerOptions);

  // Initialize fade elements (make them visible immediately if reduced motion is on)
  fadeElements.forEach(el => {
    if (prefersReducedMotion) {
      el.classList.add('visible');
    } else {
      observer.observe(el);
    }
  });

  // Observe sections for scroll spy
  sections.forEach(section => {
    observer.observe(section);
  });

  // Basic Form Validation & Handling
  const contactForm = document.getElementById('contact-form');
  const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');
  const spinner = submitBtn.querySelector('.spinner');
  const btnText = submitBtn.querySelector('.btn-text');

  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateInput(input);
    });
  });

  function validateInput(input) {
    const errorEl = document.getElementById(`${input.id}-error`);
    if (!input.validity.valid) {
      errorEl.textContent = input.validationMessage;
      input.setAttribute('aria-invalid', 'true');
      return false;
    } else {
      errorEl.textContent = '';
      input.removeAttribute('aria-invalid');
      return true;
    }
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    inputs.forEach(input => {
      if (!validateInput(input)) {
        isValid = false;
      }
    });

    if (isValid) {
      // Simulate form submission
      btnText.style.display = 'none';
      spinner.style.display = 'inline-block';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        contactForm.reset();
        btnText.style.display = 'inline';
        spinner.style.display = 'none';
        submitBtn.disabled = false;
        
        formStatus.textContent = "Message sent — thank you!";
        formStatus.style.color = "var(--color-success)";
        formStatus.style.marginTop = "1rem";
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          formStatus.textContent = '';
        }, 5000);
      }, 1500);
    }
  });
});
