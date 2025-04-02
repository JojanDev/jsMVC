export const validarCategoria = (req, res, next) => {

  const { nombre, descripcion } = req.body;

  if (nombre.trim() === "" || !nombre) {
    return res.status(400).json({ message: "El nombre en la categoria es obligatorio"});
  }
  if (descripcion.trim() === "" || !descripcion) {
    return res.status(400).json({ message: "La descripcion de las categoria es obligatorio"});
  }

  next();
}