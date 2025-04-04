import connection from "../Utils/db.js";

class Productos {
  /**
   * Metodo para obtener los registros de la base de datos
   * @returns {Array} Listado de las categorias en un arreglo
   */
  async getAll() {
    try {
      const [rows] = await connection.query("select * from productos");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener los productos");
    }
  }

  async create(nombre, descripcion, precio, categoria_id) {
    try {
      const [result] = await connection.query(
        `insert into productos(nombre, descripcion, precio, categoria_id) value
        (?,?,?,?)`,
        [nombre, descripcion, precio, categoria_id]
      );
      return {
        nombre,
        descripcion,
        precio,
        categoria_id,
      };
    } catch (error) {
      throw new Error("Error al crear el producto");
    }
  }

  async update(
    id,
    nombre,
    descripcion,
    precio,
    categoria_id,
    created_at,
    updated_at
  ) {
    try {
      const [result] = await connection.query(
        `UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, categoria_id = ? WHERE id = ?;`,
        [nombre, descripcion, precio, categoria_id, id]
      );
      console.log(result);
      if (result.affectedRows === 0) {
        throw new Error("Producto no encontrado");
      }

      return {
        id,
        nombre,
        descripcion,
        precio,
        categoria_id,
      };
    } catch (error) {
      throw new Error(error.message || "Error al actualizar el producto");
    }
  }

  async patch(/*id, nombre, descripcion*/ id, object) {
    // try {
    //   const [result] = await connection.query(
    //     `update categorias set nombre = ?, descripcion = ? where id = ?;`,
    //     [nombre, descripcion, id]
    //   );
    //   if (result.affectedRows === 0) {
    //     throw new Error("Categoria no encontrada");
    //   }
    //   return {
    //     id,
    //     nombre,
    //     descripcion,
    //   };
    // } catch (error) {
    //   throw new Error("Error al patch la categoria");
    // }

    try {
      console.log(object);

      if (Object.keys(object).length === 0) {
        throw new Error("No hay campos a actualizar");
      }

      let sql = `update productos set `;
      for (const key in object) {
        sql += `${key} = "${object[key]}" ,`;
      }

      let consulta = sql.slice(0, -1);
      consulta += `where id = ${id};`;

      const [result] = await connection.query(consulta);

      if (result.affectedRows === 0) throw new Error("Producto no encontrado");
      else return { message: "Producto actualizado parcialmente!!!" };
    } catch (error) {
      throw new Error(
        error.message || "Error al actualizar parcialmente el producto"
      );
    }
  }

  async delete(id) {
    try {
      await connection.query(`DELETE FROM productos WHERE id = ${id}`);
      return {
        error: "Producto eliminado correctamente",
      };
    } catch (error) {
      throw new Error("Error al eliminar el producto");
    }
  }
}

export default Productos;
