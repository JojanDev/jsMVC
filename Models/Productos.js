import connection from "../Utils/db.js";

class Productos {
  constructor(nombre, descripcion, precio, categoria_id) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.categoria_id = categoria_id;
  }

  /**
   * Metodo para obtener los registros de la base de datos
   * @returns {Array} Listado de las categorias en un arreglo
   */
  async getAll() {
    // try {
    //   const [rows] = await connection.query("select * from productos");
    //   console.log("Productos en BD:" + rows);
    //   return rows;
    // } catch (error) {
    //   throw new Error("Error al obtener las categorias");
    // }

    try {
      console.log("📌 Ejecutando consulta: SELECT * FROM productos");
      const [rows] = await connection.query("SELECT * FROM productos;");
      console.log("📌 Productos obtenidos:", rows);
      return rows;
    } catch (error) {
      console.error("❌ Error al obtener los productos:", error);
    }
  }

  async create() {
    try {
      const { result } = await connection.query(
        `insert into categorias(nombre, descripcion, precio, categoria_id) value
        (?,?,?,?)`,
        [this.nombre, this.descripcion, this.precio, this.categoria_id]
      );
      return {
        id: result.id,
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio,
        categoria_id: this.categoria_id,
      };
    } catch (error) {
      throw new Error("Error al crear la categoria");
    }
  }
}

export default Productos;
