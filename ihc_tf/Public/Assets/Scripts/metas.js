const gestionSidebar = document.querySelector('a[href="Gestion.html"]');
const metasSidebar = document.querySelector('a[href="Metas.html"]');
const consejosSidebar = document.querySelector('a[href="Consejos.html"]');
const foroSidebar = document.querySelector('a[href="Foro.html"]');

const inicioSidebar = document.getElementById('inicio_sidebar');
const calculadoraSidebar = document.querySelector('a[href="calculadora.html"]');
const calendarioSidebar = document.querySelector('a[href="calendario.html"]');
const analisisSidebar = document.querySelector('a[href="analisis.html"]');
   

    const goalDescription = document.getElementById("goalDescription");
const goalAmount = document.getElementById("goalAmount");
const goalPriority = document.getElementById("goalPriority");
const goalStatus = document.getElementById("goalStatus");
const goalDeadline = document.getElementById("goalDeadline");

const goalsTableBody = document.getElementById("goalsTable").querySelector("tbody");

const addGoalBtn = document.getElementById("addGoalBtn");
const goalModal = document.getElementById("goalModal");
const closeModal = document.querySelector(".close");
const saveGoalBtn = document.getElementById("saveGoalBtn");


// Mostrar el modal
addGoalBtn.addEventListener("click", () => {
  goalModal.style.display = "block";
});

// Cerrar el modal
closeModal.addEventListener("click", () => {
  goalModal.style.display = "none";
});