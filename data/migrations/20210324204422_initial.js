const { table } = require("../config");

exports.up = async function(knex) {
  await knex.schema.createTable("items", (table)=>{
    table.increments("id")
    table.string("name").nullable()
    table.string("description").nullable()
    table.integer("price").nullable()
    table.string("location").nullable()
    table.string("category").nullable()
    table.string("URL").nullable()
    // table.integer("user_id")
  })
  await knex.schema.createTable("users", (table) =>{
      table.increments("id")
      table.string("username").notNull().unique()
      table.string("password").notNull()
      table.string("department").notNull()
})
    await knex.schema.createTable("users_items", (table)=>{
        table.integer("users_id").notNull().references("id").inTable("users")
        table.integer("items_id").notNull().references("id").inTable("items")
        table.primary(["users_id","items_id"])
    })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("user_items")
  await knex.schema.dropTableIfExists("users")
  await knex.schema.dropTableIfExists("items")
};
