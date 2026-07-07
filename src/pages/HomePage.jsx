import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const HomePage = () => (
  <>
    <section id="about" className="hero-section">
      <GlassCard className="hero-content-glass">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="hero-badge">
            <span className="dot" />
            Disponible Septembre/Octobre 2026 — Mobilité internationale
          </div>
        </motion.div>

        <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          Kevin Tongue<br />
          Ingénieur Mécanique
        </motion.h1>

        <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          Conception produit, mécanique des structures et simulation numérique avancée.
          Double diplôme Centrale Lyon–ENISE & ENSPY — spécialisé en mécanique computationnelle,
          éléments finis et méthodes stochastiques.
        </motion.p>

        <motion.div className="hero-actions" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <a href="/projects" className="btn btn-primary">
            Voir mes projets
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <a href="cv.pdf" download className="btn btn-card">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Télécharger CV
          </a>
        </motion.div>
      </GlassCard>
    </section>

    <section className="section">
      <div className="about-grid">
        <GlassCard className="about-main" delay={0}>
          <h2 className="section-title" style={{ marginBottom: 20 }}>À propos de moi</h2>
          <p className="about-text">
            Futur <strong>ingénieur en génie mécanique</strong> et titulaire d'un <strong>Master 2 en Mécanique des Solides Numériques</strong>,
            je me spécialise dans la <strong>conception mécanique</strong>, la <strong>simulation numérique avancée</strong> et la <strong>mécanique computationnelle</strong>.
            <br /><br />
            Mes travaux de recherche portent sur le <strong>couplage déterministe-stochastique (DEM + chaînes de Markov)</strong>,
            les <strong>Réseaux de Neurones Physiquement Informés (PINNs)</strong> pour l'identification de matériaux,
            et le développement de <strong>solveurs éléments finis 3D non linéaires</strong> pour la prédiction de défaillance en fatigue.
            <br /><br />
            Rigoureux, autonome et passionné par la résolution de problèmes complexes, je combine expertise technique et
            approche scientifique pour contribuer à des projets de R&D en mécanique, matériaux et simulation multi-physique.
          </p>
        </GlassCard>
        <GlassCard className="info-card" delay={0.1}>
          <div className="info-item"><span className="info-icon"><img src="/icons/grad-cap.svg" alt="" className="icon-svg" /></span><div><div className="info-label">Formation</div><div className="info-value"><span className="info-logos"><img src="/logos/centrale-lyon.png" alt="" className="info-logo" /><img src="/logos/enspy.png" alt="" className="info-logo" /></span> Centrale Lyon–ENISE & ENSPY</div></div></div>
          <div className="info-item"><span className="info-icon"><img src="/icons/compass.svg" alt="" className="icon-svg" /></span><div><div className="info-label">Localisation</div><div className="info-value">Saint-Étienne, France</div></div></div>
          <div className="info-item"><span className="info-icon"><img src="/icons/contact.svg" alt="" className="icon-svg" /></span><div><div className="info-label">Mobilité</div><div className="info-value">France & International</div></div></div>
          <div className="info-item"><span className="info-icon"><img src="/icons/contact.svg" alt="" className="icon-svg" /></span><div><div className="info-label">Langues</div><div className="info-value">FR (natif) · EN (B2) · DE</div></div></div>
          <div className="info-item"><span className="info-icon"><img src="/icons/books.svg" alt="" className="icon-svg" /></span><div><div className="info-label">Disponibilité</div><div className="info-value">Sept./Oct. 2026</div></div></div>
        </GlassCard>
      </div>
    </section>
  </>
);

export default HomePage;
