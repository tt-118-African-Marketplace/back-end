
exports.seed = async function(knex){
  await knex ("users_items").truncate()
  await knex ("users").truncate()
  await knex ("items").truncate()
}