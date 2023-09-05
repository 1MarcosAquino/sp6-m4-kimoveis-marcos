import 'express-async-errors';
import 'reflect-metadata';
import express, { Application } from 'express';
import { handleErrors } from './erros';
import route from './routes';

const app: Application = express();

app.use(express.json());

app.use('/users', route.users);
app.use('/login', route.login);
app.use('/categories', route.categories);
app.use('/realEstate', route.realEstate);
app.use('/schedules', route.schedules);

app.use(handleErrors);

export default app;
