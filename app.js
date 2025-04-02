import express from "express";
import bodyParser from "body-parser";
import routeCategorias from "./routes/routeCategorias.js";
import routeProductos from "./routes/routeProductos.js";
const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use("/categorias", routeCategorias);
app.use("/productos", routeProductos);

app.listen(3000, () => {
  console.log("SERVER is running");
});
