// Partner logos: a scrolling band for the landing page, a labelled grid for About.
import { partners } from "../data/partners";

function PartnerLogos({ variant = "marquee" }) {
  if (variant === "grid") {
    return (
      <ul className="partner-grid">
        {partners.map((partner) => (
          <li key={partner.name} className="partner-tile">
            <div className="partner-tile-logo">
              <img src={partner.logo} alt={`${partner.name} logo`} />
            </div>
            <strong>{partner.name}</strong>
            <span>{partner.role}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="partner-marquee">
      <ul className="partner-track">
        {[0, 1].map((copy) =>
          partners.map((partner) => (
            <li
              key={`${copy}-${partner.name}`}
              className="partner-chip"
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              <img src={partner.logo} alt={copy === 0 ? partner.name : ""} />
            </li>
          )),
        )}
      </ul>
    </div>
  );
}

export default PartnerLogos;
