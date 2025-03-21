import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Teams from './pages/Teams';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Games from './pages/Games';
import Achievements from './pages/Achievements';

function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/games" element={<Games />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;