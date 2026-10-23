import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuDownload, LuEye, LuFileText, LuLanguages } from 'react-icons/lu';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import GlassCard from '../components/GlassCard';

const versions = [
  { id: 'engineer', file: '/cv.pdf', preview: '/parcours/ingenieur', titleKey: 'cv_engineer_title', descKey: 'cv_engineer_desc', labelKey: 'cv_engineer_badge' },
  { id: 'research', file: '/cv-recherche.pdf', preview: '/parcours/master', titleKey: 'cv_research_title', descKey: 'cv_research_desc', labelKey: 'cv_research_badge' },
];

export default function CvPage() {
  const { lang } = useLanguage();
  const [availablePdfs, setAvailablePdfs] = useState({});

  useEffect(() => {
    let active = true;
    Promise.all(versions.map(async ({ id, file }) => {
      try {
        const response = await fetch(file, { method: 'HEAD' });
        const type = response.headers.get('content-type') || '';
        return [id, response.ok && type.includes('application/pdf')];
      } catch {
        return [id, false];
      }
    })).then(entries => {
      if (active) setAvailablePdfs(Object.fromEntries(entries));
    });
    return () => { active = false; };
  }, []);

  return (
    <section className="section cv-page">
      <motion.header initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <p className="section-label">{t('cv_eyebrow', lang)}</p>
        <h1 className="page-title">{t('cv_title', lang)}</h1>
        <p className="page-subtitle">{t('cv_intro', lang)}</p>
      </motion.header>
      <div className="cv-version-grid">
        {versions.map((version, index) => (
          <GlassCard key={version.id} className="cv-version-card" delay={index * 0.08}>
            <span className="cv-version-icon"><LuFileText size={24} /></span>
            <span className="cv-version-badge">{t(version.labelKey, lang)}</span>
            <h2>{t(version.titleKey, lang)}</h2>
            <p>{t(version.descKey, lang)}</p>
            <div className="cv-version-meta"><LuLanguages size={16} /> {t('cv_language_note', lang)}</div>
            <div className="cv-version-actions">
              <Link className="btn btn-primary" to={version.preview}><LuEye size={16} />{t('cv_view', lang)}</Link>
              {availablePdfs[version.id] ? (
                <>
                  <a className="btn btn-card" href={version.file} target="_blank" rel="noopener noreferrer"><LuEye size={16} />{t('cv_open_pdf', lang)}</a>
                  <a className="btn btn-card" href={version.file} download><LuDownload size={16} />{t('cv_download', lang)}</a>
                </>
              ) : (
                <span className="cv-pdf-pending">{t('cv_pdf_pending', lang)}</span>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
      <p className="cv-note">{t('cv_note', lang)}</p>
    </section>
  );
}
