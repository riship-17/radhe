import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';
import './Loader.css';

export default function Loader() {
  return (
    <motion.div
      className="loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="loader__content">
        <motion.img
          src={logo}
          alt="Radhe Ceramics"
          className="loader__logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.h1
          className="loader__wordmark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          RADHE CERAMICS
        </motion.h1>
        <motion.div
          className="loader__line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}
