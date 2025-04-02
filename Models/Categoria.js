import connection from "../Utils/db.js";

class Categoria {

  /**
   * Metodo para obtener los registros de la base de datos
   * @returns {Array} Listado de las categorias en un arreglo
   */
  async getAll() {
    try {
      const [rows] = await connection.query("select * from categorias");
      console.log("Categorías en BD:", rows);
      return rows;
    } catch (error) {
      throw new Error("Error al obtener las categorias");
    }
  }

  async getByID(id) {
    try {
      const [rows] = await connection.query("select * from categorias where id = ?", [id]);
      return rows;
    } catch (error) {
      throw new Error("Error al obtener la categorias");
    }
  }

  async create(nombre, descripcion) {
    try {
      const [result] = await connection.query(
        `insert into categorias(nombre, descripcion) value
        (?,?)`,
        [nombre, descripcion]
      );
      return {  
        id: result.id,
        nombre,
        descripcion
      };
    } catch (error) {
      throw new Error("Error al crear la categoria");
    }
  }

  async update(id, nombre, descripcion) {

    try {
      const [result] = await connection.query(
        `update categorias set nombre = "?", descripcion = "?" where id = ?;`,
        [nombre, descripcion, id]
      );
      console.log(result);
      if (result.affectedRows === 0) {
        throw new Error("Categoria no encontrada");
      }

      return { 
        id: id,
        nombre: this.nombre,
        descripcion: this.descripcion
      };
    } catch (error) {
      throw new Error("Error al actualizar la categoria");
    }
  }

  async patch(id, nombre, descripcion) {

    try {
      const [result] = await connection.query(
        `update categorias set nombre = ?, descripcion = ? where id = ?;`,
        [nombre, descripcion, id]
      );
      if (result.affectedRows === 0) {
        throw new Error("Categoria no encontrada");
      }

      return { 
        id,
        nombre,
        descripcion
      };
    } catch (error) {
      throw new Error("Error al patch la categoria");
    }
  }

  async delete(id) {

    try {
      await connection.query(
        `DELETE FROM categorias WHERE id = ${id}`
      );
      return { 
        error: "Eliminado correctamente"
      };
    } catch (error) {
      throw new Error("Error al eliminar la categoria");
    }
  }
}

export default Categoria;
