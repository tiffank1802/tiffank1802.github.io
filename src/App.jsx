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
import { useEffect } from 'react';

export default function App() {
  const location = useLocation();

  // ── Generate SVG displacement map matching viewport ──
  useEffect(() => {
    function buildDisplacementMap() {
      const w = Math.max(window.innerWidth, 400);
      const h = 600;
      const r = 20;
      const border = Math.min(w, h) * 0.035;
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
        <defs>
          <linearGradient id="x" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="y" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="black"/>
        <rect width="${w}" height="${h}" rx="${r}" fill="url(#x)"/>
        <rect width="${w}" height="${h}" rx="${r}" fill="url(#y)" style="mix-blend-mode:difference"/>
        <rect x="${border}" y="${border}" width="${w - border*2}" height="${h - border*2}" rx="${r}"
              fill="hsl(0 0% 50% / 0.93)" style="filter:blur(11px)"/>
      </svg>`;
      const uri = `data:image/svg+xml,${encodeURIComponent(svg)}`;
      document.querySelectorAll('#lg-dist feImage, #lg-dist-light feImage').forEach(el => {
        el.setAttribute('href', uri);
      });
    }
    buildDisplacementMap();
    window.addEventListener('resize', buildDisplacementMap);
    return () => window.removeEventListener('resize', buildDisplacementMap);
  }, []);

  return (
    <LanguageProvider>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          {/* ── Liquid glass displacement map (gradient-based) ── */}
          <linearGradient id="lg-x" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#000" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
          <linearGradient id="lg-y" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000" />
            <stop offset="100%" stopColor="blue" />
          </linearGradient>

          {/* ── Main liquid glass filter ── */}
          <filter id="lg-dist" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
            <feImage x="0" y="0" width="100%" height="100%" result="map" preserveAspectRatio="none" />
            {/* Red channel (horizontal displacement) */}
            <feDisplacementMap in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="G" scale="-120" result="dispR" />
            <feColorMatrix in="dispR" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />
            {/* Green channel (vertical displacement) */}
            <feDisplacementMap in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="G" scale="-110" result="dispG" />
            <feColorMatrix in="dispG" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />
            {/* Blue channel (extra distortion) */}
            <feDisplacementMap in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="G" scale="-100" result="dispB" />
            <feColorMatrix in="dispB" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />
            {/* Recombine channels → chromatic aberration */}
            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur in="output" stdDeviation="0.5" />
          </filter>

          {/* ── Lighter variant for smaller elements ── */}
          <filter id="lg-dist-light" x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="sRGB">
            <feImage x="0" y="0" width="100%" height="100%" result="map" preserveAspectRatio="none" />
            <feDisplacementMap in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="G" scale="-60" result="dispR" />
            <feColorMatrix in="dispR" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />
            <feDisplacementMap in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="G" scale="-55" result="dispG" />
            <feColorMatrix in="dispG" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />
            <feDisplacementMap in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="G" scale="-50" result="dispB" />
            <feColorMatrix in="dispB" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />
            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur in="output" stdDeviation="0.3" />
          </filter>
        </defs>
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
