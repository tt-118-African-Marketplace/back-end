
exports.seed = async function(knex){
  await knex("items").insert([
    {name:"Magic Beans",description:"Heard to be found in the farthest reaches of never never land, these seeds have properties that are OUT OF THIS WORLD GURL",price:"$555555555556",location:"Never Never Land",category:"Magical Elements", url:""}
  ])
}
