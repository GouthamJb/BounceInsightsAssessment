import React, { StrictMode} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import CountrySearchPage from './pages/CountrySearchPage';

function App() {
  
  return (
   <StrictMode>
    <Router>
        <Routes>
          <Route exact="true" path="/" element={<CountrySearchPage/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Router>
    </StrictMode>
  );
}

export default App;