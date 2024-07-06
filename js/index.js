document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu_icon");
    const menu = document.getElementById("menu_options");
  
    menuIcon.addEventListener("click", function() {
      menu.classList.toggle("active");
    });
});
  
document.querySelector('.parrafo').innerHTML = "Bean Scene es una cafetería que le ofrece café de calidad que le ayuda a aumentar suproductividad ymejorar su estado de ánimo. Tomar una taza de café es bueno, pero tomar una taza de café de verdad esmejor. No hay duda de que disfrutarás de este café más que otros que hayas probado alguna vez."

document.querySelector('.btn').innerHTML = "Aprende más";

document.querySelector('.sub-title').innerHTML = "Descubre el mejor café";

const img = document.createElement('img');
img.src = '../images/Mask_group-removebg-preview.png';

const container = document.getElementById('my-container');
container.appendChild(img);

const boton = document.querySelector('.btn');

boton.addEventListener('click', function() {
    window.location.href = 'https://es.wikipedia.org/wiki/Caf%C3%A9';
});

const registerModal = document.getElementById("registerModal");
const loginModal = document.getElementById("loginModal");
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const closeBtns = document.getElementsByClassName("close");

// Función para mostrar un modal
function showModal(modal) {
  modal.style.display = "block";
}

// Función para cerrar un modal
function closeModal(modal) {
  modal.style.display = "none";
}

// Evento para el botón de registro
registerBtn.onclick = function(e) {
  e.preventDefault(); // Prevenir cualquier acción por defecto si es necesario
  showModal(registerModal);
}

// Evento para el botón de login
loginBtn.onclick = function(e) {
  e.preventDefault(); // Prevenir cualquier acción por defecto si es necesario
  showModal(loginModal);
}

// Eventos para los botones de cierre
Array.from(closeBtns).forEach(btn => {
  btn.onclick = function() {
    closeModal(this.closest('.modal'));
  }
});

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    closeModal(event.target);
  }
}

// Manejar el envío del formulario de registro
document.getElementById("registerForm").onsubmit = function(e) {
  e.preventDefault();
  console.log("Formulario de registro enviado");
  closeModal(registerModal);
}

// Manejar el envío del formulario de login
document.getElementById("loginForm").onsubmit = function(e) {
  e.preventDefault();
  console.log("Formulario de login enviado");
  closeModal(loginModal);
}

document.getElementById("loginForm").onsubmit = function(e) {
  e.preventDefault();
  
  // Mostrar el mensaje de error
  document.getElementById("loginError").style.display = "block";
  
  // Ocultar el mensaje de error después de 3 segundos
  setTimeout(() => {
    document.getElementById("loginError").style.display = "none";
  }, 3000);
  
  // No cerramos el modal para que se pueda ver el mensaje de error
  console.log("Simulación de login fallido");
}


document.getElementById("registerForm").onsubmit = function(e) {
  e.preventDefault();
  
  // Mostrar el mensaje de éxito
  document.getElementById("registerSuccess").style.display = "block";
  
  // Limpiar el formulario
  this.reset();
  
  // Ocultar el mensaje de éxito y cerrar el modal después de 3 segundos
  setTimeout(() => {
    document.getElementById("registerSuccess").style.display = "none";
    closeModal(registerModal);
  }, 3000);
  
  console.log("Simulación de registro exitoso");
}