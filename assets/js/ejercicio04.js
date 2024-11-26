//[05] Agrega productos en página de productos

const loadProducts = () => {
    loadCategoryProducts("Perro", "#dogs")
    loadCategoryProducts("Gato", "#cats")
    loadCategoryProducts("Pequeñas mascotas", "#little")
}

//Función para cargar productos filtrados según la categoría
//recibe la categoría y el id del contenedor en DOM
const loadCategoryProducts = (category, containerId) => {
    //Paso 1 Llamar al elemento del DOM (.menuCategory)

    //Paso 2 Filtrar los productos según la categoría

    //Paso 3 Recorrer los productos filtrados y agregar al contenedor

}

loadProducts()