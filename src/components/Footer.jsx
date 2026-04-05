import logo from '../assets/logo.jpg';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            
            <div className="footer__brand">
              <img src={logo} alt="Radhe Ceramics" className="footer__logo" />
              <p className="footer__tagline font-cormorant">
                Curating spaces of timeless elegance since 2008.
              </p>
              <div className="footer__socials">
                <a href="#" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" aria-label="Pinterest">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m8 20 4-10M12 10a1 1 0 0 1 4 0c0 4-5 7-5 7"></path></svg>
                </a>
              </div>
            </div>

            <div className="footer__links">
              <h4 className="font-playfair">Collections</h4>
              <ul>
                <li><a href="#collections" className="font-dm">Floor Tiles</a></li>
                <li><a href="#collections" className="font-dm">Wall Tiles</a></li>
                <li><a href="#collections" className="font-dm">Large Format</a></li>
                <li><a href="#collections" className="font-dm">Outdoor Stones</a></li>
                <li><a href="#collections" className="font-dm">Kohler Fittings</a></li>
              </ul>
            </div>

            <div className="footer__links">
              <h4 className="font-playfair">Company</h4>
              <ul>
                <li><a href="#about" className="font-dm">Our Story</a></li>
                <li><a href="#why-radhe" className="font-dm">Why Choose Us</a></li>
                <li><a href="#testimonials" className="font-dm">Client Reviews</a></li>
                <li><a href="#inspiration" className="font-dm">Inspiration Gallery</a></li>
              </ul>
            </div>

            <div className="footer__links">
              <h4 className="font-playfair">Contact</h4>
              <ul>
                <li className="font-dm">+91 98765 43210</li>
                <li className="font-dm">hello@radheceramics.com</li>
                <li><a href="#contact" className="footer__whatsapp font-dm">WhatsApp Us →</a></li>
              </ul>
            </div>

          </div>

          <div className="footer__bottom">
            <p className="font-dm">&copy; {new Date().getFullYear()} Radhe Ceramics. All rights reserved.</p>
            <div className="footer__bottom-badge">
              <span className="font-dm">Authorized</span>
              <span className="font-playfair"> KOHLER </span>
              <span className="font-dm">Partner</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile WhatsApp FAB */}
      <a 
        href="https://wa.me/919876543210" 
        className="whatsapp-fab"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.01 2.014C6.5 2.014 2.016 6.498 2.016 12.01C2.016 13.768 2.476 15.452 3.328 16.924L2 22L7.202 20.638C8.636 21.416 10.292 21.834 12.01 21.834C17.52 21.834 22.004 17.35 22.004 11.84C22.004 9.172 20.966 6.656 19.078 4.768C17.192 2.88 14.676 1.844 12.01 1.844V2.014ZM12.01 20.162C10.518 20.162 9.074 19.76 7.828 18.998L7.546 18.828L4.454 19.638L5.278 16.626L5.092 16.326C4.242 15.02 3.792 13.486 3.794 11.902C3.794 7.378 7.472 3.7 12.002 3.7C14.198 3.7 16.27 4.556 17.824 6.11A8.167 8.167 0 0 1 20.21 11.916C20.21 16.44 16.532 20.118 12.012 20.118V20.162ZM16.516 14.004C16.268 13.882 15.05 13.284 14.828 13.204C14.606 13.124 14.444 13.082 14.282 13.324C14.12 13.568 13.666 14.11 13.528 14.272C13.39 14.436 13.252 14.456 13.004 14.336C12.756 14.214 11.956 13.952 10.998 13.102C10.25 12.44 9.742 11.602 9.606 11.362C9.468 11.122 9.592 10.99 9.716 10.868C9.828 10.758 9.964 10.584 10.088 10.434C10.214 10.286 10.254 10.188 10.338 10.024C10.422 9.86 10.378 9.722 10.316 9.6C10.254 9.478 9.758 8.26 9.552 7.766C9.352 7.288 9.148 7.354 9.002 7.348C8.868 7.342 8.706 7.344 8.544 7.344C8.382 7.344 8.12 7.404 7.896 7.646C7.674 7.888 7.042 8.47 7.042 9.642C7.042 10.814 7.922 11.942 8.046 12.106C8.17 12.268 9.716 14.664 12.102 15.696C12.67 15.944 13.11 16.092 13.456 16.202C14.022 16.382 14.542 16.356 14.954 16.29C15.418 16.216 16.392 15.688 16.592 15.122C16.792 14.556 16.792 14.072 16.728 13.968C16.666 13.868 16.504 13.806 16.256 13.682V14.004Z" />
        </svg>
      </a>
    </>
  );
}
