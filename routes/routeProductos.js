import express from "express";
import ProductosController from "../controller/ProductosController.js";
import { validarProducto } from "../Middleware/validarProducto.js";

const router = express.Router();

router.get("/", ProductosController.getAllProductos);

router.post("/", validarProducto, ProductosController.createProducto);

router.put("/:id", validarProducto, ProductosController.updateProducto);

router.patch("/:id", ProductosController.patchProducto);

router.delete("/:id", ProductosController.deleteProducto);

export default router;
