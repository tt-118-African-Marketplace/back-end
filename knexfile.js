// Update with your config settings.
module.exports = {

  development: {
    useNullAsDefault: true,
    client: 'sqlite3',
    connection: {
      filename: './data/db_1.db3'
    }
  },
  pool: {
    afterCreate: (con,done) =>{
      conn.run("PRAGMA foreign_keys = ON",done)
    }
  }

};

