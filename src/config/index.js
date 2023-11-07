import dotenv from 'dotenv';
dotenv.config();

const Config = {};

// App
Config.APP_ENV = process.env.APP_ENV;
Config.APP_PORT = process.env.APP_PORT || 3000;
Config.SERVICE_NAME = process.env.SERVICE_NAME;
Config.DB_DATABASE = process.env.DB_DATABASE;
Config.DB_USERNAME = process.env.DB_USERNAME;
Config.DB_PASSWORD = process.env.DB_PASSWORD;
Config.DB_DIALECT = process.env.DB_DIALECT;

export default Config;