import dotenv from 'dotenv';
dotenv.config();

const Config = {};

// App
Config.APP_PORT = process.env.APP_PORT || 3000;
Config.SERVICE_NAME = process.env.SERVICE_NAME;

export default Config;