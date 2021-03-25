exports.seed = async function (knex){
  await knex("users_items").insert([
    {users_id: 1 , items_id: 1}
  ])
}