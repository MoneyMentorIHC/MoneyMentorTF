

let montoBase = 0;
let ingresoInicial = 0;
// Referencias a los elementos del DOM
const inputIngreso = document.getElementById('ingreso');
const botonRegistrar = document.getElementById('registrarIngresoButton');


botonRegistrar.addEventListener('click', () => {
    const nuevoIngreso = parseFloat(inputIngreso.value);

  
    if (!isNaN(nuevoIngreso) && nuevoIngreso > 0) {
      montoBase += nuevoIngreso;   
      ingresoInicial += nuevoIngreso   

      inputIngreso.value = '';
  
      // Guarda el monto total en localStorage
      localStorage.setItem('montoTotal', montoBase);
      localStorage.setItem('ingresoInicial', ingresoInicial);

    } else {
      alert('Por favor, ingrese un valor numérico válido.');
    }
  });

let montoBaseEgreso = 200;
let EgresoInicial = 0;
  // Referencias a los elementos del DOM
const inputEgreso = document.getElementById('egreso');
const botonRegistrarEgreso = document.getElementById('registrarEgresoButton');

botonRegistrarEgreso.addEventListener('click', () => {

    const nuevoEgreso = parseFloat(inputEgreso.value);

  
    if (!isNaN(nuevoEgreso) && nuevoEgreso > 0) {
      montoBaseEgreso += nuevoEgreso;   
      EgresoInicial += nuevoEgreso   

      inputEgreso.value = '';
  
      // Guarda el monto total en localStorage
      localStorage.setItem('egresoTotal', montoBaseEgreso);
      localStorage.setItem('egresoInicial', EgresoInicial);

    } else {
      alert('Por favor, ingrese un valor numérico válido.');
    }
  });




