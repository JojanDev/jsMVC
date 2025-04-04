import Producto from "../Models/Productos.js";

class ProductosController {
  static getAllProductos = async (req, res) => {
    const objProducto = new Producto();
    const productos = await objProducto.getAll();
    res.json(productos);
  };

  static createProducto = async (req, res) => {
    try {
      const { nombre, descripcion, precio, categoria_id } = req.body;
      const objProducto = new Producto();
      const productos = await objProducto.create(
        nombre,
        descripcion,
        precio,
        categoria_id
      );
      res.status(201).json(productos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static updateProducto = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        nombre,
        descripcion,
        precio,
        categoria_id,
        created_at,
        updated_at,
      } = req.body;
      const objProducto = new Producto();
      const producto = await objProducto.update(
        id,
        nombre,
        descripcion,
        precio,
        categoria_id,
        created_at,
        updated_at
      );
      res.status(201).json(producto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static patchProducto = async (req, res) => {
    // try {
    //   const { id } = req.params;
    //   const objCategoria = new Categoria();
    //   const obtener = await objCategoria.getByID(id);
    //   console.log(typeof(obtener[0].nombre));

    //   const { nombre = obtener[0].nombre, descripcion = obtener[0].descripcion } = req.body;
    //   const categoria = await objCategoria.patch(id, nombre, descripcion);
    //   res.status(201).json(categoria);
    // } catch (error) {
    //   res.status(400).json({error: error.message});
    // }
    try {
      const { id } = req.params;
      const object = req.body;
      const objCategoria = new Producto();

      const categoria = await objCategoria.patch(id, object);
      res.status(201).json(categoria);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static deleteProducto = async (req, res) => {
    try {
      const { id } = req.params;
      const objCategoria = new Producto();
      const categoria = await objCategoria.delete(id);
      res.status(201).json(categoria);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

export default ProductosController;
