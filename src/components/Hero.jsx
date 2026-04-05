import { motion } from 'framer-motion';
import useReveal from '../hooks/useReveal';
import tiles from '../data/tiles';
import './Hero.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function Hero() {
  const { ref, inView } = useReveal();

  const heroTiles = tiles.slice(0, 9); // Take 9 tiles for the 3x3 grid
  
  // Predictable pseudorandom rotations
  const rotations = [-4, 3, -5, 2, -3, 6, -2, 5, -6];

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-container">
        <div 
          className="hero__bg-image" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=1600&q=80')` }}
        />
        <div className="hero__bg-overlay" />
      </div>

      <div className="container hero__inner" ref={ref}>
        <motion.div 
          className="hero__content"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p className="hero__eyebrow" variants={fadeUp}>
            FIRST IN THE REGION &middot; KOHLER AUTHORIZED PARTNER
          </motion.p>
          
          <motion.h1 className="hero__headline font-playfair" variants={fadeUp}>
            Elevate Your Space <br />
            with <i>Masterpiece</i> Ceramics
          </motion.h1>
          
          <motion.p className="hero__subheading font-dm" variants={fadeUp}>
            Discover Gujarat's most luxurious collection of premium tiles, natural stones, and exclusive Kohler bath fittings.
          </motion.p>
          
          <motion.div className="hero__actions" variants={fadeUp}>
            <a href="#collections" className="hero__btn hero__btn--primary">Explore Collections</a>
            <a href="#contact" className="hero__btn hero__btn--secondary">Book Consultation</a>
          </motion.div>

          <motion.div className="hero__stats" variants={fadeUp}>
            <div className="hero__stat-pill">15+ Years Trust</div>
            <div className="hero__stat-pill">10k+ Projects</div>
            <div className="hero__stat-pill">Premium Kohler Partner</div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero__grid"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {heroTiles.map((tile, i) => (
            <motion.div 
              key={tile.id} 
              className="hero__grid-item"
              variants={fadeUp}
              whileHover={{ scale: 1.06, rotate: 0, zIndex: 10 }}
              style={{ rotate: rotations[i % rotations.length] }}
            >
              <img src={tile.image} alt={tile.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll-indicator">
        <div className="hero__scroll-dot" />
      </a>
    </section>
  );
}
