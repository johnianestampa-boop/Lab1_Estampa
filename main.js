function updateClock() {
  const now = new Date();
  const clock = document.getElementById('clock');
  if (clock) {
    clock.textContent = now.toLocaleTimeString([], { hour12: false });
  }
}
updateClock();
setInterval(updateClock, 1000);
 
// Light / dark theme toggle, remembered for next visit
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
 
function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'light' ? '● theme' : '◐ theme';
  }
}
 
const savedTheme = localStorage.getItem('theme');
if (savedTheme) applyTheme(savedTheme);
 
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });
}
 
// Copy email to clipboard
const copyBtn = document.getElementById('copyEmail');
const emailEl = document.getElementById('email');
 
if (copyBtn && emailEl) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(emailEl.textContent.trim());
      const original = copyBtn.textContent;
      copyBtn.textContent = 'copied';
      setTimeout(() => { copyBtn.textContent = original; }, 1500);
    } catch (err) {
      copyBtn.textContent = 'select & copy manually';
    }
  });
}
 
// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}