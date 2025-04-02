import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "johan_delgado_adso2894667",
  password: "wasm123456",
  database: "node_adso2894667",
});

export default connection;

// import mysql from "mysql2/promise";

// const connection = mysql.createPool({
//   host: "localhost",
//   user: "johan_delgado_adso2894667",
//   password: "wasm123456",
//   database: "node_adso2894667",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// export default connection;
