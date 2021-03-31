const router = require('express').Router();
const Items = require('./itemsModel.js');
const restricted = require('../auth/middleware/restrictred.js');
const validateItemsCon = require('../auth/middleware/validateItemsCon.js');
const validateItemId = require('../auth/middleware/validateItemId.js');


//get items
router.get("/", restricted, (req, res) => {
    Items.getItems()
        .then(items => {
            res.status(200).json(items);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//add item
router.post("/additem", restricted, validateItemsCon, (req, res) => {
    const id = req.jwtToken.subject
    Items.addItem(req.body, id)
        .then(item => {
            res.status(201).json(item);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//get users items
router.get("/:id", validateItemId, (req, res) => {
    const id = req.params.id;

    Items.getItemsById(id)
        .then(item => {
            res.status(200).json(item);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//update users item
router.put("/:id", restricted, validateItemId, validateItemsCon, (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Items.updateItem(id, changes)
        .then(updatedItem => {
            res.status(201).json(updatedItem);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//delete users item
router.delete("/:id", restricted, validateItemId, (req, res) => {
    const id = req.params.id;

    Items.deleteItem(id)
        .then(deletedItem => {
            res.status(200).json({
                message: "Item has been deleted."
            });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//get items by category
router.get("/category/:category", (req, res) => {
    const category = req.params.category;

    Items.getItemsByCategory(category)
        .then(item => {
            res.status(200).json(item);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;