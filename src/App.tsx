import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Hub from './pages/Hub';
import Offerings from './pages/Offerings';
import Events from './pages/Events';
import Journey from './pages/Journey';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hub />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/events" element={<Events />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050403] text-[#f5f0e6]">
        <Navigation />
        <AnimatedRoutes />
        <Contact variant="floating" />
      </div>
    </BrowserRouter>
  );
}

export default App;
