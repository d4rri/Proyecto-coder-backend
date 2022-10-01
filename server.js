const express = require("express");

const Contenedor = require("./claseContenedor.js");

const productos = new Contenedor("./Proyecto-coder-backend/productos.txt");

const app = express();

app.get("/", (request, response)=>{
    response.send("<h1 style='color:blue'>Bienvenidos al servidor express</h1>")
})

app.get('/producto-random', async (req, res) => {
	const getProduct = await productos.getAll();
	const productRandom = getProduct[Math.floor(Math.random() * getProduct.length)];
	res.send(productRandom);
});

app.get("/productos", async (req,res)=>{
	const getProductos = await productos.getAll();
	res.send(getProductos);
})

app.listen(8080,()=>{
    console.log("server listening on port 8080")
})