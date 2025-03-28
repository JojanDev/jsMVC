import express from "express";
import bodyParser from "body-parser";
import routeCategorias from "./routes/routeCategorias.js";

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ "extended": true }));

app.use("/categorias", routeCategorias);

app.listen(3000, () => {
  console.log("SERVER is running");
})