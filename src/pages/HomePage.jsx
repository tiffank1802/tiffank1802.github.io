import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import GlassCard from '../components/GlassCard';

const HomePage = () => {
  const { lang } = useLanguage();

  return (
    <>
      <section id="about" className="hero-section">
        <GlassCard className="hero-content-glass">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="hero-badge">
              <span className="dot" />
              {t('hero_badge', lang)}
            </div>
          </motion.div>

          <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Kevin Tongue<br />
            {t('hero_title_role', lang)}
          </motion.h1>

          <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            {t('hero_subtitle', lang)}
          </motion.p>

          <motion.div className="hero-actions" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <a href="/projects" className="btn btn-primary">
              {t('hero_btn_projects', lang)}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="cv.pdf" download className="btn btn-card">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {t('hero_btn_cv', lang)}
            </a>
          </motion.div>
        </GlassCard>
      </section>

      <section className="section">
        <div className="about-grid">
          <GlassCard className="about-main" delay={0}>
            <h2 className="section-title" style={{ marginBottom: 20 }}>{t('about_title', lang)}</h2>
            <p className="about-text">
              <span dangerouslySetInnerHTML={{ __html: t('about_p1', lang) }} />
              <br /><br />
              <span dangerouslySetInnerHTML={{ __html: t('about_p2', lang) }} />
              <br /><br />
              <span dangerouslySetInnerHTML={{ __html: t('about_p3', lang) }} />
            </p>
          </GlassCard>
          <GlassCard className="info-card" delay={0.1}>
            <div className="info-item">
              <span className="info-icon"><img src="/icons/grad-cap.svg" alt="" className="icon-svg" /></span>
              <div>
                <div className="info-label">{t('info_education', lang)}</div>
                <div className="info-value">
                  <span className="info-logos">
                    <img src="/logos/centrale-lyon.png" alt="" className="info-logo" />
                    <img src="/logos/enspy.png" alt="" className="info-logo" />
                  </span>
                  Centrale Lyon–ENISE & ENSPY
                </div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><img src="/icons/compass.svg" alt="" className="icon-svg" /></span>
              <div>
                <div className="info-label">{t('info_location', lang)}</div>
                <div className="info-value">Saint-Étienne, France</div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><img src="/icons/contact.svg" alt="" className="icon-svg" /></span>
              <div>
                <div className="info-label">{t('info_mobility', lang)}</div>
                <div className="info-value">France & International</div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><img src="/icons/contact.svg" alt="" className="icon-svg" /></span>
              <div>
                <div className="info-label">{t('info_languages', lang)}</div>
                <div className="info-value">FR (natif) · EN (B2) · DE</div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><img src="/icons/books.svg" alt="" className="icon-svg" /></span>
              <div>
                <div className="info-label">{t('info_availability', lang)}</div>
                <div className="info-value">Sept./Oct. 2026</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
};

export default HomePage;
