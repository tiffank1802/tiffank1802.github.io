import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';

const ExperienceCard = ({ exp, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetail = !!exp.projectDetail;
  return (
    <GlassCard delay={delay} className="experience-card" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="exp-header">
        <div className="exp-icon">{exp.icon}</div>
        <div className="exp-meta">
          <span className="exp-date">{exp.date}</span>
          <span className="exp-location">{exp.location}</span>
        </div>
      </div>
      <h3 className="exp-title">{exp.title}</h3>
      <p className="exp-org">
        {exp.orgLogos?.map((logo, i) => (
          <img key={i} src={logo} alt="" className="exp-org-logo" />
        ))}
        {exp.org}
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
                <p className="exp-detail-desc">{exp.projectDetail.description}</p>

                {exp.projectDetail.images?.length > 0 && (
                  <div className="exp-detail-images">
                    {exp.projectDetail.images.map((img, i) => (
                      <div key={i} className="exp-detail-image-card" onClick={(e) => e.stopPropagation()}>
                        <img src={img.url} alt={img.caption} loading="lazy" />
                        <span className="exp-detail-img-caption">{img.caption}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="exp-detail-links">
                  {exp.projectDetail.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-detail-link" onClick={(e) => e.stopPropagation()}>
                      {link.icon && <img src={`/icons/${link.icon}.svg`} alt="" className="icon-svg-inline" />}
                      {link.label}
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
                {exp.details.map((d, i) => <li key={i}>{d}</li>)}
              </motion.ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="exp-tags">
        {exp.tags.map((tag, i) => <span key={i} className="project-tag">{tag}</span>)}
      </div>
      <div className="exp-expand">
        {isExpanded ? '▲ Réduire' : hasDetail ? '▼ Voir le projet détaillé' : '▼ Voir les détails'}
      </div>
    </GlassCard>
  );
};

export default ExperienceCard;
