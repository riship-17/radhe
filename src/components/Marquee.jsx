import logo from '../assets/logo.png';
import './Marquee.css';

const Marquee = () => {
  const content = (
    <div className="marquee__content">
      <span>FIRST IN THE REGION</span>
      <div className="marquee__diamond" />
      <img src={logo} alt="Radhe Ceramics" className="marquee__logo" />
      <div className="marquee__diamond" />
      <span>KOHLER AUTHORIZED PARTNER</span>
      <div className="marquee__diamond" />
      <span>PREMIUM TILES & STONE</span>
      <div className="marquee__diamond" />
    </div>
  );

  return (
    <div className="marquee font-cormorant">
      <div className="marquee__track">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
};

export default Marquee;
