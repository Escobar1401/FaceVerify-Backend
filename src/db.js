import mysql from "mysql2";

export const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "SQLpassword",
    database: "reconocimiento_asistencia",
    authPlugins: {
        mysql_native_password: () => () => Buffer.from("SQLpassword")
    }
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }
    console.log("Conectado a la Base de Datos FaceVerify");
    connection.release();
});