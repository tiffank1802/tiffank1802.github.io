import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import GlassCard from '../components/GlassCard';
import Icon from '../components/Icon';
import { LuArrowRight, LuDownload } from 'react-icons/lu';

const HomePage = () => {
  const { lang } = useLanguage();

  return (
    <>
      <section id="about" className="hero-section">
        <GlassCard className="hero-content-glass">
          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-photo-frame">
              <img src="/moi.jpg" alt="Kevin Tongue" className="hero-photo" />
            </div>
          </motion.div>

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
              <LuArrowRight size={16} />
            </a>
            <a href="cv.pdf" download className="btn btn-card">
              <LuDownload size={16} />
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
              <span className="info-icon"><Icon name="grad-cap" className="icon-svg" /></span>
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
              <span className="info-icon"><Icon name="compass" className="icon-svg" /></span>
              <div>
                <div className="info-label">{t('info_location', lang)}</div>
                <div className="info-value">Saint-Étienne, France</div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><Icon name="mobility" className="icon-svg" /></span>
              <div>
                <div className="info-label">{t('info_mobility', lang)}</div>
                <div className="info-value">France & International</div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><Icon name="languages" className="icon-svg" /></span>
              <div>
                <div className="info-label">{t('info_languages', lang)}</div>
                <div className="info-value">FR (natif) · EN (B2) · DE</div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><Icon name="books" className="icon-svg" /></span>
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
