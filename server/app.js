// Importing the 'cors' module
const cors = require('cors');
// Importing the 'express' module
const express = require('express');
// Importing the 'routes' module
const routes = require("./routes");
const AppConstants = require('./constants/appconstants');


// Express Object
const app = express();
//cors configuration
app.use(cors());
// Handle Routes
app.use('/api/', routes)

// Starting the server and listening for incoming connections on the specified port
app.listen(AppConstants.PORT, () => {     
    // Log the server status      
    console.log(`App server started successfully on PORT:${AppConstants.PORT}`); 
});
