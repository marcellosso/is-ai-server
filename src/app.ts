import express from 'express';
import path from 'path';
import cors from 'cors'
import morgan from 'morgan';
import { SERVER_PORT } from './config';
import InfoRoutes from './routes/info.routes';
import AuthRoutes from './routes/auth.routes';
import StatusRoutes from './routes/status.routes';
import { errorHandler } from './middlewares/errorHandlerMiddleware';
import { corsAllOptions } from './cors';

const app = express();

app.set("port", SERVER_PORT);
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public/img')));

app.use(cors(corsAllOptions));
app.use(morgan('common'));

// Routes
app.use('/info', InfoRoutes);
app.use('/auth', AuthRoutes);
app.use('/health', StatusRoutes);

app.use(errorHandler);

export default app;