// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  // Kinetic hero text slide-up
  gsap.to(".kinetic-text", {
    y: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power4.out",
  });

  // Hero subtitle fade in
  gsap.to(".kinetic-subtext", {
    opacity: 1,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
  });

  // Hero CTA + banner pop in
  gsap.to(".vsl-reveal", {
    scale: 1,
    opacity: 1,
    duration: 1,
    delay: 0.8,
    stagger: 0.2,
    ease: "elastic.out(1, 0.7)"
  });

  // Feature cards + gallery items scroll reveal
  gsap.utils.toArray(".feature-card").forEach((card) => {
    gsap.to(card, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      }
    });
  });

  // Pricing card reveal
  gsap.utils.toArray(".pricing-card").forEach((card) => {
    gsap.to(card, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Sparkle particles for mystical theme
  const themeCss = document.getElementById('theme-css');
  if (themeCss && themeCss.href.includes('mystical')) {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.style.cssText = 'position:fixed;inset:0;z-index:9999;pointer-events:none;overflow:hidden;';
    document.body.appendChild(sparkleContainer);

    function createSparkle() {
      const s = document.createElement('div');
      const size = Math.random() * 5 + 2;
      const x = Math.random() * 100;
      const dur = Math.random() * 4 + 3;
      const delay = Math.random() * 6;
      const hue = 260 + Math.random() * 40;
      s.style.cssText = `
        position: absolute;
        bottom: -10px;
        left: ${x}%;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: radial-gradient(circle, hsla(${hue}, 70%, 55%, 0.8), transparent);
        box-shadow: 0 0 ${size * 3}px hsla(${hue}, 70%, 50%, 0.4);
        animation: sparkle-float ${dur}s ease-in ${delay}s infinite;
        pointer-events: none;
      `;
      sparkleContainer.appendChild(s);
    }

    // Create a field of floating sparkles
    for (let i = 0; i < 30; i++) createSparkle();

    // Mouse trail sparkles
    let lastSparkle = 0;
    document.addEventListener('mousemove', (e) => {
      const now = Date.now();
      if (now - lastSparkle < 80) return;
      lastSparkle = now;

      const dot = document.createElement('div');
      const size = Math.random() * 6 + 3;
      const hue = 260 + Math.random() * 40;
      dot.style.cssText = `
        position: fixed;
        left: ${e.clientX - size / 2}px;
        top: ${e.clientY - size / 2}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: radial-gradient(circle, hsla(${hue}, 70%, 55%, 0.85), transparent);
        box-shadow: 0 0 ${size * 3}px hsla(${hue}, 70%, 50%, 0.5);
        pointer-events: none;
        z-index: 99999;
        transition: all 0.8s ease-out;
      `;
      document.body.appendChild(dot);

      requestAnimationFrame(() => {
        dot.style.opacity = '0';
        dot.style.transform = `translateY(-${20 + Math.random() * 30}px) scale(0)`;
      });

      setTimeout(() => dot.remove(), 900);
    });
  }

  // --- Animated White Lop-Eared Bunny ---
  // --- Animated White Lop-Eared Bunny ---
  const bunnyWrapper = document.createElement('div');
  bunnyWrapper.style.cssText = 'position:fixed; bottom: 10px; left: 0px; width: 60px; height: 60px; z-index: 9998; pointer-events: none; transition: transform 0.6s linear; display: flex; justify-content: center; align-items: flex-end;';
  
  const bunnyFlipper = document.createElement('div');
  bunnyFlipper.style.cssText = 'width: 100%; height: 100%;';
  
  const bunnyInner = document.createElement('div');
  bunnyInner.innerHTML = `
    <svg viewBox="0 0 100 100" width="60" height="60" style="filter: drop-shadow(0 6px 12px rgba(0,0,0,0.35));">
      <!-- Lop Ear 2 (back) -->
      <path d="M 70,45 Q 85,75 70,85 Q 60,75 65,50 Z" fill="#fdf5ff" stroke="#ffe8ed" stroke-width="2"/>
      <!-- Body -->
      <path d="M 25,60 Q 25,35 50,35 Q 75,35 80,60 Q 80,85 50,85 Q 25,85 25,60 Z" fill="#ffffff"/>
      <!-- Head -->
      <circle cx="75" cy="50" r="20" fill="#ffffff"/>
      <!-- Lop Ear 1 (front) -->
      <path d="M 80,50 Q 95,80 80,90 Q 70,80 75,55 Z" fill="#ffffff" stroke="#ffe8ed" stroke-width="2"/>
      <!-- Eye -->
      <circle cx="82" cy="45" r="2.5" fill="#3b2258"/>
      <!-- Nose -->
      <circle cx="92" cy="50" r="2" fill="#ffaabb"/>
      <!-- Tail -->
      <circle cx="20" cy="65" r="8" fill="#ffffff" stroke="#f0e6ff"/>
      <!-- Paws -->
      <circle cx="40" cy="85" r="5" fill="#ffffff"/>
      <circle cx="70" cy="85" r="5" fill="#ffffff"/>
    </svg>
  `;
  bunnyFlipper.appendChild(bunnyInner);
  bunnyWrapper.appendChild(bunnyFlipper);
  document.body.appendChild(bunnyWrapper);

  let bX = Math.random() * window.innerWidth;
  let bY = 0;
  let bDirection = 1;
  let bYDirection = 1;

  function doHop() {
    // X Direction change
    if (Math.random() < 0.15) {
      bDirection *= -1;
    }
    // Y Direction change
    if (Math.random() < 0.25) {
      bYDirection *= -1;
    }
    
    // Hop distance X and Y
    const hopDistanceX = 40 + Math.random() * 60;
    const hopDistanceY = 30 + Math.random() * 50;
    
    bX += bDirection * hopDistanceX;
    bY += bYDirection * hopDistanceY;
    
    let didWrap = false;
    
    // X Bounds (bunny width is 60, so wait until ~60px offscreen)
    const screenW = window.innerWidth;
    if (bX > screenW + 80) {
      bX = -80;
      bY = Math.random() * (window.innerHeight - 100);
      didWrap = true;
    } else if (bX < -80) {
      bX = screenW + 80;
      bDirection = -1;
      bY = Math.random() * (window.innerHeight - 100);
      didWrap = true;
    }
    
    // Y Bounds
    let maxHopHeight = window.innerHeight - 100;
    if (bY > maxHopHeight) {
      bY = maxHopHeight;
      bYDirection = -1;
    } else if (bY < 0) {
      bY = 0;
      bYDirection = 1;
    }
    
    const scaleX = bDirection === 1 ? 1 : -1;
    
    // Apply instant rotation to flipper
    bunnyFlipper.style.transform = `scaleX(${scaleX})`;

    if (didWrap) {
      // Disable transition to teleport instantly
      bunnyWrapper.style.transition = 'none';
      bunnyWrapper.style.transform = `translate(${bX}px, ${-bY}px)`;
      // Force repaint to register the snapshot
      bunnyWrapper.offsetHeight;
      bunnyWrapper.style.transition = 'transform 0.6s linear';
    } else {
      bunnyWrapper.style.transform = `translate(${bX}px, ${-bY}px)`;
    }
    
    // Hop arch animation
    bunnyInner.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    bunnyInner.style.transform = 'translateY(-25px)';
    
    setTimeout(() => {
      bunnyInner.style.transition = 'transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53)';
      bunnyInner.style.transform = 'translateY(0)';
      
      // poop! 25% chance
      if (!didWrap && Math.random() < 0.25) {
        dropPoop();
      }
    }, 300);
    
    setTimeout(doHop, didWrap ? 50 : 600 + Math.random() * 800);
  }
  
  function dropPoop() {
    const rect = bunnyWrapper.getBoundingClientRect();
    // 25% into the illustration (15px from tail end)
    const poopX = rect.left + (bDirection === 1 ? 15 : 45); 
    const poopY = rect.bottom + window.scrollY - 20; 
    
    const poop = document.createElement('div');
    poop.style.cssText = `
      position: absolute;
      left: ${poopX}px;
      top: ${poopY}px;
      width: ${6 + Math.random() * 3}px;
      height: ${5 + Math.random() * 3}px;
      background: #5c3d2e;
      border-radius: 4px;
      z-index: 9997;
      pointer-events: none;
      transform: translateY(0) scale(0.5);
      transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53), opacity 2s;
    `;
    
    document.body.appendChild(poop);
    
    // Animate falling down and scaling to normal size
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        poop.style.transform = 'translateY(15px) scale(1)';
      });
    });
    
    // Fade out eventually
    setTimeout(() => {
      poop.style.opacity = '0';
      setTimeout(() => poop.remove(), 2000);
    }, 12000);
  }

  // start
  setTimeout(doHop, 1000);

});
