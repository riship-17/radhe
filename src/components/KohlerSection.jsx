import { motion } from 'framer-motion';
import useReveal from '../hooks/useReveal';
import logo from '../assets/logo.png';
import './KohlerSection.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function KohlerSection() {
  const { ref, inView } = useReveal();

  return (
    <section id="kohler" className="kohler" ref={ref}>
      <svg className="kohler__noise" viewBox="0 0 100 100" preserveAspectRatio="none">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      
      <div className="kohler__watermark font-playfair">KOHLER</div>

      <div className="container">
        <motion.div 
          className="kohler__inner"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          
          <motion.div className="kohler__partnership" variants={fadeUp}>
            <img src={logo} alt="Radhe Ceramics" className="kohler__logo" />
            <span className="kohler__cross">×</span>
            <span className="kohler__brand font-playfair">KOHLER</span>
          </motion.div>

          <motion.p className="kohler__subheading font-cormorant" variants={fadeUp}>
            An Exclusive Partnership
          </motion.p>
          
          <motion.h2 className="kohler__title font-playfair" variants={fadeUp}>
            Bringing Global Luxury to Gujarat
          </motion.h2>
          
          <motion.p className="kohler__body font-dm" variants={fadeUp}>
            As the first authorized Kohler partner in the region, Radhe Ceramics offers an unparalleled selection of world-class bath fittings and sanitary ware. Experience the perfect blend of innovation, design, and uncompromising quality.
          </motion.p>

          <motion.div className="kohler__benefits" variants={fadeUp}>
            <div className="kohler__benefit-card">
              <h4 className="font-playfair">Authenticity</h4>
              <p className="font-dm">100% genuine Kohler products with international warranty.</p>
            </div>
            <div className="kohler__benefit-card">
              <h4 className="font-playfair">Expertise</h4>
              <p className="font-dm">Trained professionals to guide your selection and installation.</p>
            </div>
            <div className="kohler__benefit-card">
              <h4 className="font-playfair">Exclusivity</h4>
              <p className="font-dm">Access to premium collections not available elsewhere.</p>
            </div>
          </motion.div>

          <motion.div className="kohler__action" variants={fadeUp}>
            <a href="#contact" className="kohler__btn font-dm">Schedule a Viewing</a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
