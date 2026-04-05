import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Collections from './components/Collections';
import KohlerSection from './components/KohlerSection';
import WhyRadhe from './components/WhyRadhe';
import Inspiration from './components/Inspiration';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400); // Wait 2.4s to show loader logo/text
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <SectionDivider label="Collections" />
        <Collections />
        <KohlerSection />
        <WhyRadhe />
        <SectionDivider label="Inspiration" />
        <Inspiration />
        <SectionDivider label="Testimonials" />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
