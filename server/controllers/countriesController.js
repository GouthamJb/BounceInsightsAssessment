// Importing the 'COUNTRIESRESTAPISERVICE' module
const COUNTRIESRESTAPISERVICE = require("../apiServices/countriesRestAPIService");
// Importing the application constants
const AppConstants = require("../constants/appconstants");

// Route Handler - Get the details of a country name
const API_GET_COUNTRY_DETAIL = (req, res) => {
    // Get name from request query parameters
    const { name } = req.query;

    // Throw bad request response if the required parameter 'name' is not present
    if (!name)
        return res.status(400).json({
            status: false,
            message: AppConstants.MISSINGPARAMERRORMESSAGE
        });

    // Call method to fetch country detail
    COUNTRIESRESTAPISERVICE.FetchCountryDetail(name)
        .then(data => {
            // Return a successful response with the fetched country data
            return res.status(200).json({
                status: true,
                message: AppConstants.SUCCESSMESSAGE,
                result: data
            });
        })
        .catch(error => {
            // Handle errors and return an appropriate error response
            return res.status(error.statuscode).json({
                status: false,
                message: error.message,
            });
        });
}

// Exporting the route handler for use in other modules
module.exports = { API_GET_COUNTRY_DETAIL };
