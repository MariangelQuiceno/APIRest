import express from 'express';
import characterRoute from './routes/characters.route'; // Importa el enrutador de personajes

const app = express();

// Elimina la definición del nuevo enrutador
// const router = express.Router();

// Define una ruta de inicio directamente en la aplicación principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación de personajes!');
});

// Monta el enrutador de productos en la ruta /characters
app.use('/characters', characterRoute);

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
