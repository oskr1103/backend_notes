import express from "express";
import cors from "cors";
//Importamos la conexión a la base de datos
import db from "./database/db.js";

import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/blogs", blogRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port http://localhost:8000/");
});
