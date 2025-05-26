import express from "express";
import morgan from "morgan";
import { pool } from "./src/db.js";
import estudiantesRoutes from "./src/routes/estudiantes.routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("FaceVerify funcionando correctamente");
});

app.use("/api/estudiantes", estudiantesRoutes);

app.listen(port, () => {
    console.log(`Servidor de FaceVerify corriendo en http://localhost:${port}`);
});