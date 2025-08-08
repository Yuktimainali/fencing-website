import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './HomePageComponent/HomePage';
import StoreSection from './StorePageComponent/StoreComponent';
import SummerCampPage from './SummerCamp/SummerCamp';
import FounderPage from './HomeNavPages/FromFounderPage/FounderPage'; // Import the new founder page
import ProgramOverviewPage from './ProgramNavPages/ProgramOverView';
import PrivateFencingLessonsPage from './ProgramNavPages/PrivateTutoring';
import PoliciesPage from './HomeNavPages/FromFounderPage/PolicyPage';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop /> {/* This ensures pages load from top when navigating */}
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policies" element={<PoliciesPage />}/>
          <Route path="/store" element={<StoreSection />} />
          <Route path="/summercamp" element={<SummerCampPage />} />
          <Route path="/founder" element={<FounderPage />} /> {/* Add founder route */}
          <Route path="/program" element={<ProgramOverviewPage />} /> {/* Assuming program is also part of the store section */}
          <Route path= "/privateLessons" element={<PrivateFencingLessonsPage />} /> {/* Assuming private lessons are also part of the store section */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
