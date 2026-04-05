import './SectionDivider.css';

export default function SectionDivider({ label }) {
  return (
    <div className="section-divider">
      <div className="section-divider__line" />
      <div className="section-divider__center">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="0.514648" width="7.75736" height="7.75736" transform="rotate(45 6 0.514648)" fill="#8da9c4"/>
        </svg>
        {label && <span className="section-divider__label font-dm">{label}</span>}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="0.514648" width="7.75736" height="7.75736" transform="rotate(45 6 0.514648)" fill="#8da9c4"/>
        </svg>
      </div>
      <div className="section-divider__line" />
    </div>
  );
}
