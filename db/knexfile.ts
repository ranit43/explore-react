// Update with your config settings.
const config = {

  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'changeme',
      database : 'knex_pg',
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      extension: 'ts', //define work typescript to migrations
      directory: __dirname + '/knex/migrations',
      tableName: 'migrations_history',
    },
    seeds: {
      extension: 'ts', //define work typescript to migrations
      directory: __dirname + '/knex/seeds'
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};


export default config