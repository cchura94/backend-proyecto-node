"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// importar módulos
// const express = require("express");
// variables auxiliares
let PORT = 3000; // configuración de módulos

let app = (0, _express.default)(); // levantar el servidor

app.listen(PORT, function () {
  console.log(`El servidor está levantado en http://127.0.0.1:${PORT}`);
});