//[03] En Home muestra una galería de imágenes con los 3 productos más vendidos

import { products } from "./data.js";

const topProducts = () => {
  //Paso 1. Ordenar los productos de mayor a menor según la propiedad 'sells' (utiliza sort)
  const orderProd = products.sort((a, b) => b.sells - a.sells).slice(0, 3);
  //Paso 2. Obtener el contenedor del DOM donde vamos a mostrar los nombres (#topProducts)
  const content = document.querySelector("#topProducts");
  //Paso 3. Crear variable auxiliar y agregar html que tendrá DOM
  let printHtml = "";
  //Paso 4. Cargar html en el elemento del DOM
  orderProd.forEach((elem) => {
    printHtml += `<article>
    <img src=${elem.urlImg} alt=${elem.name} />
    <p>${elem.name}</p>
    </article>`;
  });

  content.innerHTML = printHtml;
};

topProducts();
