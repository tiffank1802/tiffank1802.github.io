import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';

const ProjectCard = ({ project, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <GlassCard delay={delay} className="project-card" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="project-header">
        <div className="project-icon">{project.icon}</div>
        <div className="project-links">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="project-details">
            <p>{project.details}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="project-tags">
        {project.tags.map((tag, i) => <span key={i} className="project-tag">{tag}</span>)}
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
