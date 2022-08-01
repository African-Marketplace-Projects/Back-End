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




module.exports = router;
