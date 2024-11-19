const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const darkMode = document.querySelector('.dark-mode');


menuBtn.addEventListener('click', () => {
  // Si el sidebar está visible, lo oculta; si está oculto, lo muestra
  if (sideMenu.style.display === 'block') {
      sideMenu.style.display = 'none'; // Oculta el menú
  } else {
      sideMenu.style.display = 'block'; // Muestra el menú
  }
});
 

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


