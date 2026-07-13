import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';

function getText(val, lang) {
  if (typeof val === 'object' && val !== null) return val[lang] || val.fr || val;
  return val;
}

const ExperienceCard = ({ exp, delay, lang = 'fr' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetail = !!exp.projectDetail;
  return (
    <GlassCard delay={delay} className="experience-card" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="exp-header">
        <div className="exp-icon">{exp.icon}</div>
        <div className="exp-meta">
          <span className="exp-date">{getText(exp.date, lang)}</span>
          <span className="exp-location">{getText(exp.location, lang)}</span>
        </div>
      </div>
      <h3 className="exp-title">{getText(exp.title, lang)}</h3>
      <p className="exp-org">
        {exp.orgLogos?.map((logo, i) => (
          <img key={i} src={logo} alt="" className="exp-org-logo" />
        ))}
        {getText(exp.org, lang)}
      </p>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="exp-details-container"
          >
            {hasDetail ? (
              <div className="exp-detail-rich">
                <p className="exp-detail-desc">{getText(exp.projectDetail.description, lang)}</p>

                {exp.projectDetail.images?.length > 0 && (
                  <div className="exp-detail-images">
                    {exp.projectDetail.images.map((img, i) => (
                      <div key={i} className="exp-detail-image-card" onClick={(e) => e.stopPropagation()}>
                        <img src={img.url} alt={img.caption} loading="lazy" />
                        <span className="exp-detail-img-caption">{getText(img.caption, lang)}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="exp-detail-links">
                  {exp.projectDetail.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-detail-link" onClick={(e) => e.stopPropagation()}>
                      {link.icon && <img src={`/icons/${link.icon}.svg`} alt="" className="icon-svg-inline" />}
                      {getText(link.label, lang)}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="exp-details"
              >
                {exp.details.map((d, i) => <li key={i}>{getText(d, lang)}</li>)}
              </motion.ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="exp-tags">
        {exp.tags.map((tag, i) => <span key={i} className="project-tag">{getText(tag, lang)}</span>)}
      </div>
      <div className="exp-expand">
        {isExpanded
          ? (lang === 'fr' ? '▲ Réduire' : '▲ Collapse')
          : hasDetail
            ? (lang === 'fr' ? '▼ Voir le projet détaillé' : '▼ View detailed project')
            : (lang === 'fr' ? '▼ Voir les détails' : '▼ View details')}
      </div>
    </GlassCard>
  );
};

export default ExperienceCard;
