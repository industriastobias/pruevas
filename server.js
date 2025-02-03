const express = require('express');
const app = express();
const port = 3000;

let soldItems = [
    { name: "Anillo de oro", code: "001", barcode: "123456", price: 100, discount: 10, description: "Anillo elegante", category: "Joyería", quantitySold: 5 },
    { name: "Collar de plata", code: "002", barcode: "789012", price: 50, discount: 5, description: "Collar moderno", category: "Joyería", quantitySold: 3 }
];

// Ruta API para obtener los productos vendidos
app.get('/api/productos-vendidos', (req, res) => {
    res.json(soldItems);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
