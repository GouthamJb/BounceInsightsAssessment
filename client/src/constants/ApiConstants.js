let BASE_URL;

if (process.env.STAGE == 'production') {
  // Deployed URL
  BASE_URL = "https://bounce-insights-assessment.vercel.app/api/country";
} else {
  // Localhost URL
  
  BASE_URL = "http://localhost:8000/api/country";
}

export { BASE_URL };
