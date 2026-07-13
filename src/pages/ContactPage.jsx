import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import GlassCard from '../components/GlassCard';

const ContactPage = () => {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';

  return (
    <section className="section contact-section">
      <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        {t('contact_title', lang)}
      </motion.h1>
      <motion.p className="page-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} style={{ maxWidth: 500 }}>
        {t('contact_subtitle', lang)}
      </motion.p>

      <div className="contact-grid">
        <GlassCard delay={0}>
          <h2 className="section-title" style={{ marginBottom: 20 }}>{t('contact_me', lang)}</h2>
          <div className="contact-items">
            <div className="contact-row">
              <span className="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <span>kevin.tongue@etu.enise.fr</span>
            </div>
            <div className="contact-row">
              <span className="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/><path d="M12 2a10 10 0 0 1 10 10"/>
                </svg>
              </span>
              <a href="https://www.linkedin.com/in/ktongue" target="_blank" rel="noopener noreferrer">linkedin.com/in/ktongue</a>
            </div>
            <div className="contact-row">
              <span className="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </span>
              <a href="https://github.com/tiffank1802" target="_blank" rel="noopener noreferrer">github.com/tiffank1802</a>
            </div>
            <div className="contact-row">
              <span className="contact-icon">
                <img src="/icons/huggingface.svg" alt="" className="icon-svg icon-svg-inline" />
              </span>
              <a href="https://huggingface.co/ktongue" target="_blank" rel="noopener noreferrer">huggingface.co/ktongue</a>
            </div>
          </div>
        </GlassCard>

        <GlassCard delay={0.1}>
          <h2 className="section-title" style={{ marginBottom: 20 }}>{isFr ? 'Disponibilité' : 'Availability'}</h2>
          <ul className="avail-list">
            <li><span className="dot-green" /> {isFr ? 'Stage PFE (5–6 mois)' : 'Master Internship (5–6 months)'}</li>
            <li><span className="dot-green" /> {isFr ? 'Alternance' : 'Work-Study'}</li>
            <li><span className="dot-green" /> CDD</li>
            <li><span className="dot-green" /> CDI</li>
          </ul>
          <p className="avail-note">
            {isFr
              ? 'Ouvert aux opportunités en France et à l\'international — conception mécanique, simulation numérique, R&D.'
              : 'Open to opportunities in France and internationally — mechanical design, numerical simulation, R&D.'}
          </p>
        </GlassCard>

        <GlassCard delay={0.15}>
          <h2 className="section-title" style={{ marginBottom: 20 }}>{isFr ? 'À propos de ce site' : 'About this site'}</h2>
          <p className="about-text" style={{ fontSize: '0.9rem', lineHeight: 1.6 }} dangerouslySetInnerHTML={{
            __html: isFr
              ? 'Site web statique construit avec <strong>React</strong>, <strong>Vite</strong> et <strong>Framer Motion</strong>. Thème <strong>Liquid Glass</strong> avec distorsion lensée (SVG filters) et reflets spéculaires. Déployé sur <strong>GitHub Pages</strong>.'
              : 'Static website built with <strong>React</strong>, <strong>Vite</strong> and <strong>Framer Motion</strong>. <strong>Liquid Glass</strong> theme with lensed distortion (SVG filters) and specular highlights. Deployed on <strong>GitHub Pages</strong>.'
          }} />
        </GlassCard>
      </div>
    </section>
  );
};

export default ContactPage;
