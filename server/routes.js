// Importing the 'express' module
const express = require('express');
const { API_GET_COUNTRY_DETAIL } = require('./controllers/countriesController');

// Express router object
const router = express.Router();


//Route - Country Detail
router.route('/country')
    .get(API_GET_COUNTRY_DETAIL)
    

// Exporting the router object
module.exports = router;