import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Analys from './pages/Analys';
import ContactPage from './pages/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analys" element={<Analys />} />
        <Route path="/contact" element={<ContactPage />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
