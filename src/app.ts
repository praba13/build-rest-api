import express from 'express';
import config from 'config';
import 'dotenv/config';

import connect from './utils/connect';

//const port = config.get<number>('port');
const app = express();

const PORT = process.env.PORT;
app.listen(process.env.PORT, async () => {
  console.log(`Server is running on port!!${PORT}`);
});
