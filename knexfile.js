// Update with your config settings.
// module.exports = {

//   development: {
//     useNullAsDefault: true,
//     client: 'sqlite3',
//     connection: {
//       filename: './data/db_1.db3'
//     },
//     migrations: {
//       directory: './src/data/migrations'
//     },
//     seeds: {
//       directory: './src/data/seeds'
//     },
//   },
//   pool: {
//     afterCreate: (con,done) =>{
//       conn.run("PRAGMA foreign_keys = ON",done)
//     }
//   }

// };

const pgConnection = process.env.DATABASE_URL;
module.exports = {

  development: {
    useNullAsDefault: true,
    client: 'sqlite3',
    connection: {
      filename: './data/db_1.db3',
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};