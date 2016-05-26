var express = require('express');
var router = express.Router();
var controller = require('../controllers/main.js');

router.get('/', controller.index);

router.post('/create', controller.create);
router.post('/delete', controller.delete);
router.get('/edit/:id', controller.edit);
router.post('/update/:id', controller.update);
//router.get('/about', controller.about);
//router.get('/contact', controller.contact);

// router.get('/', controller.index);
// router.get('/about', controller.about);
// router.get('/contact', controller.contact);

module.exports = router;
