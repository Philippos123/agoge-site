import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const ContactPage = lazy(() => import('./pages/contact'));
const OmOss = lazy(() => import('./pages/OmOss'));
const Onboarding = lazy(() => import('./pages/Onboarding'));
const LoginPage = lazy(() => import('./pages/login'));
const Company = lazy(() => import('./pages/company'));
const Dashboard = lazy(() => import('./pages/dashboard'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Laddar...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/omoss" element={<OmOss />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/company" element={<Company />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
