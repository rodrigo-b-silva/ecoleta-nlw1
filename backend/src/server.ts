const PORT = process.env.PORT || '3333';
import express from 'express';
import { errors } from 'celebrate';
import cors from 'cors';
import path from 'path'
import { json, urlencoded } from 'body-parser';
import routes from './routes';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})