import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const pages = [
  { path: '/', label: 'À propos' },
  { path: '/skills', label: 'Compétences' },
  { path: '/experience', label: 'Expérience' },
  { path: '/projects', label: 'Projets' },
  { path: '/academic', label: 'Rapports' },
  { path: '/contact', label: 'Contact' },
];

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <motion.nav className="glass-nav" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
      <Link to="/" className="nav-brand">
        <span className="nav-logo">KT</span>
        <span className="nav-name">Kevin Tongue</span>
      </Link>
      <div className="nav-links">
        {pages.map((p) => (
          <Link key={p.path} to={p.path} className={`nav-link ${pathname === p.path ? 'active' : ''}`}>
            {p.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
