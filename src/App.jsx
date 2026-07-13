import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import AcademicPage from './pages/AcademicPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const location = useLocation();

  return (
    <LanguageProvider>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <radialGradient id="lens-mask" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="30%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="lens-mask-light" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="50%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <filter id="lg-dist" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.009 0.009" numOctaves="3" seed="92" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2.5" result="blurred" />
          <feImage href="#lens-mask" result="lens" />
          <feComposite in="blurred" in2="lens" operator="in" result="lensedNoise" />
          <feDisplacementMap in="SourceGraphic" in2="lensedNoise" scale="80" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="lg-dist-light" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.005 0.005" numOctaves="2" seed="42" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="1.5" result="blurred" />
          <feImage href="#lens-mask-light" result="lens" />
          <feComposite in="blurred" in2="lens" operator="in" result="lensedNoise" />
          <feDisplacementMap in="SourceGraphic" in2="lensedNoise" scale="40" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <Navigation />

      <div className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/academic" element={<AcademicPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>

        <footer className="footer">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Kevin Tongue — Propulsé par React & GitHub Pages.
          </p>
        </footer>
      </div>
    </LanguageProvider>
  );
}
