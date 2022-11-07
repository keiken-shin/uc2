import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, HowItWorks, Services } from './pages';

function App() {
  return (
    <div className="h-screen bg-primary">
      <Router>
        <div className="container h-full">
          <Navbar />

          <Routes>
            <Route path="/our-services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
