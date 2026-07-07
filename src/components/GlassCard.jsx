import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`glass-card ${className}`}
  >
    <div className="glass-filter" />
    <div className="glass-overlay" />
    <div className="glass-specular" />
    <div className="glass-border-highlight" />
    <div className="glass-content-wrap">{children}</div>
  </motion.div>
);

export default GlassCard;
