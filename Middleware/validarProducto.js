export const validarProducto = (req, res, next) => {
  const { nombre, descripcion, precio, categoria_id } = req.body;

  if (!nombre || nombre.trim() === "") {
    return res
      .status(400)
      .json({ message: "El nombre en la producto es obligatorio" });
  }
  if (!descripcion || descripcion.trim() === "") {
    return res
      .status(400)
      .json({ message: "La descripcion del producto es obligatorio" });
  }
  if (!precio || precio.trim() === "") {
    return res
      .status(400)
      .json({ message: "El precio del producto es obligatorio" });
  }
  if (!categoria_id || categoria_id.trim() === "") {
    return res
      .status(400)
      .json({ message: "El identificador de la categoria es obligatorio" });
  }

  next();
};
