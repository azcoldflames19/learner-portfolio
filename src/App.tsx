import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Entries from './pages/Entries';
import About from './pages/About';
import SettingsButton from './components/SettingsButton';
import { SettingsProvider } from './context/SettingsContext';
import backgroundImage from './assets/background.jpg';

function App() {
  return (
    <SettingsProvider>
      <Router>
        <div 
          className="min-h-screen"
          style={{
            background: `linear-gradient(rgba(46, 52, 64, 0.85), rgba(46, 52, 64, 0.85)), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/entries" element={<Entries />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </AnimatePresence>
          </main>
          <SettingsButton />
        </div>
      </Router>
    </SettingsProvider>
  );
}

export default App;
