import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useReveal from '../hooks/useReveal';
import tiles from '../data/tiles';
import './Collections.css';

const categories = ['All', 'Floor', 'Wall', 'Outdoor', 'Kitchen', 'Bathroom', 'Large Format'];

export default function Collections() {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, inView } = useReveal();

  const filteredTiles = activeFilter === 'All' 
    ? tiles 
    : tiles.filter(tile => tile.category === activeFilter);

  return (
    <section id="collections" className="collections" ref={ref}>
      <div className="container">
        
        <motion.div 
          className="collections__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="collections__title font-playfair">Curated Masterpieces</h2>
          
          <div className="collections__filters">
            {categories.map(category => (
              <button
                key={category}
                className={`collections__filter-btn font-dm ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="collections__masonry"
        >
          <AnimatePresence mode="popLayout">
            {filteredTiles.map((tile) => (
              <motion.div
                key={tile.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`collections__card ${tile.featured ? 'collections__card--featured' : ''}`}
              >
                {tile.featured && <div className="collections__card-shimmer" />}
                
                <div className="collections__card-image">
                  <img src={tile.image} alt={tile.name} loading="lazy" />
                  <div className="collections__card-overlay" />
                </div>
                
                <div className="collections__card-content">
                  <div className="collections__card-info">
                    <h3 className="font-playfair">{tile.name}</h3>
                    <p className="font-dm">{tile.size} • {tile.finish}</p>
                  </div>
                  <button className="collections__card-btn font-dm">Quick View</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
