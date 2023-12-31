// Class to encapsulate application-related constants
class AppConstants {
    // Defining the PORT number (8000)
    static PORT = 8000;

    // Defining Request Successful message
    static SUCCESSMESSAGE = "Successful";

    // Defining the Country Not Found error message
    static COUNTRYNOTFOUNDMESSAGE = "Sorry, we couldn't find any information for the specified country. Please check the country name and try again.";

    // Defining the general error Message
    static DEFAULTERRORMESSAGE = "Oops! Something went wrong. Please try again later or contact support for assistance.";

    // Defining missing arguments error message
    static MISSINGPARAMERRORMESSAGE = "Please provide a country name.";
}

// Export the AppConstants class
module.exports = AppConstants;
