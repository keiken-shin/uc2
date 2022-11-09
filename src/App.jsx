import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, HowItWorks, Services } from './pages';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Router>
        <div className="container">
          <Navbar />

          <main className="min-h-[calc(100vh_-_15rem_-_0.1rem)]">
            <Routes>
              <Route path="/our-services" element={<Services />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
