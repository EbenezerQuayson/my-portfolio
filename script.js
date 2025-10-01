const toggle = document.getElementById('darkModeToggle');
const toggleRes = document.getElementById('darkModeToggleRes');
const body = document.body;
const icons = document.querySelectorAll('.icon');

//check if user had dark mode enabled previously
if(localStorage.getItem('darkMode') == 'enabled'){
  body.classList.add('dark');
  toggle.checked = true;
  toggleRes.checked = true;
  switchIcons('dark');
} else{
  switchIcons('light');
}


toggle.addEventListener('change', () => {
  if(toggle.checked){
    body.classList.add('dark');
    localStorage.setItem('darkMode', 'enabled');
    switchIcons('dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('darkMode', 'disabled');
    switchIcons('light');
  }



});
// Responsive Toggle
toggleRes.addEventListener('change', () => {
  if(toggleRes.checked){
    body.classList.add('dark');
    localStorage.setItem('darkMode', 'enabled');
    switchIcons('dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('darkMode', 'disabled');
    switchIcons('light');
  }



});

function switchIcons(mode){
  icons.forEach(icon =>{
    icon.src = icon.getAttribute(`data-${mode}`);
    console.log(`Switched to ${mode}`);
  });
}






function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
