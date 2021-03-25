
exports.seed = async function (knex){
  await knex("users").insert([
    {username:"Bobilo Raggins", password:"youaretheworst",department:"buyer"}
  ])
}
