import Categoria from "../Models/Categoria.js";

class CategoriaController {
  static getAllCategorias = async (req, res) => {
    const objCategoria = new Categoria();
    const categorias = await objCategoria.getAll();
    res.json(categorias);
  };

  static createCategoria = async (req, res) => {
    try {
      const { nombre, descripcion } = req.body;
      const objCategoria = new Categoria();
      const categoria = await objCategoria.create(nombre, descripcion);
      res.status(201).json(categoria);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static updateCategoria = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, descripcion } = req.body;
      const objCategoria = new Categoria();
      const categoria = await objCategoria.update(id, nombre, descripcion);
      res.status(201).json(categoria);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static patchCategoria = async (req, res) => {
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
      const objCategoria = new Categoria();

      const categoria = await objCategoria.patch(id, object);
      res.status(201).json(categoria);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static deleteCategoria = async (req, res) => {
    try {
      const { id } = req.params;
      const objCategoria = new Categoria();
      const categoria = await objCategoria.delete(id);
      res.status(201).json(categoria);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

export default CategoriaController;
