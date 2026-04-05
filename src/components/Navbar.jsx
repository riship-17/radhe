import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMagnet from '../hooks/useMagnet';
import logo from '../assets/logo.jpg';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Kohler', href: '#kohler' },
  { label: 'Why Radhe', href: '#why-radhe' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const mobileNavVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const mobileLinkVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const magnet = useMagnet(0.25);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <a href="#hero" className="navbar__brand" onClick={(e) => handleNavClick(e, '#hero')}>
            <img src={logo} alt="Radhe Ceramics" className="navbar__logo-img" />
            <span className="navbar__brand-text">
              <span className="navbar__brand-radhe">RADHE</span>
              <span className="navbar__brand-ceramics">Ceramics</span>
            </span>
          </a>

          <div className="navbar__links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            ref={magnet.ref}
            style={magnet.style}
            onMouseMove={magnet.handleMouseMove}
            onMouseLeave={magnet.handleMouseLeave}
          >
            <a
              href="#contact"
              className="navbar__cta"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Book Consultation
            </a>
          </div>

          <button
            className={`navbar__hamburger ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav"
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="mobile-nav__links">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="mobile-nav__link"
                  variants={mobileLinkVariant}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="mobile-nav__cta"
                variants={mobileLinkVariant}
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Book Consultation
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
