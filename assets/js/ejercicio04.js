//[05] Agrega productos en página de productos

import { products } from "./data.js";

const loadProducts = () => {
  loadCategoryProducts("Perro", "#dogs");
  loadCategoryProducts("Gato", "#cats");
  loadCategoryProducts("Pequeñas mascotas", "#little");
};

//Función para cargar productos filtrados según la categoría
//recibe la categoría y el id del contenedor en DOM
const loadCategoryProducts = (category, containerId) => {
  //Paso 1 Llamar al elemento del DOM (.prodCategory)
  const content = document.querySelector(containerId);
  //Paso 2 Filtrar los productos según la categoría
  const filterProd = products.filter((elem) => elem.category === category);
  //Paso 3 Recorrer los productos filtrados y agregar al contenedor

  filterProd.forEach((elem) => {
    const article = document.createElement("article");

    article.innerHTML += `
    <img src="${elem.urlImg}" alt=${elem.name}/> 
    <h4>${elem.name}</h4> 
    <p>Marca: ${elem.brand}</p>
    <p>Precio: ${elem.price}</p>
    <p>Unidades: ${elem.units}</p>
    `;

    content.appendChild(article);
  });
};

loadProducts();
