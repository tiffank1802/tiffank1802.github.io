import { lazy, Suspense, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LuArrowRight, LuGraduationCap, LuWrench } from 'react-icons/lu';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import { pathways } from '../data/pathways';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import AcademicCard from '../components/AcademicCard';
const PdfModal = lazy(() => import('../components/PdfModal'));
import GlassCard from '../components/GlassCard';

const PathPage = ({ type }) => {
  const { lang } = useLanguage();
  const isMaster = type === 'master';
  const pathway = pathways[isMaster ? 'master' : 'engineer'];
  const { experiences, projects, coursework } = pathway;
  const [viewPdf, setViewPdf] = useState(null);
  const copy = isMaster ? {
    title: t('path_master_title', lang),
    subtitle: t('path_master_intro', lang),
    icon: <LuGraduationCap size={21} />,
    focus: t('path_master_focus', lang),
  } : {
    title: t('path_engineer_title', lang),
    subtitle: t('path_engineer_intro', lang),
    icon: <LuWrench size={21} />,
    focus: t('path_engineer_focus', lang),
  };

  return (
    <section className="section path-page">
      <motion.header className="path-hero" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <div className="path-kicker">{copy.icon}<span>{t('path_eyebrow', lang)}</span></div>
        <h1 className="page-title">{copy.title}</h1>
        <p className="page-subtitle">{copy.subtitle}</p>
        <div className="path-focus"><strong>{t('path_focus_label', lang)}</strong><span>{copy.focus}</span></div>
        <Link className="btn btn-primary" to="/cv">{t('path_cv_link', lang)} <LuArrowRight size={16} /></Link>
      </motion.header>

      <section className="path-section">
        <div className="section-header path-section-heading">
          <p className="section-label">{t('path_education_label', lang)}</p>
          <h2 className="section-title">{t('path_education_title', lang)}</h2>
        </div>
        <div className="education-grid">
          <GlassCard className="education-card">
            <span className="education-period">2024 — {lang === 'fr' ? 'septembre' : 'September'} 2026</span>
            <h3>{t('path_degree_title', lang)}</h3>
            <p>{t('path_degree_detail', lang)}</p>
            <strong>Centrale Lyon — ENISE</strong>
          </GlassCard>
          <GlassCard className="education-card">
            <span className="education-period">2019 — 2024</span>
            <h3>{t('path_previous_degree_title', lang)}</h3>
            <p>{t('path_previous_degree_detail', lang)}</p>
            <strong>ENSPY · Yaoundé</strong>
          </GlassCard>
        </div>
      </section>

      <section className="path-section">
        <div className="section-header path-section-heading">
          <p className="section-label">{t('path_timeline_label', lang)}</p>
          <h2 className="section-title">{t('path_experience_title', lang)}</h2>
          <p className="section-desc">{t('path_experience_desc', lang)}</p>
        </div>
        <div className="experience-grid">
          {experiences.map((exp, i) => <ExperienceCard key={exp.title.fr} exp={exp} lang={lang} delay={i * 0.05} />)}
        </div>
      </section>

      <section className="path-section">
        <div className="section-header path-section-heading">
          <p className="section-label">{t('path_work_label', lang)}</p>
          <h2 className="section-title">{t('path_projects_title', lang)}</h2>
          <p className="section-desc">{t('path_projects_desc', lang)}</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => <ProjectCard key={project.title.fr} project={project} lang={lang} delay={i * 0.035} onView={setViewPdf} />)}
        </div>
      </section>

      {coursework.length > 0 && (
        <section className="path-section">
          <div className="section-header path-section-heading">
            <p className="section-label">{t('path_courses_label', lang)}</p>
            <h2 className="section-title">{t('path_courses_title', lang)}</h2>
            <p className="section-desc">{t('path_courses_desc', lang)}</p>
          </div>
          <div className="academic-grid">
            {coursework.map((work, i) => <AcademicCard key={work.title.fr || work.title.en || i} work={work} lang={lang} delay={i * 0.02} onView={setViewPdf} />)}
          </div>
        </section>
      )}

      <section className="path-end-card">
        <h2>{t('path_more_title', lang)}</h2>
        <p>{t('path_more_desc', lang)}</p>
        <Link className="btn btn-card" to="/projects">{t('path_all_projects', lang)} <LuArrowRight size={15} /></Link>
      </section>

      <AnimatePresence>
        {viewPdf && (
          <Suspense fallback={<div className="pdf-status" role="status">{lang === 'fr' ? 'Chargement du lecteur PDF…' : 'Loading PDF viewer…'}</div>}>
            <PdfModal work={viewPdf} onClose={() => setViewPdf(null)} />
          </Suspense>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PathPage;
