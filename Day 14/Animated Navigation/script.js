const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
  toggle.parentNode.classList.toggle('active');
});
