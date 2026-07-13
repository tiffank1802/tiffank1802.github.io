import GlassCard from './GlassCard';

function getText(val, lang) {
  if (typeof val === 'object' && val !== null) return val[lang] || val.fr || val;
  return val;
}

const SkillCategory = ({ category, icon, skills, delay = 0, lang = 'fr' }) => (
  <GlassCard delay={delay} className="skill-category-card">
    <div className="skill-category-header">
      <span className="skill-category-icon">{icon}</span>
      <h3 className="skill-category-title">{getText(category, lang)}</h3>
    </div>
    <div className="skill-tags">
      {skills.map((skill, i) => (
        <span key={i} className="skill-tag">{getText(skill, lang)}</span>
      ))}
    </div>
  </GlassCard>
);

export default SkillCategory;
