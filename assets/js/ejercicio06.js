//[06] Extra: Crear gráfico

//Obtener Ventas por categoría
const getSalesByCategory = () => {
    return categories.map(category => {
        return products
            .filter(product => product.category === category.name)
            .reduce((total, product) => total + product.sells, 0)
    })
}

//Obtener Unidades por categoría
const getUnitsRemainingByCategory = () => {
    return categories.map(category => {
        return products
            .filter(product => product.category === category.name)
            .reduce((total, product) => total + product.units, 0)
    })
}

//Crear gráfico
const createBarLineChart = (salesData, unitsData) => {
    const ctx = document.getElementById('salesChart').getContext('2d')
    new Chart(ctx, {
        type: 'bar', // Tipo de gráfico: barras
        data: {
            labels: ['Perro', 'Gato', 'Pequeñas mascotas'], // Categorías
            datasets: [
                {
                    label: 'Ventas por Categoría',
                    data: salesData, // Datos de ventas
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de barras
                    borderColor: 'rgba(255, 99, 132, 1)', // Color de borde de barras
                    borderWidth: 1,
                    yAxisID: 'y1', // Eje Y izquierdo para las ventas
                },
                {
                    label: 'Unidades Restantes',
                    data: unitsData, // Datos de unidades restantes
                    fill: false, // No rellena el área bajo la línea
                    borderColor: 'rgba(54, 162, 235, 1)', // Color de la línea
                    tension: 0.1, // Suaviza la curva
                    yAxisID: 'y2', // Eje Y derecho para las unidades restantes
                    pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Color de los puntos
                    pointRadius: 5 // Tamaño de los puntos de la línea
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y1: { // Eje Y izquierdo (ventas)
                    type: 'linear',
                    position: 'left',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Ventas'
                    }
                },
                y2: { // Eje Y derecho (unidades restantes)
                    type: 'linear',
                    position: 'right',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Unidades Restantes'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top' // Ubicación de la leyenda
                }
            }
        }
    })
}

const salesData = getSalesByCategory() // Ventas por categoría
const unitsData = getUnitsRemainingByCategory() // Unidades restantes por categoría

// Crear el gráfico con los datos obtenidos
createBarLineChart(salesData, unitsData)

