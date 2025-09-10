// Modern Interactions for Heart Disease Prediction System

document.addEventListener('DOMContentLoaded', function() {
    
    // Add loading animation to forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<div class="loading-spinner" style="width: 20px; height: 20px; border-width: 2px; margin: 0;"></div> Processing...';
                submitBtn.disabled = true;
                
                // Re-enable after 3 seconds (in case of error)
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    });

    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
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

    // Add form validation feedback
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = '#dc3545';
                this.style.boxShadow = '0 0 0 3px rgba(220, 53, 69, 0.1)';
            } else {
                this.style.borderColor = '#28a745';
                this.style.boxShadow = '0 0 0 3px rgba(40, 167, 69, 0.1)';
            }
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = '#2ca4b6';
            this.style.boxShadow = '0 0 0 3px rgba(44, 164, 182, 0.1)';
        });
    });

    // Add card hover effects
    const cards = document.querySelectorAll('.card, .dashboard-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add button click effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add prediction result animations
    const predictionResults = document.querySelectorAll('.prediction-result');
    predictionResults.forEach(result => {
        // Add entrance animation
        result.style.opacity = '0';
        result.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            result.style.transition = 'all 0.8s ease-out';
            result.style.opacity = '1';
            result.style.transform = 'scale(1)';
        }, 100);
    });

    // Add number counter animation for dashboard cards
    const numbers = document.querySelectorAll('.dashboard-card .number');
    numbers.forEach(number => {
        const finalValue = parseInt(number.textContent.replace(/,/g, ''));
        let currentValue = 0;
        const increment = finalValue / 50;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(timer);
            }
            number.textContent = Math.floor(currentValue).toLocaleString();
        }, 30);
    });

    // Add smooth page transitions
    const pageTransitions = () => {
        const links = document.querySelectorAll('a:not([href^="#"])');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                if (this.href && !this.href.includes('#')) {
                    e.preventDefault();
                    document.body.style.opacity = '0';
                    document.body.style.transition = 'opacity 0.3s ease-out';
                    
                    setTimeout(() => {
                        window.location.href = this.href;
                    }, 300);
                }
            });
        });
    };
    
    // Initialize page transitions
    pageTransitions();

    // Add floating action button for quick navigation
    const fab = document.createElement('div');
    fab.innerHTML = '<i class="fa fa-arrow-up"></i>';
    fab.className = 'floating-action-btn';
    fab.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #2ca4b6, #61bebc);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        z-index: 1000;
        opacity: 0;
        transform: translateY(20px);
    `;
    
    document.body.appendChild(fab);
    
    // Show/hide floating action button based on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            fab.style.opacity = '1';
            fab.style.transform = 'translateY(0)';
        } else {
            fab.style.opacity = '0';
            fab.style.transform = 'translateY(20px)';
        }
    });
    
    // Scroll to top when FAB is clicked
    fab.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .floating-action-btn:hover {
            transform: translateY(-2px) scale(1.1) !important;
            box-shadow: 0 8px 30px rgba(0,0,0,0.3) !important;
        }
    `;
    document.head.appendChild(style);

    console.log('Modern interactions loaded successfully!');
});

