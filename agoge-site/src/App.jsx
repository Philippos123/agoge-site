import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Analys from './pages/Analys';
import ContactPage from './pages/contact';
import OmOss from './pages/OmOss';
import Onboarding from './pages/Onboarding';
import LoginPage from './pages/login';
import Utveckling from './pages/utveckling';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analys" element={<Analys />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/omoss" element={<OmOss />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/utveckling" element={<Utveckling />} />

        
        
      </Routes>
    </Router>
  );
}

export default App;
