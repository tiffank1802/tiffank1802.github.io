import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';

const pages = [
  { path: '/', labelKey: 'nav_about' },
  { path: '/skills', labelKey: 'nav_skills' },
  { path: '/experience', labelKey: 'nav_experience' },
  { path: '/projects', labelKey: 'nav_projects' },
  { path: '/academic', labelKey: 'nav_academic' },
  { path: '/contact', labelKey: 'nav_contact' },
];

const Navigation = () => {
  const { pathname } = useLocation();
  const { lang, toggleLang } = useLanguage();

  return (
    <motion.nav
      className="glass-nav"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link to="/" className="nav-brand">
        <span className="nav-logo">KT</span>
        <span className="nav-name">Kevin Tongue</span>
      </Link>
      <div className="nav-links">
        {pages.map((p) => (
          <Link
            key={p.path}
            to={p.path}
            className={`nav-link ${pathname === p.path ? 'active' : ''}`}
          >
            {t(p.labelKey, lang)}
          </Link>
        ))}
      </div>
      <button className="lang-toggle" onClick={toggleLang}>
        {t('nav_lang', lang)}
      </button>
    </motion.nav>
  );
};

export default Navigation;
