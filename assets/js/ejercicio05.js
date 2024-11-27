//[06] Utilizando https://dog.ceo/dog-api/, agrega una imagen random en el footer
const loadDog = async () => {
  try {
    //Paso 1. Obtener datos desde API
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    //Paso 2. Parsear a JSON
    const data = await res.json();
    //Paso 3. Agregar datos de IMG al DOM
    const random = document.querySelector("#imgRandomDog");
    random.src = data.message;
    random.alt = data.message;
    random.style.maxHeight = "400px";
  } catch (error) {
    console.warn("No se puede cargar la imagen");
  }
};
loadDog();
