import dotenv from 'dotenv';
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 3500;

const MONGO_URL = process.env.MONGO_URL || '';

const SALTFACTOR = process.env.SALTFACTOR ? Number(process.env.SALTFACTOR) : 10;

export default {
  port: SERVER_PORT,
  dbUri: MONGO_URL,
  saltWorkFactor: SALTFACTOR
};
