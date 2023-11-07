import { Sequelize } from 'sequelize';
import Config from '.';

const sequelize = new Sequelize(Config.DB_DATABASE, Config.DB_USERNAME, Config.DB_PASSWORD, {
  host: Config.DB_HOST,
  port: Config.DB_PORT,
  dialect: Config.DB_DIALECT,
  logging: Config.APP_ENV !== 'production'
});

export default sequelize;
