const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) return console.error('DB error:', err);
    console.log('Conectado a la base de datos MySQL.');
});

// ----------- ESTUDIANTE -----------
app.get('/api/estudiantes', (req, res) => {
    db.query('SELECT * FROM ESTUDIANTE', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener estudiantes' });
        res.json(results);
    });
});

app.post('/api/estudiantes', (req, res) => {
    const {
      nombre_estudiante,
      apellido_estudiante,
      edad_estudiante,
      correo_estudiante,
      contraseña_estudiante,
      telefono_estudiante
    } = req.body;
  
    console.log("📥 Datos recibidos:", req.body); // Log de entrada
  
    const sql = `INSERT INTO ESTUDIANTE (nombre_estudiante, apellido_estudiante, edad_estudiante, correo_estudiante, contraseña_estudiante, telefono_estudiante)
                 VALUES (?, ?, ?, ?, ?, ?)`;
  
    db.query(sql, [
      nombre_estudiante,
      apellido_estudiante,
      edad_estudiante,
      correo_estudiante,
      contraseña_estudiante,
      telefono_estudiante
    ], (err, result) => {
      if (err) {
        console.error("❌ Error al insertar estudiante:", err); // Log de error
        return res.status(500).json({ error: 'Error al insertar estudiante' });
      }
  
      res.status(201).json({
        id_estudiante: result.insertId,
        nombre_estudiante,
        apellido_estudiante,
        correo_estudiante
      });
    });
  });
  

// ----------- PROFESORES -----------
app.get('/api/profesores', (req, res) => {
    db.query('SELECT * FROM PROFESORES', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener profesores' });
        res.json(results);
    });
});

app.post('/api/profesores', (req, res) => {
    const { nombre_profesor, apellido_profesor, identificacion_profesor, correo_profesor, contraseña_profesor, telefono_profesor } = req.body;
    const sql = `INSERT INTO PROFESORES (nombre_profesor, apellido_profesor, identificacion_profesor, correo_profesor, contraseña_profesor, telefono_profesor) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [nombre_profesor, apellido_profesor, identificacion_profesor, correo_profesor, contraseña_profesor, telefono_profesor], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al insertar profesor' });
        res.json({ id_profesor: result.insertId, nombre_profesor, apellido_profesor });
    });
});

// ----------- SECRETARIAS -----------
app.get('/api/secretarias', (req, res) => {
    db.query('SELECT * FROM SECRETARIAS', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener secretarias' });
        res.json(results);
    });
});

app.post('/api/secretarias', (req, res) => {
    const { nombre_secretaria, apellido_secretaria, identificacion_secretaria, correo_secretaria, contraseña_secretaria, telefono_secretaria } = req.body;
    const sql = `INSERT INTO SECRETARIAS (nombre_secretaria, apellido_secretaria, identificacion_secretaria, correo_secretaria, contraseña_secretaria, telefono_secretaria) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [nombre_secretaria, apellido_secretaria, identificacion_secretaria, correo_secretaria, contraseña_secretaria, telefono_secretaria], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al insertar secretaria' });
        res.json({ id_secretaria: result.insertId, nombre_secretaria, apellido_secretaria });
    });
});

// ----------- RECTORES -----------
app.get('/api/rectores', (req, res) => {
    db.query('SELECT * FROM RECTORES', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener rectores' });
        res.json(results);
    });
});

app.post('/api/rectores', (req, res) => {
    const { nombre_rector, apellido_rector, identificacion_rector, correo_rector, contraseña_rector, telefono_rector } = req.body;
    const sql = `INSERT INTO RECTORES (nombre_rector, apellido_rector, identificacion_rector, correo_rector, contraseña_rector, telefono_rector) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [nombre_rector, apellido_rector, identificacion_rector, correo_rector, contraseña_rector, telefono_rector], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al insertar rector' });
        res.json({ id_rector: result.insertId, nombre_rector, apellido_rector });
    });
});

// ----------- COORDINADORES -----------
app.get('/api/coordinadores', (req, res) => {
    db.query('SELECT * FROM COORDINADORES', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener coordinadores' });
        res.json(results);
    });
});

app.post('/api/coordinadores', (req, res) => {
    const { nombre_coordinador, apellido_coordinador, identificacion_coordinador, correo_coordinador, contraseña_coordinador, telefono_coordinador } = req.body;
    const sql = `INSERT INTO COORDINADORES (nombre_coordinador, apellido_coordinador, identificacion_coordinador, correo_coordinador, contraseña_coordinador, telefono_coordinador) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [nombre_coordinador, apellido_coordinador, identificacion_coordinador, correo_coordinador, contraseña_coordinador, telefono_coordinador], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al insertar coordinador' });
        res.json({ id_coordinador: result.insertId, nombre_coordinador, apellido_coordinador });
    });
});

// ----------- TUTORES -----------
app.get('/api/tutores', (req, res) => {
    db.query('SELECT * FROM TUTORES_LEGALES', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener tutores' });
        res.json(results);
    });
});

