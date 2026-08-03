import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuExternalLink } from 'react-icons/lu';
import GlassCard from './GlassCard';

function getText(val, lang) {
  if (typeof val === 'object' && val !== null) return val[lang] || val.fr || val;
  return val;
}

const ProjectCard = ({ project, delay, lang = 'fr' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <GlassCard delay={delay} className="project-card" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="project-header">
        <div className="project-icon">{project.icon}</div>
        <div className="project-links">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <LuExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <h3 className="project-title">{getText(project.title, lang)}</h3>
      <p className="project-desc">{getText(project.description, lang)}</p>
      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="project-details">
            <p>{getText(project.details, lang)}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="project-tags">
        {project.tags.map((tag, i) => <span key={i} className="project-tag">{getText(tag, lang)}</span>)}
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
