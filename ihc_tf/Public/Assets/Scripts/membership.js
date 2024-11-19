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

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = localStorage.getItem("currentUser");

  if (currentUser) {
    const usernameDisplay = document.getElementById("username-display");
    if (usernameDisplay) {
      usernameDisplay.textContent = currentUser;
    }
  } else {
    alert("No has iniciado sesión.");
    window.location.href = "acceso.html";
  }
});

// Selección de elementos
const openModal = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const cancelModal = document.getElementById('cancel-modal');

// Mostrar el modal
openModal.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

cancelModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera de él
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

const openModalE = document.getElementById('open-modalE');
const modalE = document.getElementById('modalE');
const closeModalE = document.getElementById('close-modalE');
const cancelModalE = document.getElementById('cancel-modalE');

// Mostrar el modal
openModalE.addEventListener('click', () => {
    modalE.style.display = 'flex';
});

// Cerrar el modal
closeModalE.addEventListener('click', () => {
    modalE.style.display = 'none';
});

cancelModalE.addEventListener('click', () => {
    modalE.style.display = 'none';
});

// Cerrar modal al hacer clic fuera de él
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modalE.style.display = 'none';
    }
});


const openModalF = document.getElementById('open-modalF');
const modalF = document.getElementById('modalF');
const closeModalF = document.getElementById('close-modalF');
const cancelModalF = document.getElementById('cancel-modalF');

// Mostrar el modal
openModalF.addEventListener('click', () => {
    modalF.style.display = 'flex';
});

// Cerrar el modal
closeModalF.addEventListener('click', () => {
    modalF.style.display = 'none';
});

cancelModalF.addEventListener('click', () => {
    modalF.style.display = 'none';
});

// Cerrar modal al hacer clic fuera de él
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modalF.style.display = 'none';
    }
});
