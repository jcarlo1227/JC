function togglePost(element) {
  const content = element.nextElementSibling;
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});
