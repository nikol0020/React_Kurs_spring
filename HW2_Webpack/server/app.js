import path from 'path';
import express from 'express';
import cors from 'cors';

import router from './routes';

const app = express();

const assets = express.static(path.join(__dirname, '../'));
// const assets = express.static(path.join{__dirname, '../'});

app.use(cors({}));
app.use(assets);

app.get('*', router);

export default app;