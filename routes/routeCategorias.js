import express from "express";
import CategoriaController from "../controller/CategoriaController.js";
import { validarCategoria } from "../Middleware/validarCategoria.js";

const router = express.Router();

router.get("/", CategoriaController.getAllCategorias);

router.post("/", validarCategoria, CategoriaController.createCategoria);

router.put("/:id", validarCategoria, CategoriaController.updateCategoria);

router.patch("/:id", CategoriaController.patchCategoria);

router.delete("/:id", CategoriaController.deleteCategoria);

export default router;
