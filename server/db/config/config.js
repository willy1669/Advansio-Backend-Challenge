
const dotenv = require("dotenv");

dotenv.config();
const databaseEnvDetails = {
  username: process.env.DB_CONFIG_USERNAME,
  password: process.env.DB_CONFIG_PASSWORD,
  host: process.env.DB_CONFIG_HOST,
  dialect: 'postgres',
  dialectOptions: { 
    ssl: {
      require: true,
      rejectUnauthorized: false,
   },
   keepAlive: true,
  },
  ssl: true
};

const config = {
  development: {
    database: process.env.DB_CONFIG_DEV,
    ...databaseEnvDetails,
  },
  test: {
    database: process.env.DB_CONFIG_TEST,
    ...databaseEnvDetails,
  },
  production: {
    database: process.env.DATABASE_PROD,
    ...databaseEnvDetails,
  },
};

module.exports = config;
