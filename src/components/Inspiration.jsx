import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import useReveal from '../hooks/useReveal';
import './Inspiration.css';

const rooms = [
  { id: 'bathroom', label: 'Bathrooms', icon: 'M12 4V2M12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16C15.3137 16 18 13.3137 18 10C18 6.68629 15.3137 4 12 4ZM5 20H19M7 16V20M17 16V20', before: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', title: 'Modern Elegance' },
  { id: 'kitchen', label: 'Kitchens', icon: 'M4 6H20M4 10H20M4 14H20M4 18H20', before: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', after: 'https://images.unsplash.com/photo-1600566753086-00f18f6b86d8?w=800&q=80', title: 'Culinary Spaces' },
  { id: 'living', label: 'Living Areas', icon: 'M3 12L4.66107 9.58474C5.10515 8.93888 5.85047 8.5 6.66667 8.5H17.3333C18.1495 8.5 18.8948 8.93888 19.3389 9.58474L21 12M3 12V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V12M3 12H21', before: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80', after: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80', title: 'Luxurious Living' },
];

export default function Inspiration() {
  const [activeRoom, setActiveRoom] = useState(rooms[0]);
  const { ref, inView } = useReveal();

  const CustomHandle = () => (
    <div className="inspiration__slider-handle">
      <div className="inspiration__slider-handle-line" />
      <div className="inspiration__slider-handle-circle">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l6-6-6-6M9 18l-6-6 6-6" />
        </svg>
      </div>
      <div className="inspiration__slider-handle-line" />
    </div>
  );

  return (
    <section id="inspiration" className="inspiration" ref={ref}>
      <div className="container">
        
        <div className="inspiration__header">
          <motion.h2 
            className="inspiration__title font-playfair"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          >
            Design Inspiration
          </motion.h2>

          <motion.div 
            className="inspiration__filters"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          >
            {rooms.map(room => (
              <button
                key={room.id}
                className={`inspiration__filter-btn ${activeRoom.id === room.id ? 'active' : ''}`}
                onClick={() => setActiveRoom(room)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d={room.icon} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-dm">{room.label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <div className="inspiration__gallery">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRoom.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="inspiration__slider-wrapper"
            >
              <ReactCompareSlider
                handle={<CustomHandle />}
                itemOne={<ReactCompareSliderImage src={activeRoom.before} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={activeRoom.after} alt="After" />}
                className="inspiration__slider"
              />
              
              <div className="inspiration__caption font-playfair">
                {activeRoom.title}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
