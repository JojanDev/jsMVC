import connection from "../Utils/db.js";

class Categoria {
  /**
   * Metodo para obtener los registros de la base de datos
   * @returns {Array} Listado de las categorias en un arreglo
   */
  async getAll() {
    try {
      const [rows] = await connection.query("select * from categorias");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener las categorias");
    }
  }

  // async getByID(id) {
  //   try {
  //     const [rows] = await connection.query(
  //       "select * from categorias where id = ?",
  //       [id]
  //     );
  //     return rows;
  //   } catch (error) {
  //     throw new Error("Error al obtener la categorias");
  //   }
  // }

  async create(nombre, descripcion) {
    try {
      const [result] = await connection.query(
        `insert into categorias(nombre, descripcion) value
        (?,?)`,
        [nombre, descripcion]
      );
      return {
        nombre,
        descripcion,
      };
    } catch (error) {
      throw new Error("Error al crear la categoria");
    }
  }

  async update(id, nombre, descripcion) {
    try {
      const [result] = await connection.query(
        `update categorias set nombre = ?, descripcion = ? where id = ?;`,
        [nombre, descripcion, id]
      );
      console.log(result);
      if (result.affectedRows === 0) {
        throw new Error("Categoria no encontrada");
      }

      return {
        id,
        nombre,
        descripcion,
      };
    } catch (error) {
      throw new Error(error.message || "Error al actualizar la categoria");
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
      if (Object.keys(object).length === 0)
        throw new Error("No hay campos a actualizar");

      let sql = `update categorias set `;
      for (const key in object) {
        console.log("campo = " + key);
        sql += `${key} = '${object[key]}' ,`;
      }

      let consulta = sql.slice(0, -1);
      consulta += `where id = ${id};`;

      const [result] = await connection.query(consulta);

      if (result.affectedRows === 0) throw new Error("Categoria no encontrada");
      else return { message: "Actualizado parcialmente!!!" };
    } catch (error) {
      throw new Error(
        error.message || "Error al actualizar parcialmente la categoria"
      );
    }
  }

  async estaRelacionaConProductos(categoria_id) {
    const [rows] = await connection.query(
      "select * from productos where categoria_id = ?",
      [categoria_id]
    );

    return rows.length > 0;
  }

  async delete(categoria_id) {
    try {
      const categoriaRelacionada = await this.estaRelacionaConProductos(
        categoria_id
      );

      if (categoriaRelacionada) {
        throw new Error(
          "No se puede eliminar la categoria con productos asociados"
        );
      }
      const [result] = await connection.query(
        `DELETE FROM categorias WHERE id = ${categoria_id}`
      );

      if (result.affectedRows === 0) {
        throw new Error("Categoria no encontrada");
      }

      return {
        error: "Eliminado correctamente",
      };
    } catch (error) {
      throw new Error(error.message || "Error al eliminar la categoria");
    }
  }
}

export default Categoria;
