const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  // console.log(panel);
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

// Function to remove all active classes
const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};
