const carrito = document.getElementById("carrito"),
  listaCafes = document.getElementById("lista-cafes"),
  contenedorCarrito = document.querySelector(".buy-card .lista_de_cafes"),
  vaciarCarritoBtn = document.querySelector("#vaciar_carrito");

let articulosCarrito = [];
registrarEventsListeners();
function registrarEventsListeners() {
  //Al dar click se agrega al carrito de compras
  listaCafes.addEventListener("click", agregarCafe);

  //Eliminar curso del carrito
    carrito.addEventListener('click',eliminarCafe);

  //Vaciar el carrito
  vaciarCarritoBtn.addEventListener('click', e =>{
    articulosCarrito = [];
    limpiarHTML()
  })  
}

function agregarCafe(e) {
  if (e.target.classList.contains("agregar-carrito")) {
    const cafeSeleccionado = e.target.parentElement.parentElement;
    leerInfo(cafeSeleccionado)
  }
}

//Elimina un tipo de cafe del carrito
function eliminarCafe(e){
    if(e.target.classList.contains("borrar-cafe")){
        const cafeId = e.target.getAttribute('data-id');

        //Eliminar del arreglo del articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(cafe => cafe.id !== cafeId)

        carritoHTML()
    }
}

//Leer el contenido de nuestro HTML al que se le dio click y extraer info del cafe
function leerInfo(cafe) {
  const infoCafe = {
    imagen: cafe.querySelector("img").src,
    titulo: cafe.querySelector("h3").textContent,
    precio: cafe.querySelector(".descuento").textContent,
    id: cafe.querySelector("button").getAttribute("data-id"),
    cantidad: 1,
  };

  // Revisar si un elemento ya existe en el carrito
  const existe = articulosCarrito.some((cafe) => cafe.id === infoCafe.id);

  if (existe) {
    //Actualizar la cantidad
    const cafes = articulosCarrito.map((cafe) => {
      if (cafe.id === infoCafe.id) {
        cafe.cantidad++;
        return cafe;
      } else {
        return cafe;
      }
    });
    [...articulosCarrito, infoCafe]
  } else {
    //Agregando elementos al carrito de compras
    articulosCarrito = [...articulosCarrito, infoCafe]
  }
  carritoHTML();
}

// Muestra el carrito en el html

function carritoHTML() {
  limpiarHTML();
  //Recorrre el carrito de compras y genera el HTML
  articulosCarrito.forEach((cafe) => {
    const fila = document.createElement("div");
    fila.innerHTML = ` 
        <img src="${cafe.imagen}">
        <p>${cafe.titulo}</p>
        <p>${cafe.precio}</p>
        <p>${cafe.cantidad}</p>
        <p><span class="borrar-cafe" data-id="${cafe.id}">X</span></p>
        `;

    contenedorCarrito.appendChild(fila);
  });
}

//Eliminar los cursos de la lista_de_cursos
function limpiarHTML() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
