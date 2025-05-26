import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM estudiantes");
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener los estudiantes:", error);
        res.status(500).json({ error: "Error al obtener los estudiantes" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM estudiantes WHERE id = ?", [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: "Estudiante no encontrado" });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error("Error al obtener los estudiantes:", error);
        res.status(500).json({ error: "Error al obtener los estudiantes" });
    }
});

export default router;