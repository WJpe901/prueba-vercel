const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos como CSS o imágenes desde una carpeta "public"
app.use(express.static("public"));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/views/index.html");
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
