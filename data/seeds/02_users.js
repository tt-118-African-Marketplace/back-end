
exports.seed = async function (knex){
  await knex('users').insert([
    { username: 'Bobilo Raggins', password: "youaretheworst", department: "buyer" },
    { username: 'whatareyabuyin', password: "stuff", department: "seller" },
    { username: 'ian', password: "ian", department: "seller" },
    { username: 'whatareyasellin', password: "stuff", department: "buyer" },
  ])
}
