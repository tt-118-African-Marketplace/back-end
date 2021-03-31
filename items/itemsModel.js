const db = require("../data/config.js");

module.exports = {
    getItems,
    addItem,
    getItemsById,
    updateItem,
    deleteItem,
    find,
    getItemsByCategory
};

function getItems() {
    return db("items");
}

function addItem(item, id) {
    item.user_id = id
    return db("items").insert(item, "id");
}

function getItemsByCategory(category) {
    return db("items")
        .where({ category })

}

function getItemsById(id) {
    return db("items")
        .where({ id })
        .first();
}

function updateItem(id, changes) {
    return db("items")
        .where({ id })
        .update(changes);
}

function deleteItem(id) {
    return db("items")
        .where({ id })
        .del();
}

function find(category) {
    const query = db('items').select('id', 'name', 'category');
    if (category === null) {
        return query
    } else if (category) {
        query.where({ category });
    }
    return query;
}