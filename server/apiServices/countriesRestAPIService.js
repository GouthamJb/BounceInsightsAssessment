// Importing the 'ApiConstants' module
const ApiConstants = require("../constants/apiConstants");
// Importing the 'axios' module for making HTTP requests
const axios = require('axios');
// Importing the custom  error helper
const ErrorHelper = require("../helpers/errorHelper");

// Define the COUNTRIESRESTAPISERVICE class
class COUNTRIESRESTAPISERVICE {

    // Asynchronous method to fetch country details
    static async FetchCountryDetail(countryName) {
        // Query parameters
        const queryParams = {
            fullText: true,
        }

        try {
            // Making a GET request using axios
            const response = await axios.get(`${ApiConstants.BASEURL}${ApiConstants.COUNTRYDETAILENDPOINT}${countryName}`, { params: queryParams });

            // Returning the API response data
            return response.data;
        } catch (error) {
            // Log the error on the server side for debugging purposes
            console.log("Error: ", error);

            // Handling errors
            if (error.response) {
                // The request was made and the server responded with a status code
                if (error.response.status === 404) {
                    // If the status code is 404 (indicating country name not found), throw a custom error
                    throw new ErrorHelper(true);
                }
            }

            // If it's not a 404 error, throw the default error
            throw new ErrorHelper(false);
        }
    }
}

// Export the COUNTRIESRESTAPISERVICE class for use in other modules
module.exports = COUNTRIESRESTAPISERVICE;