app.post('/api/tutores', (req, res) => {
    const { nombre_tutorlegal, apellido_tutorlegal, identificacion_tutorlegal, correo_tutorlegal, contraseña_tutorlegal, telefono_tutorlegal } = req.body;
    const sql = `INSERT INTO TUTORES_LEGALES (nombre_tutorlegal, apellido_tutorlegal, identificacion_tutorlegal, correo_tutorlegal, contraseña_tutorlegal, telefono_tutorlegal) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [nombre_tutorlegal, apellido_tutorlegal, identificacion_tutorlegal, correo_tutorlegal, contraseña_tutorlegal, telefono_tutorlegal], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al insertar tutor' });
        res.json({ id_tutorlegal: result.insertId, nombre_tutorlegal, apellido_tutorlegal });
    });
});

// ----------- MATERIAS -----------
app.get('/api/materias', (req, res) => {
    db.query('SELECT * FROM MATERIAS', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener materias' });
        res.json(results);
    });
});

app.post('/api/materias', (req, res) => {
    const { nombre_materia } = req.body;
    db.query('INSERT INTO MATERIAS (nombre_materia) VALUES (?)', [nombre_materia], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al insertar materia' });
        res.json({ id_materia: result.insertId, nombre_materia });
    });
});

// ----------- RECTORES -----------
app.get('/api/rectores', (req, res) => {
    db.query('SELECT * FROM RECTORES', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener rectores' });
        res.json(results);
    });
});

app.post('/api/rectores', (req, res) => {
    const { nombre_rector, apellido_rector, correo_rector, contraseña_rector, telefono_rector } = req.body;
    const sql = `INSERT INTO RECTORES (nombre_rector, apellido_rector, correo_rector, contraseña_rector, telefono_rector) VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [nombre_rector, apellido_rector, correo_rector, contraseña_rector, telefono_rector], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al insertar rector' });
        res.json({ id_rector: result.insertId, nombre_rector, apellido_rector });
    });
});

// ----------- COORDINADORES -----------
app.get('/api/coordinadores', (req, res) => {
    db.query('SELECT * FROM COORDINADORES', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener coordinadores' });
        res.json(results);
    });
});

app.post('/api/coordinadores', (req, res) => {
    const { nombre_coordinador, apellido_coordinador, correo_coordinador, contraseña_coordinador, telefono_coordinador } = req.body;
    const sql = `INSERT INTO COORDINADORES (nombre_coordinador, apellido_coordinador, correo_coordinador, contraseña_coordinador, telefono_coordinador) VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [nombre_coordinador, apellido_coordinador, correo_coordinador, contraseña_coordinador, telefono_coordinador], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al insertar coordinador' });
        res.json({ id_coordinador: result.insertId, nombre_coordinador, apellido_coordinador });
    });
});

// ----------- ASISTENCIAS -----------
app.get('/api/asistencias', (req, res) => {
    db.query('SELECT * FROM ASISTENCIA', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener asistencias' });
        res.json(results);
    });
});

app.post('/api/asistencias', (req, res) => {
    const { fecha_asistencia, hora_asistencia, id_estudiante } = req.body;
    const checkSql = 'SELECT * FROM ASISTENCIA WHERE fecha_asistencia = ? AND id_estudiante = ?';
    db.query(checkSql, [fecha_asistencia, id_estudiante], (err, existing) => {
        if (err) return res.status(500).json({ error: 'Error al verificar asistencia' });
        if (existing.length > 0) return res.status(400).json({ error: 'Ya existe una asistencia registrada para este estudiante en esa fecha' });

        const insertSql = 'INSERT INTO ASISTENCIA (fecha_asistencia, hora_asistencia, id_estudiante) VALUES (?, ?, ?)';
        db.query(insertSql, [fecha_asistencia, hora_asistencia, id_estudiante], (err, result) => {
            if (err) return res.status(500).json({ error: 'Error al registrar asistencia' });
            res.json({ id_asistencia: result.insertId, fecha_asistencia, hora_asistencia, id_estudiante });
        });
    });
});

// ----------- EXCUSAS -----------
app.get('/api/excusas', (req, res) => {
    db.query('SELECT * FROM EXCUSAS', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener excusas' });
        res.json(results);
    });
});

app.post('/api/excusas', (req, res) => {
    const { fecha_excusa, hora_excusa, correo_secretaria, id_materia, id_profesor, id_estudiante, id_secretaria } = req.body;
    const sql = `INSERT INTO EXCUSAS (fecha_excusa, hora_excusa, correo_secretaria, id_materia, id_profesor, id_estudiante, id_secretaria)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [fecha_excusa, hora_excusa, correo_secretaria, id_materia, id_profesor, id_estudiante, id_secretaria], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al insertar excusa' });
        res.json({ id_excusas: result.insertId, fecha_excusa, hora_excusa });
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
