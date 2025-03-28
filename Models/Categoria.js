import connection from "../Utils/db.js";

class Categoria {
  constructor(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }

  /**
   * Metodo para obtener los registros de la base de datos
   * @returns {Array} Listado de las categorias en un arreglo
   */
  async getAll() {
    try {
      const [rows] = await connection.query("select * from categorias;");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener las categorias");
    }
  }

  async create() {
    try {
      const {result} = await connection.query(`insert into categorias(nombre, descripcion) value
        (?,?)`, [this.nombre, this.descripcion]);
      return {
        id: result.id,
        nombre: this.nombre,
        descripcion: this.descripcion
      };
    } catch (error) {
      throw new Error("Error al crear la categoria");
      
    }
  }
}

export default Categoria;