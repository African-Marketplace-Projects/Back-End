const router = require('express').Router();
const Item = require('./items-model');

//need to be able to add items to 


router.get('/', (req, res, next) => {
    Item.get()
    .then(items => {
      if (!items) {
          res.status(404).json([])
      } else {
          res.json(items)
      }
    }) 
    .catch(next)
});

router.post('/', (req, res, next) => {
    const {item_name, item_price, item_description, item_location } = req.body;
    if(!item_name || !item_price || !item_description || !item_location){
        res.status(400).json({
            message: "All text fields are required"
        })
    } else {
        Item.addItem({item_name, item_price, item_description, item_location})
        .then(({item_id}) => {
            return Item.findById(item_id)
        })
        .then(item => {
            res.status(201).json(item)
        })
        .catch(err => {
            res.status(500).json({
                message: "there was an error while saving the user to the database"
            })
        })
    }
})




module.exports = router;
