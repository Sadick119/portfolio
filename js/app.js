/**
 * EricDev Portfolio - Core Application JavaScript
 * Powers all interactive behaviors, carousels, modals, animations, and form submissions.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. Data Store: Projects, Services, Testimonials
  // =========================================================================

  const projectsData = {
    'business-website': {
      title: 'Business Website — Apex Capital',
      category: 'Web Design & Development',
      badge: 'Web Design',
      image: 'assets/images/project-website.svg',
      client: 'Apex Capital & Investments Ltd',
      duration: '4 Weeks',
      role: 'Lead Full-Stack Web Developer & UI Designer',
      overview: 'A sleek, high-conversion corporate web platform designed for an investment and business advisory firm. Features bespoke dark aesthetic, lightning-fast Next.js rendering, interactive financial metrics, and multi-currency advisory calculators.',
      technologies: ['Next.js 14', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Node.js'],
      deliverables: [
        'Custom Dark Neon UI Design System in Figma',
        'Headless CMS integration for dynamic blog & reports',
        'Sub-second page load times with 99+ Google Lighthouse score',
        'Full responsive layout across mobile, tablet, and ultra-wide screens'
      ],
      liveUrl: 'https://example.com/apex-capital',
      githubUrl: 'https://github.com/Sadick119/portfolio'
    },
    'taskflow-app': {
      title: 'TaskFlow App — Productivity Redefined',
      category: 'Mobile Application',
      badge: 'App Development',
      image: 'assets/images/project-app.svg',
      client: 'TaskFlow Labs Inc',
      duration: '8 Weeks',
      role: 'Lead Flutter Mobile Engineer',
      overview: 'Cross-platform mobile productivity suite built with Flutter and Firebase. Enables distributed teams to organize tasks, track sprint velocity, automate notifications, and visualize progress with real-time sync across iOS and Android.',
      technologies: ['Flutter', 'Dart', 'Firebase Realtime DB', 'Cloud Functions', 'Provider/Bloc', 'REST APIs'],
      deliverables: [
        'Interactive kanban board and calendar scheduling',
        'Biometric authentication and offline data persistence',
        'Push notifications with custom sound alerts',
        'Over 10,000 active beta downloads on Google Play & TestFlight'
      ],
      liveUrl: 'https://example.com/taskflow',
      githubUrl: 'https://github.com/Sadick119/portfolio'
    },
    'admin-dashboard': {
      title: 'Admin Dashboard — Pulse Metrics',
      category: 'UI/UX & Frontend Engineering',
      badge: 'UI Design',
      image: 'assets/images/project-dashboard.svg',
      client: 'Pulse Commerce Global',
      duration: '5 Weeks',
      role: 'Senior UI/UX Designer & Frontend Engineer',
      overview: 'Comprehensive SaaS analytics & management console. Delivers real-time telemetry on revenue, customer churn, user cohort retention, and inventory levels with customized data visualizations and role-based access control.',
      technologies: ['React', 'TypeScript', 'Chart.js / Recharts', 'Tailwind CSS', 'Redux Toolkit', 'RESTful API'],
      deliverables: [
        'Over 40 responsive widget components and interactive charts',
        'Dark mode optimized with crimson neon data highlights',
        'CSV/PDF report export engine with custom filters',
        'WCAG AA accessible interface with intuitive keyboard navigation'
      ],
      liveUrl: 'https://example.com/pulse-dashboard',
      githubUrl: 'https://github.com/Sadick119/portfolio'
    }
  };

  const servicesData = {
    'service-web': {
      title: 'Web Development',
      tagline: 'Modern, responsive and scalable websites built for speed and conversions.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="service-modal-svg">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
             </svg>`,
      description: 'I architect and code high-performance web applications and corporate websites that combine unforgettable visual polish with reliable engineering. Every site is designed mobile-first, SEO-tuned, and built to scale effortlessly.',
      features: [
        'Full-stack Web Applications (React, Next.js, Node.js)',
        'Custom E-Commerce & SaaS Platforms',
        'Sub-second performance optimization & Core Web Vitals mastery',
        'Headless CMS setup (Sanity, Strapi, Contentful)',
        'Secure APIs, database integration & third-party gateways'
      ],
      process: ['1. Requirements & Wireframing', '2. UI Architecture & Prototyping', '3. Production Coding & API Wiring', '4. QA & Global Cloud Deployment']
    },
    'service-app': {
      title: 'App Development',
      tagline: 'Powerful, native-feel mobile apps for iOS and Android from a single codebase.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="service-modal-svg">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
             </svg>`,
      description: 'Using modern cross-platform frameworks like Flutter and React Native, I develop buttery-smooth mobile applications that deliver native performance, offline capabilities, and seamless user experiences on both iOS and Android.',
      features: [
        'Cross-platform iOS & Android mobile application development',
        'Real-time data synchronization & offline caching',
        'In-app purchases, stripe/mobile money payment integrations',
        'Push notification pipelines and background task workers',
        'App Store and Google Play Store end-to-end publishing'
      ],
      process: ['1. Architecture & UX Flow', '2. State Management & Feature Slices', '3. Device Testing & Optimization', '4. App Store Submission']
    },
    'service-uiux': {
      title: 'UI/UX Design',
      tagline: 'Stunning, user-friendly designs that captivate audiences and drive action.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="service-modal-svg">
              <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
              <path d="M2 2l7.586 7.586"></path>
              <circle cx="11" cy="11" r="2"></circle>
             </svg>`,
      description: 'Good design is not just how it looks — it is how it works. I design user-centric interfaces, design systems, and clickable prototypes in Figma that solve real user friction and maximize engagement.',
      features: [
        'Interactive wireframes and high-fidelity clickable Figma prototypes',
        'Scalable Design Systems & tokenized UI component libraries',
        'User research, customer journey maps & empathy analysis',
        'Usability testing, accessibility (WCAG) reviews & conversion rate audit',
        'Design-to-developer handover specifications'
      ],
      process: ['1. Empathy & Discovery', '2. Information Architecture', '3. Interactive Visual Design', '4. Testing & Design Tokens Handover']
    }
  };

  const testimonialsList = [
    {
      quote: '"Eric delivered an amazing website beyond our expectations. Professional, creative and very responsive!"',
      author: '— Kwesi Mensah',
      role: 'Founder & CEO, TechSprint Ghana',
      stars: 5
    },
    {
      quote: '"Working with Eric on our mobile application was a game-changer. He nailed both the UI and the backend logic in record time!"',
      author: '— Amara Okafor',
      role: 'Product Lead, FinEdge Africa',
      stars: 5
    },
    {
      quote: '"The attention to detail in his designs and animations is world-class. Our user engagement tripled after our redesign launch."',
      author: '— David Sterling',
      role: 'Managing Director, Sterling Digital Media',
      stars: 5
    }
  ];

  let currentTestimonialIndex = 0;
  let testimonialAutoInterval = null;

  // =========================================================================
  // 2. Interactive Ambient Background Canvas
  // =========================================================================
  const canvas = document.getElementById('ambient-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(width > 768 ? 45 : 20, 50);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle glowing particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle repulsion from mouse
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.x -= (dx / dist) * 1.5;
          p.y -= (dy / dist) * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 42, 77, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#FF2A4D';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  // =========================================================================
  // 3. Navbar Sticky Effect & ScrollSpy
  // =========================================================================
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Spy
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile Hamburger Menu
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when a navigation link is clicked
    document.querySelectorAll('.mobile-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // =========================================================================
  // 4. Animated Stat Counters
  // =========================================================================
  const counterElements = document.querySelectorAll('.count-up');
  let countersAnimated = false;

  const countUpObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        counterElements.forEach((el) => {
          const target = parseInt(el.getAttribute('data-target'), 10);
          const duration = 1600;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out expo
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOutProgress * target);

            el.textContent = currentVal;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = target;
            }
          }
          requestAnimationFrame(updateCounter);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('about');
  if (statsSection) {
    countUpObserver.observe(statsSection);
  }

  // =========================================================================
  // 5. Portfolio Carousel Slider
  // =========================================================================
  const portfolioTrack = document.getElementById('portfolio-track');
  const portfolioPrevBtn = document.getElementById('portfolio-prev-btn');
  const portfolioNextBtn = document.getElementById('portfolio-next-btn');
  const portfolioMobileNextBtn = document.getElementById('portfolio-mobile-next-btn');
  const portfolioDots = document.querySelectorAll('#portfolio-dots .dot');
  let currentPortfolioIndex = 0;
  const totalProjects = 3;

  function updatePortfolioSlider(index) {
    currentPortfolioIndex = (index + totalProjects) % totalProjects;

    // Mobile peek slider vs tablet vs desktop
    if (window.innerWidth <= 768) {
      const offset = currentPortfolioIndex * 88;
      portfolioTrack.style.transform = `translateX(-${offset}%)`;
    } else if (window.innerWidth <= 992) {
      const offset = currentPortfolioIndex * 100;
      portfolioTrack.style.transform = `translateX(-${offset}%)`;
    } else {
      portfolioTrack.style.transform = 'none';
    }

    portfolioDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentPortfolioIndex);
    });
  }

  if (portfolioPrevBtn) {
    portfolioPrevBtn.addEventListener('click', () => {
      updatePortfolioSlider(currentPortfolioIndex - 1);
    });
  }

  if (portfolioNextBtn) {
    portfolioNextBtn.addEventListener('click', () => {
      updatePortfolioSlider(currentPortfolioIndex + 1);
    });
  }

  if (portfolioMobileNextBtn) {
    portfolioMobileNextBtn.addEventListener('click', () => {
      updatePortfolioSlider(currentPortfolioIndex + 1);
    });
  }

  portfolioDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      updatePortfolioSlider(idx);
    });
  });

  window.addEventListener('resize', () => {
    updatePortfolioSlider(currentPortfolioIndex);
  });

  // Touch Swipe for Mobile on Portfolio Track
  let touchStartX = 0;
  let touchEndX = 0;
  if (portfolioTrack) {
    portfolioTrack.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    portfolioTrack.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      if (touchEndX < touchStartX - 40) {
        // Swiped Left
        updatePortfolioSlider(currentPortfolioIndex + 1);
      }
      if (touchEndX > touchStartX + 40) {
        // Swiped Right
        updatePortfolioSlider(currentPortfolioIndex - 1);
      }
    }
  }

  // =========================================================================
  // 6. Testimonials Slider
  // =========================================================================
  const testimonialTextEl = document.getElementById('testimonial-text');
  const testimonialAuthorEl = document.getElementById('testimonial-author');
  const testimonialRoleEl = document.getElementById('testimonial-role');
  const testimonialDots = document.querySelectorAll('#testimonial-dots .dot');
  const testimonialPrevBtn = document.getElementById('testimonial-prev-btn');
  const testimonialNextBtn = document.getElementById('testimonial-next-btn');
  const testimonialMobilePrevBtn = document.getElementById('testimonial-mobile-prev-btn');
  const testimonialMobileNextBtn = document.getElementById('testimonial-mobile-next-btn');
  const testimonialCard = document.getElementById('testimonial-card');

  function renderTestimonial(index) {
    currentTestimonialIndex = (index + testimonialsList.length) % testimonialsList.length;
    const item = testimonialsList[currentTestimonialIndex];

    if (testimonialCard) {
      testimonialCard.style.opacity = '0.4';
      testimonialCard.style.transform = 'scale(0.98)';
      
      setTimeout(() => {
        testimonialTextEl.textContent = item.quote;
        testimonialAuthorEl.textContent = item.author;
        testimonialRoleEl.textContent = item.role;

        testimonialDots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === currentTestimonialIndex);
        });

        testimonialCard.style.opacity = '1';
        testimonialCard.style.transform = 'scale(1)';
      }, 180);
    }
  }

  function handlePrevTestimonial() {
    resetTestimonialTimer();
    renderTestimonial(currentTestimonialIndex - 1);
  }

  function handleNextTestimonial() {
    resetTestimonialTimer();
    renderTestimonial(currentTestimonialIndex + 1);
  }

  if (testimonialPrevBtn) testimonialPrevBtn.addEventListener('click', handlePrevTestimonial);
  if (testimonialNextBtn) testimonialNextBtn.addEventListener('click', handleNextTestimonial);
  if (testimonialMobilePrevBtn) testimonialMobilePrevBtn.addEventListener('click', handlePrevTestimonial);
  if (testimonialMobileNextBtn) testimonialMobileNextBtn.addEventListener('click', handleNextTestimonial);

  testimonialDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      resetTestimonialTimer();
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      renderTestimonial(idx);
    });
  });

  function startTestimonialTimer() {
    testimonialAutoInterval = setInterval(() => {
      renderTestimonial(currentTestimonialIndex + 1);
    }, 7000);
  }

  function resetTestimonialTimer() {
    clearInterval(testimonialAutoInterval);
    startTestimonialTimer();
  }

  startTestimonialTimer();

  // =========================================================================
  // 7. Modals: Contact, Project Details, Service Details, About
  // =========================================================================

  // Helper functions to open and close any modal
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Setup click-outside-to-close & close-button on all modal overlays
  document.querySelectorAll('.modal-overlay').forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });

    const closeBtn = overlay.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal(overlay));
    }
  });

  // Escape key closes open modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach((modal) => {
        closeModal(modal);
      });
    }
  });

  // --- Contact Modal Triggers ---
  const contactModal = document.getElementById('contact-modal');
  const contactTriggers = [
    document.getElementById('open-contact-btn'),
    document.getElementById('mobile-talk-btn'),
    document.getElementById('hero-hire-btn'),
    document.getElementById('cta-contact-btn'),
    document.getElementById('about-modal-hire-btn')
  ];

  contactTriggers.forEach((btn) => {
    if (btn) {
      btn.addEventListener('click', () => {
        // If About modal is open, close it first
        const aboutModal = document.getElementById('about-modal');
        if (aboutModal) closeModal(aboutModal);

        openModal(contactModal);
      });
    }
  });

  // --- About Modal Trigger ---
  const aboutModal = document.getElementById('about-modal');
  const aboutMoreBtn = document.getElementById('about-more-btn');
  if (aboutMoreBtn && aboutModal) {
    aboutMoreBtn.addEventListener('click', () => {
      openModal(aboutModal);
    });
  }

  // --- Project Modal Trigger & Dynamic Population ---
  const projectModal = document.getElementById('project-modal');
  const projectModalContent = document.getElementById('project-modal-content');

  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      const project = projectsData[projectId];

      if (project && projectModal && projectModalContent) {
        projectModalContent.innerHTML = `
          <div class="project-modal-header">
            <div class="project-category-badge">
              <span class="badge-dot red"></span>
              <span>${project.category}</span>
            </div>
            <h2 class="modal-title">${project.title}</h2>
            <div class="project-meta-row" style="display:flex;gap:20px;margin-top:8px;color:#9CA3AF;font-size:0.88rem;flex-wrap:wrap;">
              <div><strong style="color:#FFF;">Client:</strong> ${project.client}</div>
              <div><strong style="color:#FFF;">Timeline:</strong> ${project.duration}</div>
              <div><strong style="color:#FFF;">Role:</strong> ${project.role}</div>
            </div>
          </div>

          <div class="project-modal-image-wrap" style="margin:24px 0;border-radius:14px;overflow:hidden;border:1px solid rgba(255,42,77,0.2);background:#0b0c10;">
            <img src="${project.image}" alt="${project.title}" style="width:100%;height:auto;display:block;">
          </div>

          <div class="project-modal-body">
            <h4 style="font-size:1.15rem;margin-bottom:8px;color:#FFF;">Project Overview</h4>
            <p style="color:#CBD5E1;line-height:1.65;font-size:0.95rem;margin-bottom:20px;">${project.overview}</p>

            <h4 style="font-size:1.15rem;margin-bottom:12px;color:#FFF;">Key Deliverables &amp; Outcomes</h4>
            <ul style="list-style:none;padding:0;margin-bottom:24px;display:flex;flex-direction:column;gap:10px;">
              ${project.deliverables.map(item => `
                <li style="display:flex;align-items:center;gap:10px;color:#9CA3AF;font-size:0.92rem;">
                  <span style="color:#FF2A4D;font-weight:bold;">✔</span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>

            <h4 style="font-size:1.15rem;margin-bottom:12px;color:#FFF;">Technology Stack</h4>
            <div class="skills-pill-group" style="margin-bottom:28px;">
              ${project.technologies.map(tech => `<span class="skill-pill">${tech}</span>`).join('')}
            </div>

            <div class="project-modal-actions" style="display:flex;gap:14px;flex-wrap:wrap;">
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-pill">
                <span>View Live Demo</span>
                <svg class="btn-arrow" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-pill">
                <span>Inspect Repository</span>
                <svg viewBox="0 0 24 24" fill="currentColor" style="width:18px;height:18px;">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        `;
        openModal(projectModal);
      }
    });
  });

  // View All Projects button trigger
  const viewAllProjectsBtn = document.getElementById('view-all-projects-btn');
  if (viewAllProjectsBtn) {
    viewAllProjectsBtn.addEventListener('click', () => {
      // Simulate by opening the first featured project or toast
      showToast('Displaying 3 featured projects in active carousel. Click any project to inspect!', 'info');
      const portfolioSec = document.getElementById('portfolio');
      if (portfolioSec) {
        portfolioSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // --- Service Modal Trigger & Dynamic Population ---
  const serviceModal = document.getElementById('service-modal');
  const serviceModalContent = document.getElementById('service-modal-content');

  function openServiceModal(serviceKey) {
    const service = servicesData[serviceKey];
    if (service && serviceModal && serviceModalContent) {
      serviceModalContent.innerHTML = `
        <div class="modal-header">
          <div class="modal-icon-badge">
            ${service.icon}
          </div>
          <h2 class="modal-title">${service.title}</h2>
          <p class="modal-sub">${service.tagline}</p>
        </div>

        <div class="service-modal-body">
          <p style="color:#CBD5E1;line-height:1.7;font-size:0.96rem;margin-bottom:22px;">${service.description}</p>

          <h4 style="font-size:1.15rem;margin-bottom:12px;color:#FFF;">What You Receive</h4>
          <ul style="list-style:none;padding:0;margin-bottom:24px;display:flex;flex-direction:column;gap:10px;">
            ${service.features.map(f => `
              <li style="display:flex;align-items:center;gap:10px;color:#9CA3AF;font-size:0.92rem;">
                <span style="color:#FF2A4D;font-weight:bold;">★</span>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>

          <h4 style="font-size:1.15rem;margin-bottom:12px;color:#FFF;">Delivery Workflow</h4>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(130px, 1fr));gap:10px;margin-bottom:28px;">
            ${service.process.map(p => `
              <div style="background:#0e0f14;border:1px solid rgba(255,42,77,0.18);border-radius:8px;padding:12px;font-size:0.8rem;color:#E2E8F0;font-weight:600;text-align:center;">
                ${p}
              </div>
            `).join('')}
          </div>

          <div class="modal-footer-cta">
            <button class="btn btn-primary btn-pill" id="service-inquire-btn" data-service-title="${service.title}">
              <span>Book ${service.title}</span>
              <svg class="btn-arrow" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      `;

      // Inquire button inside service modal connects directly to contact modal with prefilled service!
      const inquireBtn = serviceModalContent.querySelector('#service-inquire-btn');
      if (inquireBtn) {
        inquireBtn.addEventListener('click', () => {
          closeModal(serviceModal);
          const serviceSelect = document.getElementById('contact-service');
          if (serviceSelect) {
            const title = inquireBtn.getAttribute('data-service-title');
            for (let i = 0; i < serviceSelect.options.length; i++) {
              if (serviceSelect.options[i].text.includes(title) || title.includes(serviceSelect.options[i].value)) {
                serviceSelect.selectedIndex = i;
                break;
              }
            }
          }
          openModal(contactModal);
        });
      }

      openModal(serviceModal);
    }
  }

  // Bind service cards (for mobile card tap) and links
  document.querySelectorAll('.service-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      // If clicking inside a button, let the button handle it
      if (e.target.closest('.service-link-btn')) return;
      const serviceType = card.getAttribute('data-service');
      openServiceModal(`service-${serviceType}`);
    });
  });

  document.querySelectorAll('.service-link-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const modalKey = btn.getAttribute('data-modal');
      openServiceModal(modalKey);
    });
  });

  const exploreServicesBtn = document.getElementById('explore-services-btn');
  if (exploreServicesBtn) {
    exploreServicesBtn.addEventListener('click', () => {
      openServiceModal('service-web');
    });
  }

  // Read Reviews trigger
  const readReviewsBtn = document.getElementById('read-reviews-btn');
  if (readReviewsBtn) {
    readReviewsBtn.addEventListener('click', () => {
      renderTestimonial(currentTestimonialIndex + 1);
      showToast('Switched to next client testimonial!', 'info');
    });
  }

  // =========================================================================
  // 8. Contact Form Submission & LocalStorage persistence
  // =========================================================================
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');

  if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const service = document.getElementById('contact-service').value;
      const budget = document.getElementById('contact-budget').value;
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all required fields.', 'error');
        return;
      }

      // Email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }

      // Button loading state
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <span style="display:inline-block;animation:spin 1s linear infinite;">⟳</span>
        <span>Sending Message...</span>
      `;
      submitBtn.disabled = true;

      setTimeout(() => {
        // Save to localStorage simulation
        const messagePayload = {
          name,
          email,
          service,
          budget,
          message,
          timestamp: new Date().toISOString()
        };

        const existingMessages = JSON.parse(localStorage.getItem('ericdev_inbox') || '[]');
        existingMessages.push(messagePayload);
        localStorage.setItem('ericdev_inbox', JSON.stringify(existingMessages));

        // Restore button & reset form
        submitBtn.innerHTML = originalBtnHTML;
        submitBtn.disabled = false;
        contactForm.reset();

        // Close modal and show notification
        closeModal(contactModal);
        showToast(`Thank you, ${name}! Your message was sent successfully. Eric will reply within 24 hours.`, 'success');
      }, 1100);
    });
  }

  // =========================================================================
  // 9. Toast Notification System
  // =========================================================================
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, type = 'success') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `
        <svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
      `;
    } else if (type === 'error') {
      iconSvg = `
        <svg class="toast-icon" style="color:#FF2A4D;" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
      `;
    } else {
      iconSvg = `
        <svg class="toast-icon" style="color:#60A5FA;" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
        </svg>
      `;
    }

    toast.innerHTML = `
      ${iconSvg}
      <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4500);
  }

  // =========================================================================
  // 10. Back to Top Button
  // =========================================================================
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================================
  // 11. Smooth Scrolling for all internal anchor links
  // =========================================================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Welcome console message for developers
  console.log(
    '%c EricDev Portfolio %c Loaded Successfully! 🚀 ',
    'background: #FF2A4D; color: #fff; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
    'background: #111217; color: #9CA3AF; padding: 4px 8px;'
  );
});
