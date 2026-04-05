import { motion } from 'framer-motion';
import useReveal from '../hooks/useReveal';
import logo from '../assets/logo.jpg';
import './WhyRadhe.css';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WhyRadhe() {
  const { ref, inView } = useReveal();

  return (
    <section id="why-radhe" className="why" ref={ref}>
      <div className="container">
        
        <motion.h2 
          className="why__title font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          Why Choose Radhe?
        </motion.h2>

        <motion.div 
          className="why__bento"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Card 1: Span 2 */}
          <motion.div className="why__card why__card--span2" variants={fadeUp}>
            <div className="why__card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#134074" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="4" fill="#134074" className="pinPulseAnim"/>
              </svg>
            </div>
            <h3 className="font-playfair">First in the Region</h3>
            <p className="font-dm">Pioneering luxury ceramic and bath retail in Gujarat, setting a benchmark for quality and scale that remains unmatched.</p>
          </motion.div>

          {/* Card 2: Kohler Auth */}
          <motion.div className="why__card why__card--kohler" variants={fadeUp}>
            <div className="why__card-icon">
              <img src={logo} alt="Radhe" className="why__mini-logo" />
            </div>
            <h3 className="font-playfair">Kohler Authorized</h3>
            <p className="font-dm">The only certified Kohler partner in the vicinity, ensuring authentic global standards.</p>
          </motion.div>

          {/* Standard Cards */}
          <motion.div className="why__card" variants={fadeUp}>
            <h3 className="font-playfair">Curated Selection</h3>
            <p className="font-dm">Handpicked tiles from the finest global manufacturers.</p>
          </motion.div>
          
          <motion.div className="why__card" variants={fadeUp}>
            <h3 className="font-playfair">Expert Guidance</h3>
            <p className="font-dm">Our consultants help bring your architectural vision to life.</p>
          </motion.div>
          
          <motion.div className="why__card" variants={fadeUp}>
            <h3 className="font-playfair">Trusted Quality</h3>
            <p className="font-dm">Rigorous quality checks ensure longevity and flawless finish.</p>
          </motion.div>
          
          <motion.div className="why__card" variants={fadeUp}>
            <h3 className="font-playfair">Vast Inventory</h3>
            <p className="font-dm">Ready stock available for seamless project execution.</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
