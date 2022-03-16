import express from "express";
import cors from "cors";
//Importamos la conexión a la base de datos
import db from "./database/db.js";

import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);

try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.log(`El error es: ${error}`);
}

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(8000, () => {
  console.log("Server is running on port http://localhost:8000/");
});
