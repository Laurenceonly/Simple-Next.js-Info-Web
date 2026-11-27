import Link from "next/link";
import EmergencyCard from "../../components/EmergencyCard";
import Reveal from "../../components/Reveal";

const emergencies = [
  {
    id: "typhoon",
    title: "Typhoon",
    accent: "var(--typhoon)",
    icon: "typhoon",
    image: "/images/typhoon.jpg",
    imageAlt: "Palm trees bending in strong wind under storm clouds",
    reverse: false,
    before: [
      "Check PAGASA and local government advisories.",
      "Secure loose items outside. Keep your go-bag ready.",
      "Know your evacuation route and meeting place.",
    ],
    during: [
      "Stay indoors and away from windows during strong winds.",
      "Evacuate when local authorities tell you to leave.",
      "Stay away from floodwater and downed wires.",
    ],
    after: [
      "Wait for official updates before going outside or returning home.",
      "Avoid fallen power lines and damaged buildings.",
      "Use safe drinking water. Check on your family.",
    ],
  },
  {
    id: "earthquake",
    title: "Earthquake",
    accent: "var(--earthquake)",
    icon: "earthquake",
    image: "/images/earthquake.jpg",
    imageAlt: "Cracked pavement across a concrete road surface",
    reverse: true,
    before: [
      "Secure tall furniture and heavy objects that could fall.",
      "Choose safe spots. Practice Drop, Cover, and Hold.",
      "Keep shoes, a flashlight, and your go-bag easy to reach.",
    ],
    during: [
      "Drop, Cover, and Hold under a sturdy table if you can.",
      "Stay away from windows, glass, and heavy objects.",
      "Outside, move away from buildings and wires.",
    ],
    after: [
      "Expect aftershocks. Check people nearby for injuries.",
      "Leave damaged buildings when it is safe to do so.",
      "Near the coast after strong or long shaking? Move to high ground.",
    ],
  },
  {
    id: "flood",
    title: "Flood",
    accent: "var(--flood)",
    icon: "flood",
    image: "/images/flood.jpg",
    imageAlt: "Cars moving through a flooded street after heavy rain",
    reverse: false,
    before: [
      "Know if your home is flood-prone and learn your local warning system.",
      "Store food, medicine, documents, and electronics above expected water.",
      "Listen to PAGASA and local authorities for warnings.",
    ],
    during: [
      "Move to higher ground or evacuate when told.",
      "Do not walk, swim, or drive through floodwater.",
      "Stay away from wires and outlets touched by water.",
    ],
    after: [
      "Return only when local authorities say it is safe.",
      "Avoid floodwater. Follow local advice about drinking water.",
      "Do not touch electrical equipment that got wet.",
    ],
  },
  {
    id: "brownout",
    title: "Brownout",
    accent: "var(--brownout)",
    icon: "brownout",
    image: "/images/brownout.jpg",
    imageAlt: "A warm candle flame against a dark background",
    reverse: true,
    before: [
      "Charge phones and power banks when severe weather is expected.",
      "Keep a flashlight, spare batteries, and a battery-powered radio ready.",
      "Plan how to power essential medical equipment.",
    ],
    during: [
      "Use a flashlight. Keep refrigerator doors closed.",
      "Never use a generator, grill, or outdoor stove inside a home or garage.",
      "Go somewhere safe if medical equipment needs power.",
    ],
    after: [
      "Stay away from fallen power lines. Report them to responders or your utility.",
      "Do not touch electrical equipment that got wet.",
      "Check local advisories before using food or water affected by the outage.",
    ],
  },
];

const photoCredits = [
  { name: "Paolo Chiabrando", href: "https://unsplash.com/photos/dark-storm-clouds-gather-over-the-ocean-horizon-VqCXh3Il8tc" },
  { name: "Guilherme Christmann", href: "https://www.pexels.com/photo/palm-trees-during-a-hurricane-16313103/" },
  { name: "Zoshua Colah", href: "https://unsplash.com/photos/cracked-and-broken-pavement-is-clearly-visible-qaLANa0UEYM" },
  { name: "Aldward Castillo", href: "https://unsplash.com/photos/cars-driving-through-flooded-street-after-heavy-rain-3XcXuWuEByE" },
  { name: "John Cardamone", href: "https://unsplash.com/photos/a-lit-candle-with-a-black-background-hcmCBk1hnvw" },
  { name: "Markus Kammermann", href: "https://unsplash.com/photos/vintage-first-aid-kit-and-lantern-on-grass--SJ7rkvb6Jc" },
];

export default function GuidePage() {
  return (
    <main id="main-content" className="guide-page">
      <Reveal as="section" className="guide-intro content-width scroll-reveal" aria-labelledby="guide-title">
        <p className="eyebrow">Household field guide</p>
        <h1 id="guide-title">Four hazards, <em>one</em> household plan.</h1>
        <p>Choose a hazard. Follow local instructions first.</p>
      </Reveal>

      <nav className="hazard-index content-width" aria-label="Jump to an emergency">
        <ul>
          {emergencies.map((emergency) => (
            <li key={emergency.id}>
              <Link href={`#${emergency.id}`}>
                <span className="hazard-dot" style={{ "--hazard-accent": emergency.accent }} aria-hidden="true" />
                {emergency.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section className="hazard-list content-width" aria-label="Emergency actions">
        {emergencies.map((emergency) => (
          <EmergencyCard key={emergency.id} {...emergency} />
        ))}
      </section>

      <Reveal as="section" className="contact-panel content-width scroll-reveal" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="eyebrow">Save these numbers</p>
          <h2 id="contact-title">Emergency <em>contacts</em></h2>
          <p>Call 911 for immediate emergency dispatch.</p>
        </div>
        <ul className="contact-list">
          <li>
            <span>National emergency hotline</span>
            <a href="tel:911">911</a>
          </li>
          <li>
            <span>Philippine Red Cross</span>
            <a href="tel:143">143</a>
          </li>
          <Reveal as="li" className="contact-list--davao scroll-reveal">
            <span>Davao City CDRRMO landlines</span>
            <ul className="contact-numbers" aria-label="Davao City CDRRMO telephone numbers">
              <li><a href="tel:+63822952387">(082) 295-2387</a></li>
              <li><a href="tel:+63822242535">(082) 224-2535</a></li>
              <li><a href="tel:+63822858984">(082) 285-8984</a></li>
            </ul>
          </Reveal>
        </ul>
      </Reveal>

      <section className="source-band" aria-labelledby="sources-title">
        <Reveal as="div" className="source-section content-width scroll-reveal">
          <div>
            <p className="eyebrow">Check current advice</p>
            <h2 id="sources-title">Official <em>guidance</em></h2>
            <p className="source-intro">
              Follow current advisories from PAGASA, NDRRMC, and your local DRRMO.
            </p>
          </div>
          <ul>
            <li><a href="https://www.pagasa.dost.gov.ph/learning-tools/floods">PAGASA / Flood safety</a></li>
            <li><a href="https://www.phivolcs.dost.gov.ph/earthquake-preparedness/">DOST-PHIVOLCS / Earthquake preparedness</a></li>
            <li><a href="https://ndrrmc.gov.ph/">NDRRMC / Disaster updates</a></li>
            <li><a href="https://redcross.org.ph/contact-us/">Philippine Red Cross / Contact and 143 hotline</a></li>
            <li><a href="https://ehotlines.e.gov.ph/">Government / Emergency hotline directory</a></li>
            <li><a href="https://davaocity.gov.ph/departments/social-services/cmo-disaster-council/">Davao City CDRRMO / Contact numbers</a></li>
          </ul>
        </Reveal>
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
