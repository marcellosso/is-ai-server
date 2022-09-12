import express from 'express';
import path from 'path';
import InfoRoutes from './routes/info.routes';

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public/img')))

// Routes
app.use('/info', InfoRoutes)

export default app;