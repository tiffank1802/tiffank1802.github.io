import GlassCard from './GlassCard';

const SkillCategory = ({ category, icon, skills, delay }) => (
  <GlassCard delay={delay} className="skill-category-card">
    <div className="skill-category-header">
      <span className="skill-category-icon">{icon}</span>
      <h3 className="skill-category-title">{category}</h3>
    </div>
    <div className="skill-tags">
      {skills.map((skill, i) => (
        <span key={skill} className="skill-tag">{skill}</span>
      ))}
    </div>
  </GlassCard>
);

export default SkillCategory;
