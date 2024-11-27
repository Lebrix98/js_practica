//[01] Utilizando una función, crea un menú principal que debe aparecer en el navbar de todos los archivos html.
// Las opciones del menú serán: home, productos, estadísticas, contacto
//Considera utilizar un array de objetos, por cada opción debe contener el texto a mostrar y su url

//Paso 1. Crear arreglo
// const links = [
//   { name: "Home", url: "./index.html" },
//   { name: "Productos", url: "./products.html" },
//   { name: "Estadísticas", url: "./statistics.html" },
//   { name: "Contacto", url: "./contact.html" },
// ];

///////////////////////////
// function loadMenuM(id) {
//Paso 2. Llamar al elemento del DOM (#navbar)
//   const elem = document.querySelector(id);
//Paso 3. Crear variable auxiliar y agregar html que tendrá DOM
//   let printHtml = "";
//Paso 4. Cargar html en el elemento del DOM
//   links.forEach((element) => {
//     printHtml += `<li><a href=${element.url}>${element.name}</a></li>`;
//   });

//   elem.innerHTML = printHtml;
// }

//[02] Utilizando una función, define un footer que contendrá los mismos enlaces del menú principal
// function loadMenuS() {
//Paso 1. Llamar al elemento del DOM (#navFooter)
//   const navF = document.querySelector()
//Paso 2. Crear variable auxiliar y agregar html que tendrá DOM
//   let printHtml = "";
//Paso 3. Cargar html en el elemento del DOM
//   links.forEach((element) => {
//     printHtml += `<li><a href=${element.url}>${element.name}</a></li>`;
//   });

//   navF.innerHTML = printHtml;
// }

//[03] Crea una función que ejecute a las funciones anteriores

// const load = () => {
//   loadMenuM("#navbar");
//   loadMenuM("#navFooter");
// };

// load();

//[Pregunta 01] ¿De qué manera se podría mejorar el código anterior?

const links = [
  { name: "Home", url: "./index.html" },
  { name: "Productos", url: "./products.html" },
  { name: "Estadísticas", url: "./statistics.html" },
  { name: "Contacto", url: "./contact.html" },
];

function loadMenu(id) {
  const elem = document.querySelector(id);
  let printHtml = "";
  links.forEach((element) => {
    printHtml += `<li><a href=${element.url}>${element.name}</a></li>`;
  });

  elem.innerHTML = printHtml;
}

const load = () => {
  loadMenu("#navbar");
  loadMenu("#navFooter");
};

load();
