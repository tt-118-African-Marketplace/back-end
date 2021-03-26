
exports.seed = async function(knex){
  await knex('items').insert([
    { name: 'Magic Beans', description: "Heard to be found in the farthest reaches of never never land, these seeds have properties that are OUT OF THIS WORLD GURL", price: 5 , location: "Never Never Land",category: "Magical Elements", user_id: 1 },
    { name: 'beans', description: "normal beans", price: 4, location: "Africa", category: "Beans", user_id: 2 },
    { name: 'tacos', description: "Who doesn't like tacos?", price: 5, location: "Tuesday", category: "Other", user_id: 3 },
    { name: 'Ibonia Estate Coffee', description: "This full body varietal is cultivated at an altitude of 1700 meters above sea level in volcanic red soils. It produces a rich flavour in the cup with strong tasting notes of apricot and just a hint of starfruit.", price: 56, location: "Kiambu Kenya", category: "Coffee", user_id: 3 },
    { name: 'Gititu Estate Coffee', description: "This full body varietal is cultivated at an altitude of 1700 meters above sea level in volcanic red soils. It produces a light flavour, with notes of blackberry, lime zest, and rhubarb.", price: 56, location: "Kiambu Kenya", category: "Coffee", user_id: 3 },
    { name: 'Nyeri Hill Estate Coffee', description: "This meticulously prepared East African coffee is famous for its rich body, pleasant, vibrant acidity, fragrant aroma, and winy aftertaste with overtones of berries and citrus. Kenyan coffee is commonly described as having an almost sweet taste accompanied by wine-like or fruity overtones. They are well-known all over the world and sought after for their bold, intense, full-bodied flavors accompanied by overtones of berry, citrus fruits, and mild floral fragrances.  It produces a light flavour, with notes of raspberry, cranberry, fresh-cut redwood, and alyssum-like flowers", price: 56, location: "Kiambu Kenya", category: "Coffee", user_id: 4 },
  ])
}
