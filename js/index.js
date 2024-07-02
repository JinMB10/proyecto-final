document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");
  
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