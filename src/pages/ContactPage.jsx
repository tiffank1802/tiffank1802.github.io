import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';
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
                <LuMail size={18} />
              </span>
              <span>kevin.tongue@etu.enise.fr</span>
            </div>
            <div className="contact-row">
              <span className="contact-icon">
                <LuLinkedin size={18} />
              </span>
              <a href="https://www.linkedin.com/in/ktongue" target="_blank" rel="noopener noreferrer">linkedin.com/in/ktongue</a>
            </div>
            <div className="contact-row">
              <span className="contact-icon">
                <LuGithub size={18} />
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
