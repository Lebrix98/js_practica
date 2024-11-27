import { categories } from "./data.js";

//[04] Agrega menú con categorías en página de productos
const loadCategories = () => {
  //Paso 1. Llamar al elemento del DOM (.menuCategory)
  const div = document.querySelector(".menuCategory");
  //Paso 2. Crear nuevos artículos según cada categoría

  categories.forEach((elem) => {
    const article = document.createElement("article");

    article.textContent = elem.name;

    article.style.backgroundColor = elem.color;

    div.appendChild(article);
  });
};

loadCategories();
