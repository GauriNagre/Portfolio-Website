// === DATA ===
const skillsData = [
  { title: "Data Science & Analytics", icon: "📊", skills: [
    { name: "Python", pct: 95 }, { name: "R Programming", pct: 85 }, { name: "Machine Learning", pct: 90 },
    { name: "Statistical Analysis", pct: 88 }, { name: "Data Visualization", pct: 92 }, { name: "Pandas/NumPy", pct: 90 }
  ]},
  { title: "Business Intelligence", icon: "📈", skills: [
    { name: "Tableau", pct: 90 }, { name: "Power BI", pct: 88 }, { name: "SQL", pct: 92 },
    { name: "Excel Advanced", pct: 95 }, { name: "Business Analysis", pct: 85 }
  ]},
  { title: "Machine Learning & AI", icon: "🤖", skills: [
    { name: "Scikit-learn", pct: 88 }, { name: "TensorFlow", pct: 80 }, { name: "Deep Learning", pct: 78 },
    { name: "NLP", pct: 75 }, { name: "AutoML", pct: 85 }
  ]},
  { title: "DevOps", icon: "⚙️", skills: [
    { name: "Azure", pct: 80 }, { name: "Git/GitHub", pct: 90 }, { name: "Linux", pct: 82 },
    { name: "Powershell", pct: 70 }, { name: "Unix", pct: 85 }
  ]},
  { title: "Programming & Development", icon: "💻", skills: [
    { name: "Java", pct: 85 }, { name: "JavaScript", pct: 80 }, { name: "Streamlit", pct: 88 },
    { name: "React JS", pct: 82 }, { name: "Web Development", pct: 78 }
  ]},
  { title: "Database Management", icon: "🗄️", skills: [
    { name: "Oracle", pct: 88 }, { name: "PostgreSQL", pct: 85 }, { name: "MySQL", pct: 90 },
    { name: "Data Warehousing", pct: 80 }, { name: "ETL Processes", pct: 82 }
  ]}
];

const certsData = [
  { name: "Machine Learning Masters", org: "iNeuron.ai", date: "June 2020 - Feb 2021", img: "assets/images/certs/Machine Learning certificate .jpg" },
  { name: "Statistics for Data Science", org: "iNeuron.ai", date: "June 2020 - July 2020", img: "assets/images/certs/Statistics_certificate.jpg" },
  { name: "Tableau Data Analyst", org: "LinkedIn Learning", date: "June 2025", img: "assets/images/certs/Tableau Certified Data Analyst.jpg" },
  { name: "Visualizing Data with Microsoft Power BI", org: "iNeuron.ai", date: "April 2020 - May 2020", img: "assets/images/certs/Power BI certificate .jpg" },
  { name: "Python Programming", org: "Microsoft", date: "March 2019 - April 2019", img: "assets/images/certs/Microsoft_Python.jpg" },
  { name: "Excel Formulas and Functions", org: "LinkedIn Learning", date: "August 2024", img: "assets/images/certs/Excel Formulas and Functions Certificate.jpg" }
];

const achievementsData = [
  { year: "2026", cat: "Professional Excellence", title: "Botman Begins — 2nd Position", desc: "2nd position for building an end-to-end business using various AI tools.", img: "assets/images/achievements/botman.jpeg" },
  { year: "2026", cat: "Technical Excellence", title: "Certificate of Merit - National College", desc: "Achieved 1st position in IoT Projects event.", img: "assets/images/achievements/1775026877882.jpg" },
  { year: "2025", cat: "Academic Achievement", title: "2nd Position - INQUISTA Analytics Competition", desc: "Secured 2nd position in analytics case competition.", img: "assets/images/achievements/1750705284490.jpg" },
  { year: "2025", cat: "Team Leadership", title: "1st Runner Up - Team Techno Divas", desc: "Led team to secure 1st Runner Up position.", img: "assets/images/achievements/1750704856967.jpg" },
  { year: "2022", cat: "Professional Recognition", title: "Certificate of Appreciation - ABSA Digital Support", desc: "Recognized for outstanding performance at LTI Mindtree.", img: "assets/images/achievements/Outstanding_Performer.jpg" },
  { year: "2020", cat: "Academic Achievements", title: "Certificate of Participation - Avishkar Research Convention", desc: "Cleared first round of National Level technical research.", img: "assets/images/achievements/BSCIT_Inter_College_Project_certificate.jpg" },
  { year: "2020", cat: "Academic Achievements", title: "COSMOS IOT Competition winner", desc: "Winner of the COSMOS IOT Competition.", img: "assets/images/achievements/Project_competition.jpg" }
];

