import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import useReveal from '../hooks/useReveal';
import reviews from '../data/reviews';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

export default function Testimonials() {
  const { ref, inView } = useReveal();

  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, i) => (
      <svg 
        key={i} 
        className="testimonials__star" 
        width="16" height="16" viewBox="0 0 24 24" 
        fill="#8da9c4" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDelay: `${i * 0.1}s` }}
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <div className="testimonials__bg-quote">"</div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials__slider"
          >
            {[...reviews, ...reviews].map((review, index) => (
              <SwiperSlide key={`${review.id}-${index}`}>
                <div className="testimonials__card">
                  <div className="testimonials__stars">
                    {renderStars(review.stars)}
                  </div>
                  <p className="testimonials__quote font-cormorant">
                    "{review.quote}"
                  </p>
                  <div className="testimonials__author">
                    <div className="testimonials__name font-dm">{review.name}</div>
                    <div className="testimonials__role font-dm">{review.role}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
