// Update with your config settings.

require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
            
            // database: `example`,
            database: `${process.env.db_name}`,
            user: `${process.env.user}`,
            password: `${process.env.pass}`,
            host: `${process.env.db_thing}`,
            port: 5432
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    }
  }
};
