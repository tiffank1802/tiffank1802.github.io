import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', delay = 0, mouseTracking = false }) => {
  const handleMouseMove = (e) => {
    if (!mouseTracking) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (e.clientX - rect.left - centerX) / centerX;
    const deltaY = (e.clientY - rect.top - centerY) / centerY;
    card.style.transform = `
      perspective(1000px)
      rotateY(${deltaX * 4}deg)
      rotateX(${-deltaY * 4}deg)
      translateZ(0)
      translateY(-2px)
    `;
  };

  const handleMouseLeave = (e) => {
    if (!mouseTracking) return;
    e.currentTarget.style.transform = '';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`glass-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Conteneur 1 : le châssis (ombre et isolation) — .glass-card lui-même */}
      {/* Conteneur 2 : le corps en verre (flou et réfraction) */}
      <div className="glass-body" />
      {/* Conteneur 3 : le reflet (bordure brillante et brillance supérieure) */}
      <div className="glass-surface" />
      <div className="glass-content-wrap">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
