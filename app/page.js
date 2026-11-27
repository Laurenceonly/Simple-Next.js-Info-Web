import Image from "next/image";
import Link from "next/link";

const hazards = [
  {
    id: "typhoon",
    title: "Typhoon",
    description: "Track warnings. Secure your home. Leave when told.",
    image: "/images/typhoon.jpg",
    imageAlt: "Palm trees bending in strong wind under storm clouds",
    className: "hazard-tile--typhoon",
  },
  {
    id: "earthquake",
    title: "Earthquake",
    description: "Protect yourself from shaking and falling objects.",
    image: "/images/earthquake.jpg",
    imageAlt: "Cracked concrete pavement",
    className: "hazard-tile--earthquake",
  },
  {
    id: "flood",
    title: "Flood",
    description: "Move to higher ground. Stay out of floodwater.",
    image: "/images/flood.jpg",
    imageAlt: "Cars moving through a flooded street after heavy rain",
    className: "hazard-tile--flood",
  },
  {
    id: "brownout",
    title: "Brownout",
    description: "Plan for light, communication, and essential care.",
    image: "/images/brownout.jpg",
    imageAlt: "A warm candle flame against a dark background",
    className: "hazard-tile--brownout",
  },
];

const goBagItems = [
  "Bring drinking water and ready-to-eat food.",
  "Pack needed medicines and first-aid supplies.",
  "Add a flashlight, spare batteries, and a battery radio.",
  "Charge a phone and power bank.",
  "Seal IDs and important papers in a waterproof pouch.",
  "Pack clothes, sturdy shoes, and hygiene items.",
  "Add small cash, a whistle, and eating utensils.",
];

const photoCredits = [
  { name: "Paolo Chiabrando", href: "https://unsplash.com/photos/dark-storm-clouds-gather-over-the-ocean-horizon-VqCXh3Il8tc" },
  { name: "Guilherme Christmann", href: "https://www.pexels.com/photo/palm-trees-during-a-hurricane-16313103/" },
  { name: "Zoshua Colah", href: "https://unsplash.com/photos/cracked-and-broken-pavement-is-clearly-visible-qaLANa0UEYM" },
  { name: "Aldward Castillo", href: "https://unsplash.com/photos/cars-driving-through-flooded-street-after-heavy-rain-3XcXuWuEByE" },
  { name: "John Cardamone", href: "https://unsplash.com/photos/a-lit-candle-with-a-black-background-hcmCBk1hnvw" },
  { name: "Markus Kammermann", href: "https://unsplash.com/photos/vintage-first-aid-kit-and-lantern-on-grass--SJ7rkvb6Jc" },
];

export default function HomePage() {
  return (
    <main id="main-content" className="home-page">
      <section className="home-hero-wrap" aria-labelledby="home-title">
        <div className="home-hero">
          <Image
            src="/images/hero.jpg"
            alt="Storm clouds gathered over a dark coastline"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 75rem"
            className="hero-photo"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">Household emergency guide / Philippines</p>
            <h1 id="home-title">
              <span className="hero-line">Typhoons and floods.</span>
              <span className="hero-line">Quakes and <em>brownouts.</em></span>
            </h1>
            <p className="hero-summary">
              Prepare your household and know what to do when warnings arrive.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" href="/guide">
                See emergency steps
              </Link>
              <Link className="button button--outline" href="#go-bag">
                Pack a go-bag
              </Link>
            </div>
          </div>
          <p className="hero-chip">4 hazards / 1 household plan</p>
        </div>
      </section>

      <section className="go-bag-band" id="go-bag" aria-labelledby="go-bag-title">
        <div className="go-bag-section content-width scroll-reveal">
          <div className="go-bag-image-frame reveal-photo">
            <Image
              src="/images/gobag.jpg"
              alt="An emergency first-aid kit and lantern ready to pack"
              fill
              sizes="(max-width: 760px) 100vw, 37rem"
              className="go-bag-photo"
            />
            <p className="image-label">Household kit / Keep it ready</p>
          </div>
          <div className="go-bag-copy">
            <p className="eyebrow">Before a warning</p>
            <h2 id="go-bag-title">Pack a <em>go-bag.</em></h2>
            <p className="section-intro">
              Keep supplies together so you can leave quickly. Add items each
              person in your household needs every day.
            </p>
            <ul className="go-bag-list">
              {goBagItems.map((item) => (
                <li className="checklist-item scroll-reveal" key={item}>
                  <span className="check-marker" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <circle className="check-ring" cx="12" cy="12" r="9" />
                      <path className="check-tick" d="m8 12 2.5 2.5L16 9" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="hazard-overview-band" aria-labelledby="hazard-overview-title">
        <div className="hazard-overview content-width scroll-reveal">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The field guide</p>
              <h2 id="hazard-overview-title">Four hazards. <em>One</em> household plan.</h2>
              <p className="section-summary">
                Choose a hazard to see what to do before, during, and after.
              </p>
            </div>
            <Link className="text-link" href="/guide">
              Read all emergency steps
            </Link>
          </div>
          <div className="hazard-bento">
            {hazards.map((hazard) => (
              <Link
                className={`hazard-tile ${hazard.className} scroll-reveal`}
                href={`/guide#${hazard.id}`}
                key={hazard.id}
              >
                <span className="tile-image-frame reveal-photo">
                  <Image
                    src={hazard.image}
                    alt={hazard.imageAlt}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                    className="tile-photo"
                  />
                </span>
                <span className="tile-overlay" aria-hidden="true" />
                <span className="tile-copy">
                  <span className="tile-title-row">
                    <span className="hazard-dot" aria-hidden="true" />
                    <span className="tile-title">{hazard.title}</span>
                  </span>
                  <span className="tile-description">{hazard.description}</span>
                </span>
                <span className="tile-arrow" aria-hidden="true">&gt;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta content-width scroll-reveal" aria-labelledby="cta-title">
        <div>
          <p className="eyebrow">Household planning</p>
          <h2 id="cta-title">Know your route before a <em>warning.</em></h2>
          <p className="cta-summary">
            Save your evacuation route and family meeting place in advance.
          </p>
        </div>
        <Link className="button button--light" href="/guide">
          Open the guide
        </Link>
      </section>

      <footer className="site-footer content-width">
        <div className="photo-credits">
          <p className="eyebrow">Photo credits / Unsplash + Pexels</p>
          <ul>
            {photoCredits.map((credit) => (
              <li key={credit.name}><a href={credit.href}>{credit.name}</a></li>
            ))}
          </ul>
        </div>
      </footer>
    </main>
  );
}
