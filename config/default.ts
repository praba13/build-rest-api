import dotenv from 'dotenv';
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 3500;

const MONGO_URL = process.env.MONGO_URL || '';

const SALTFACTOR = process.env.SALTFACTOR ? Number(process.env.SALTFACTOR) : 10;

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const ACCESS_TOKEN_TTL = process.env.ACCESS_TOKEN_TTL;

const REFRESH_TOKEN_TTL = process.env.REFRESH_TOKEN_TTL;

export default {
  port: SERVER_PORT,
  dbUri: MONGO_URL,
  saltWorkFactor: SALTFACTOR,
  publicKey: PUBLIC_KEY,
  privateKey: PRIVATE_KEY,
  accessTokenTtl: ACCESS_TOKEN_TTL,
  refreshTokenTtl: REFRESH_TOKEN_TTL
};