// === Advanced Interactions & Chatbot ===
(function() {
  // Intersection Observer for reveal animations
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('reveal-visible'));
  }

  // 3D tilt effect for cards
  const tiltCards = document.querySelectorAll('.tilt-card, .dashboard-card');
  tiltCards.forEach(card => {
    const height = card.clientHeight;
    const width = card.clientWidth;
    card.addEventListener('mousemove', (e) => {
      const xVal = e.layerX;
      const yVal = e.layerY;
      const yRotation = 20 * ((xVal - width / 2) / width);
      const xRotation = -20 * ((yVal - height / 2) / height);
      card.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  });

  // Magnetic button subtle pull effect
  const magneticButtons = document.querySelectorAll('.magnetic-btn');
  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    });
    btn.addEventListener('mouseleave', function() {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  // Parallax hover images
  const parallaxBlocks = document.querySelectorAll('.parallax-hover');
  parallaxBlocks.forEach(block => {
    block.addEventListener('mousemove', function(e) {
      const img = block.querySelector('img');
      if (!img) return;
      const rect = block.getBoundingClientRect();
      const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
      img.style.transform = `scale(1.06) translate(${offsetX * 10}px, ${offsetY * 10}px)`;
    });
    block.addEventListener('mouseleave', function() {
      const img = block.querySelector('img');
      if (!img) return;
      img.style.transform = 'scale(1) translate(0, 0)';
    });
  });

  // === Chatbot Widget ===
  const ensureChatbot = () => {
    if (document.getElementById('chatbot-fab')) return;

    const fab = document.createElement('div');
    fab.id = 'chatbot-fab';
    fab.className = 'chatbot-fab';
    fab.innerHTML = '<i class="fa fa-comments"></i>';

    const panel = document.createElement('div');
    panel.id = 'chatbot-panel';
    panel.className = 'chatbot-panel';
    panel.innerHTML = `
      <div class="chatbot-header">
        <div class="avatar"><i class="fa fa-robot"></i></div>
        <div>
          <div style="font-weight:600;">Health Assistant</div>
          <div style="font-size:12px;opacity:.9;">Ask anything about your report</div>
        </div>
        <div style="margin-left:auto;cursor:pointer;" id="chatbot-close"><i class="fa fa-times"></i></div>
      </div>
      <div class="chatbot-messages" id="chatbot-messages">
        <div class="message bot">
          <div class="bubble">Hi! I can help explain metrics, risk factors, and next steps. How can I help today?</div>
        </div>
      </div>
      <div class="chatbot-input">
        <input id="chatbot-input" type="text" placeholder="Type your question..." />
        <button id="chatbot-send"><i class="fa fa-paper-plane"></i></button>
      </div>
    `;

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    const messages = panel.querySelector('#chatbot-messages');
    const input = panel.querySelector('#chatbot-input');
    const sendBtn = panel.querySelector('#chatbot-send');
    const closeBtn = panel.querySelector('#chatbot-close');

    const sendUser = (text) => {
      const wrap = document.createElement('div');
      wrap.className = 'message user';
      wrap.innerHTML = `<div class="bubble">${text}</div>`;
      messages.appendChild(wrap);
      messages.scrollTop = messages.scrollHeight;
    };

    const showTyping = () => {
      const typing = document.createElement('div');
      typing.className = 'message bot';
      typing.id = 'typing-row';
      typing.innerHTML = '<div class="bubble"><span class="typing-indicator"><span></span><span></span><span></span></span></div>';
      messages.appendChild(typing);
      messages.scrollTop = messages.scrollHeight;
    };

    const hideTyping = () => {
      const t = messages.querySelector('#typing-row');
      if (t) t.remove();
    };

    const sendBot = (text) => {
      const wrap = document.createElement('div');
      wrap.className = 'message bot';
      wrap.innerHTML = `<div class="bubble">${text}</div>`;
      messages.appendChild(wrap);
      messages.scrollTop = messages.scrollHeight;
    };

    const mockAnswer = (q) => {
      // Simple heuristic answers; replace with backend later
      const lower = q.toLowerCase();
      if (lower.includes('healthy') || lower.includes('risk')) {
        return 'Healthy usually means low risk. Maintain exercise, diet, and regular checkups.';
      }
      if (lower.includes('accuracy')) {
        return 'Accuracy is the model score on test data. Treat it as an estimate, not a diagnosis.';
      }
      if (lower.includes('next') || lower.includes('doctor')) {
        return 'Consider consulting a cardiologist if symptoms persist. I can suggest nearby doctors in your area.';
      }
      if (lower.includes('metrics') || lower.includes('explain')) {
        return 'Key metrics: cholesterol, blood pressure, max heart rate, ST depression, etc. Each influences risk.';
      }
      return 'I recommend discussing results with a clinician. Meanwhile, I can explain any metric you are unsure of.';
    };

    const handleSend = () => {
      const text = input.value.trim();
      if (!text) return;
      sendUser(text);
      input.value = '';
      showTyping();
      setTimeout(() => {
        hideTyping();
        sendBot(mockAnswer(text));
      }, 900);
    };

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });

    const togglePanel = () => {
      const visible = panel.style.display === 'flex';
      panel.style.display = visible ? 'none' : 'flex';
    };

    fab.addEventListener('click', togglePanel);
    closeBtn.addEventListener('click', togglePanel);
  };

  // Only show chatbot when logged-in patient: reuse template logic via presence of patient nav
  const patientNav = document.querySelector("a[href='/add_heartdetail']");
  if (patientNav) {
    ensureChatbot();
  }
})();

// === Sticky header & improved toggle ===
(function() {
  const header = document.querySelector('.main-top');
  if (header) {
    header.classList.add('header-sticky');
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (y > 10) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Enhance chatbot panel open/close with class toggling
  const panel = document.getElementById('chatbot-panel');
  const fab = document.getElementById('chatbot-fab');
  if (panel && fab) {
    const toggle = () => {
      if (panel.classList.contains('open')) {
        panel.classList.remove('open');
        setTimeout(() => panel.style.display = 'none', 280);
      } else {
        panel.style.display = 'flex';
        requestAnimationFrame(() => panel.classList.add('open'));
      }
    };
    fab.addEventListener('click', toggle);
    const close = panel.querySelector('#chatbot-close');
    if (close) close.addEventListener('click', toggle);
  }
})();
