import { motion } from 'framer-motion';
import CountUpLib from 'react-countup';
import useReveal from '../hooks/useReveal';
import useCountUp from '../hooks/useCountUp';
import './About.css';

const CountUp = CountUpLib.default || CountUpLib;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const { ref: sectionRef, inView: sectionInView } = useReveal();
  const { ref: statsRef, inView: statsInView } = useCountUp();

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container about__grid">
        
        <motion.div 
          className="about__images"
          initial={{ opacity: 0, x: -40 }}
          animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="about__image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80" 
              alt="Radhe Ceramics Showroom"
            />
            <div className="about__image-frame" />
            <div className="about__badge">
              <span className="font-playfair">Gujarat's #1<br/>Tile Destination</span>
            </div>
          </div>
        </motion.div>

        <div className="about__content">
          <motion.p 
            className="about__label font-dm"
            variants={fadeUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            OUR STORY
          </motion.p>
          
          <motion.h2 
            className="about__title font-playfair"
            variants={fadeUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            Crafting Elegance Since 2008
          </motion.h2>
          
          <motion.div 
            className="about__body font-dm"
            variants={fadeUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            <p>
              At Radhe Ceramics, we believe that every space has a story waiting to be told. Starting as a small boutique tile shop, we have grown into the most trusted destination for premium ceramics and bath fittings in the region.
            </p>
            <p>
              As the first Kohler Authorized partner in Gujarat, we bring global luxury directly to your doorstep. Our curated collections are designed for those who appreciate the finer details of architecture and interior design.
            </p>
          </motion.div>

          <div className="about__stats" ref={statsRef}>
            <div className="about__stat">
              <div className="about__stat-number font-playfair">
                {statsInView ? <CountUp end={500} duration={2.5} /> : '0'}+
              </div>
              <div className="about__stat-label">Exclusive Collections</div>
            </div>
            
            <div className="about__stat">
              <div className="about__stat-number font-playfair">
                {statsInView ? <CountUp end={15} duration={2.5} /> : '0'}+
              </div>
              <div className="about__stat-label">Years of Excellence</div>
            </div>
            
            <div className="about__stat">
              <div className="about__stat-number font-playfair">
                {statsInView ? <CountUp end={10000} duration={2.5} separator="," /> : '0'}+
              </div>
              <div className="about__stat-label">Completed Projects</div>
            </div>
          </div>

          <motion.a 
            href="#collections" 
            className="about__link"
            variants={fadeUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            Explore our heritage <span className="about__link-arrow">→</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
