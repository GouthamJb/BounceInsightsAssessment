// Importing the application constants
const AppConstants = require("../constants/appconstants");

// Custom error class for validation errors
class ErrorHelper extends Error {
    /**
     * Creates an instance of ValidationErrorHelper.
     * @param {boolean} isNotFound - Indicates whether the error is due to a resource not being found.
     */
    constructor(isNotFound) {
        // Call the parent constructor with the error message
        super(isNotFound ? AppConstants.COUNTRYNOTFOUNDMESSAGE : AppConstants.DEFAULTERRORMESSAGE);

        // Set the status code based on whether it's a not found error or a default error
        this.statuscode = isNotFound ? 404 : 500;
    }
}

// Exporting the ValidationErrorHelper class for use in other modules
module.exports = ErrorHelper;
