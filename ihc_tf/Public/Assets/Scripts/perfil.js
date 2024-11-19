document.addEventListener('DOMContentLoaded', () => {
    const showHistorialButton = document.getElementById('show-historial');
    const returnProfileButton = document.getElementById('return-profile');
    const historialSection = document.getElementById('historial');
    const profileSection = document.querySelector('.containerProfile');

    // Mostrar historial de actividades
    showHistorialButton.addEventListener('click', (e) => {
        e.preventDefault();
        profileSection.style.display = 'none';
        historialSection.style.display = 'block';
        historialSection.scrollIntoView({ behavior: 'smooth' });

        // Generar filas dinámicas para la tabla
        populateHistorialTable();
    });

    // Regresar al perfil
    returnProfileButton.addEventListener('click', (e) => {
        e.preventDefault();
        historialSection.style.display = 'none';
        profileSection.style.display = 'flex';
        profileSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Función para llenar la tabla de historial
    function populateHistorialTable() {
        const historialBody = document.getElementById('historial-body');
        historialBody.innerHTML = ''; // Limpiar contenido previo

        const activities = [
            { descripcion: 'Ingreso', monto: 500, fecha: '21/09/2024', total: 500 },
            { descripcion: 'Egreso', monto: 100, fecha: '05/10/2024', total: 400 },
            { descripcion: 'Egreso', monto: 150, fecha: '11/10/2024', total: 250 },
            { descripcion: 'Ingreso', monto: 300, fecha: '30/10/2024', total: 550 },
            { descripcion: 'Ingreso', monto: 250, fecha: '19/11/2024', total: 800 },
        ];

        activities.forEach((activity) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="${activity.descripcion === 'Egreso' ? 'danger' : 'primary'}">${activity.descripcion}</td>
                <td>${activity.monto}</td>
                <td>${activity.fecha}</td>
                <td class="${activity.total < 0 ? 'danger' : 'success'}">${activity.total}</td>
            `;
            historialBody.appendChild(tr);
        });
    }
});
