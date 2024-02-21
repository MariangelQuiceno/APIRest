import express from 'express';
import characterRoute from './routes/characters.route';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());



app.use(bodyParser.json());

app.use('/characters', characterRoute);

export default app;