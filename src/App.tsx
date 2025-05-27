import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Entries from './pages/Entries';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-primary-800">
        <Navbar />
        <main className="container py-8">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/entries" element={<Entries />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;
