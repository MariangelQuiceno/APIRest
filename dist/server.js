"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const characters_route_1 = __importDefault(require("./routes/characters.route")); // Importa el enrutador de productos
const app = (0, express_1.default)();
// Monta el enrutador de productos en la ruta /character
app.use('/characters', characters_route_1.default);
// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
