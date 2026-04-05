import { useState } from 'react';
import { motion } from 'framer-motion';
import useReveal from '../hooks/useReveal';
import useMagnet from '../hooks/useMagnet';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', room: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { ref, inView } = useReveal();
  const magnet = useMagnet(0.1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', room: '', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container contact__grid">
        
        <motion.div 
          className="contact__info"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact__map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d117462.6583907572/!2d72.5855017!3d23.2131923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0e8c75ddff%3A0xc6c76dbbedbf3ea5!2sGandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Radhe Ceramics Location"
            />
          </div>
          
          <div className="contact__details">
            <div className="contact__detail-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="var(--yale)" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="4" fill="var(--yale)"/>
              </svg>
              <div>
                <h4 className="font-dm">Showroom</h4>
                <p className="font-dm">Radhe Square, SG Highway,<br/>Gandhinagar, Gujarat 382421</p>
              </div>
            </div>
            
            <div className="contact__detail-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22.0032 20.1986 21.9443 20.4736 21.8286 20.722C21.7129 20.9705 21.5434 21.1856 21.334 21.3503C21.1245 21.515 20.881 21.6245 20.6241 21.6698C20.3672 21.7152 20.1044 21.695 19.85 21.61C16.6437 20.5694 13.6874 18.8058 11.2 16.42C8.83515 14.0458 7.15838 11.2335 6.29 8.16C6.19532 7.8819 6.17513 7.59371 6.23098 7.31602C6.28682 7.03833 6.41738 6.77803 6.6133 6.55294C6.80922 6.32785 7.06583 6.14339 7.34863 6.01258C7.63143 5.88177 7.93392 5.80789 8.24 5.79H11.24C11.6631 5.78652 12.0729 5.92644 12.4042 6.18731C12.7355 6.44818 12.9692 6.81538 13.07 7.23C13.197 8.01639 13.4357 8.78018 13.78 9.5C13.9141 9.77802 13.9492 10.0864 13.88 10.3807C13.8109 10.6751 13.6397 10.94 13.4 11.13L12.13 12.4C13.5532 14.9084 15.6599 16.9922 18.19 18.4L19.46 17.13C19.6644 16.897 19.9366 16.7329 20.2374 16.6613C20.5383 16.5898 20.8521 16.6146 21.13 16.74C21.849 17.0863 22.6137 17.327 23.4 17.46C23.8213 17.562 24.1932 17.8016 24.4566 18.1402C24.72 18.4788 24.858 18.8953 24.85 19.32L24.85 22.32C24.85 22.668 24.7337 23.0044 24.5152 23.2755C24.2968 23.5466 23.9877 23.7368 23.635 23.817C23.2824 23.8972 22.9069 23.8631 22.5658 23.7196C22.2246 23.576 21.9365 23.3308 21.745 23.02L20.475 21.75C17.945 20.3422 15.8383 18.2584 14.405 15.75L15.675 14.48C15.9147 14.29 16.0859 14.0251 16.155 13.7307C16.2241 13.4364 16.189 13.128 16.0549 12.85C15.7106 12.1302 15.4719 11.3664 15.3449 10.58C15.2441 10.1646 15.0104 9.79742 14.6791 9.53655C14.3478 9.27568 13.938 9.13576 13.5149 9.13924H10.5149C10.2089 9.15713 9.90638 9.231 9.62358 9.36181C9.34078 9.49262 9.08417 9.67708 8.88825 9.90217C8.69233 10.1273 8.56177 10.3876 8.50592 10.6653C8.45008 10.943 8.47027 11.2312 8.56495 11.5093C9.43333 14.5828 11.1101 17.3951 13.475 19.7693C15.9624 22.1553 18.9187 23.9189 22.125 24.9593C22.3794 25.0443 22.6422 25.0645 22.8991 25.0191C23.156 24.9738 23.3995 24.8643 23.609 24.6996C23.8184 24.5349 23.9879 24.3198 24.1036 24.0714C24.2193 23.8229 24.2782 23.5479 24.275 23.2693V20.2693C24.275 19.844 24.137 19.4275 23.8736 19.0889C23.6102 18.7503 23.2383 18.5107 22.817 18.4087L22 16.92Z" stroke="var(--yale)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h4 className="font-dm">Contact</h4>
                <p className="font-dm">+91 98765 43210<br/>hello@radheceramics.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact__form-wrapper"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact__badges">
            <span className="contact__badge">Project Inquiry</span>
            <span className="contact__badge">Bulk Orders</span>
          </div>
          
          <h3 className="contact__title font-playfair">Let's discuss your space</h3>
          
          {submitted ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h4 className="font-playfair">Thank You</h4>
              <p className="font-dm">Your inquiry has been received. Our team will contact you shortly.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className={formData.name ? 'filled' : ''}
                />
                <label className="font-dm">Full Name</label>
              </div>

              <div className="contact__form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  className={formData.phone ? 'filled' : ''}
                />
                <label className="font-dm">Phone Number</label>
              </div>

              <div className="contact__form-group">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className={formData.email ? 'filled' : ''}
                />
                <label className="font-dm">Email Address</label>
              </div>

              <div className="contact__form-group">
                <select 
                  name="room" 
                  value={formData.room} 
                  onChange={handleChange} 
                  required
                  className={formData.room ? 'filled' : ''}
                >
                  <option value="" disabled hidden></option>
                  <option value="Bathroom">Bathroom Remodel</option>
                  <option value="Kitchen">Kitchen Renovation</option>
                  <option value="Flooring">Entire Floor Space</option>
                  <option value="Commercial">Commercial Project</option>
                  <option value="Other">Other</option>
                </select>
                <label className="font-dm">Project Type</label>
              </div>

              <div className="contact__form-group">
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                  className={formData.message ? 'filled' : ''}
                  rows="3"
                ></textarea>
                <label className="font-dm">Tell us about your project</label>
              </div>

              <div 
                ref={magnet.ref} 
                style={magnet.style}
                onMouseMove={magnet.handleMouseMove}
                onMouseLeave={magnet.handleMouseLeave}
              >
                <button type="submit" className="contact__submit font-dm">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