// === RENDER FUNCTIONS ===
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = skillsData.map(cat => `
    <div class="skill-category reveal">
      <div class="skill-cat-title"><span class="icon">${cat.icon}</span> ${cat.title}</div>
      ${cat.skills.map(s => `
        <div class="skill-item">
          <div class="skill-info"><span class="skill-name">${s.name}</span><span class="skill-pct">${s.pct}%</span></div>
          <div class="skill-bar"><div class="skill-fill" data-width="${s.pct}"></div></div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function renderCerts() {
  document.getElementById('certsGrid').innerHTML = certsData.map(c => `
    <div class="cert-card" onclick="openModal('${c.img}')">
      <div class="cert-icon" style="overflow: hidden; padding: 0; background: transparent; border: none; width: 60px; height: 60px;">
        <img src="${c.img}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 6px;" alt="Certificate Thumbnail">
      </div>
      <div class="cert-info"><h4>${c.name}</h4><p>${c.org} · ${c.date}</p></div>
    </div>`).join('');
}

function renderAchievements() {
  document.getElementById('achievementsGrid').innerHTML = achievementsData.map(a => `
    <div class="achievement-card reveal" onclick="openModal('${a.img}')" style="align-items: center;">
      <div class="achievement-year" style="width: 50px;">${a.year}</div>
      <img src="${a.img}" style="width: 100px; height: 70px; object-fit: cover; border-radius: 6px; border: 2px solid var(--border-color); flex-shrink: 0;" alt="Achievement Thumbnail">
      <div>
        <span class="achievement-cat">${a.cat}</span>
        <div class="achievement-title">${a.title}</div>
        <p class="achievement-desc">${a.desc}</p>
      </div>
    </div>`).join('');
}

// === NAV ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// Scroll spy
const sections = document.querySelectorAll('section');
function updateActiveNav() {
  const scrollPos = window.scrollY + 120;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const link = navLinks.querySelector(`a[href="#${sec.id}"]`);
    if (link) {
      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.querySelectorAll('a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  updateActiveNav();
});

// === REVEAL ANIMATION ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.skill-fill').forEach(bar => bar.style.width = bar.dataset.width + '%');
    }
  });
}, { threshold: 0.1 });

const animateNumbers = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-number-val');
      nums.forEach(numEl => {
        const target = parseInt(numEl.dataset.target);
        if (isNaN(target)) return;
        let start = 0;
        const duration = 1500;
        const step = target / (duration / 16);
        const counter = setInterval(() => {
          start += step;
          if (start >= target) {
            numEl.innerText = target;
            clearInterval(counter);
          } else {
            numEl.innerText = Math.floor(start);
          }
        }, 16);
      });
      observer.unobserve(entry.target);
    }
  });
};
const statsObserver = new IntersectionObserver(animateNumbers, { threshold: 0.5 });

function observeElements() {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  const statsSection = document.querySelector('.achievements-stats');
  if (statsSection) statsObserver.observe(statsSection);
}

// === MODAL ===
function openModal(src) {
  const modal = document.getElementById('imageModal');
  document.getElementById('modalImg').src = src;
  modal.classList.add('active');
}
document.getElementById('modalClose').addEventListener('click', () => {
  document.getElementById('imageModal').classList.remove('active');
});
document.getElementById('imageModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    document.getElementById('imageModal').classList.remove('active');
  }
});

// === HELPERS ===
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// === INIT ===
renderSkills();
renderCerts();
renderAchievements();
observeElements();
updateActiveNav();

// === TYPEWRITER EFFECT ===
const roles = ["Business Analyst", "Data Analyst", "Product Analyst", "Data Scientist", "Decision Scientist"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typewriterEl = document.getElementById('typewriter-text');
  if (!typewriterEl) return;
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }
  
  let speed = isDeleting ? 50 : 100;
  
  if (!isDeleting && charIndex === currentRole.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 500;
  }
  
  setTimeout(typeEffect, speed);
}
setTimeout(typeEffect, 1000);
