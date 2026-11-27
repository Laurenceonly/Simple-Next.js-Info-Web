import Image from "next/image";
import Reveal from "./Reveal";

const iconPaths = {
  typhoon: "M24 6c-9 0-15 8-12 16 3 8 14 11 20 5 5-5 2-13-4-14-4-1-8 2-8 6 0 3 3 5 5 3",
  earthquake: "M4 15h9l-4 9h11l-3 10h11",
  flood: "M3 14c4 0 4-4 8-4s4 4 8 4 4-4 8-4 4 4 8 4M3 25c4 0 4-4 8-4s4 4 8 4 4-4 8-4 4 4 8 4",
  brownout: "M25 4 10 26h12l-2 16L38 19H25l4-15Z",
};

const phases = [
  { key: "before", label: "Before" },
  { key: "during", label: "During" },
  { key: "after", label: "After" },
];

export default function EmergencyCard({
  id,
  title,
  accent,
  icon,
  image,
  imageAlt,
  before,
  during,
  after,
  reverse,
}) {
  const actions = { before, during, after };

  // Reverse swaps the photo side on alternating guide rows.
  return (
    <Reveal
      as="article"
      className={`hazard-card hazard-card--${id}${reverse ? " hazard-card--reverse" : ""} scroll-reveal`}
      id={id}
      style={{ "--hazard-accent": accent }}
      aria-labelledby={`${id}-title`}
    >
      <div className="hazard-photo-side reveal-photo">
        <div className="hazard-photo-frame">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 760px) 100vw, 42vw"
            className="hazard-photo"
          />
        </div>
      </div>

      <div className="hazard-content">
        <div className="hazard-heading">
          <span className="hazard-dot" aria-hidden="true" />
          <h2 id={`${id}-title`}><em>{title}</em></h2>
          <svg
            className={`hazard-icon hazard-icon--${icon}`}
            viewBox="0 0 48 48"
            aria-hidden="true"
            focusable="false"
          >
            <path d={iconPaths[icon]} />
          </svg>
        </div>
        <div className="phase-grid">
          {phases.map((phase) => (
            <Reveal as="section" className="phase-panel scroll-reveal" key={phase.key}>
              <h3>{phase.label}</h3>
              <ol>
                {actions[phase.key].map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
