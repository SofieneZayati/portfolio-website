import { Link } from "react-router-dom";
import {
  HiArrowDown,
  HiArrowRight,
  HiDownload,
  HiLocationMarker,
} from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "../data/profile";

const engineeringPaths = [
  { label: 'Web & backend', project: 'LeadX HRMS', detail: 'Shared APIs, scoped permissions, web + Android.', href: '/project/geniuspmo#architecture' },
  { label: 'Applied AI', project: 'Prigado', detail: 'Assistants connected to real business workflows.', href: '/project/prigado#architecture' },
  { label: 'Connected systems', project: 'MacroPark', detail: 'From mobile access to physical barrier control.', href: '/project/macropark#architecture' },
];

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="greeting-mark" aria-hidden="true" />
            Sofiene Zayati <span className="hero-eyebrow__divider">/</span>{" "}
            Engineer &amp; builder
          </p>
          <h1 id="hero-heading" className="hero-title">
            <span className="sr-only">Sofiene Zayati — </span>
            Engineering
            <br />
            ideas into
            <br />
            <span>real products.</span>
          </h1>
          <p className="hero-summary">
            I build <strong>web products, applied AI workflows, and connected
            devices</strong>. My embedded-systems background shapes how I work:
            connect the interface, the data, and what happens in the real world.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button--primary">
              Explore my work <HiArrowDown aria-hidden="true" />
            </a>
            <a
              href="/Sofiene_Zayati_CV.pdf"
              download="Sofiene_Zayati_CV.pdf"
              className="button button--secondary"
            >
              <HiDownload aria-hidden="true" /> Download CV
            </a>
          </div>
          <div className="hero-availability">
            <span className="availability-dot" aria-hidden="true" />
            Open to engineering roles &amp; product collaborations
          </div>
        </div>
        <aside className="hero-visual" aria-label="Meet Sofiene">
          <div className="portrait-note">
            <span>Behind the build</span>
            <span>Design → Code → Ship</span>
          </div>
          <div className="portrait-frame">
            <div className="portrait-orbits" aria-hidden="true">
              <span />
              <span />
            </div>
            <span className="portrait-monogram" aria-hidden="true">
              SZ
            </span>
            <span className="portrait-caption">
              Full-stack thinking.
              <br />
              Human-first building.
            </span>
            <img
              src="/picture-restored.webp"
              alt="Sofiene Zayati"
              width={1556}
              height={1556}
              decoding="async"
              fetchPriority="high"
            />
            <span className="portrait-location">
              <HiLocationMarker aria-hidden="true" /> Based in{" "}
              {profile.location}
            </span>
          </div>
          <Link to="/project/sobly" className="hero-project-note">
            <img
              src="/images/projects/sobly/storefront-desktop.webp"
              alt=""
              width={112}
              height={76}
              decoding="async"
            />
            <span>
              <small>
                <span className="availability-dot" aria-hidden="true" /> Built
                &amp; deployed
              </small>
              <strong>
                Sobly.tn <HiArrowRight aria-hidden="true" />
              </strong>
              <span>Storefront, checkout, admin, and VPS delivery.</span>
            </span>
          </Link>
          <div className="hero-socials" aria-label="Professional profiles">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label === "GitHub" ? (
                  <FaGithub aria-hidden="true" />
                ) : (
                  <FaLinkedinIn aria-hidden="true" />
                )}
                {social.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </aside>
      </div>
      <nav className="engineering-paths" aria-label="Explore work by engineering focus">
        <p className="engineering-paths__label">Three ways into my work</p>
        <div className="engineering-paths__grid">
          {engineeringPaths.map((path, index) => (
            <Link key={path.href} to={path.href} className="engineering-path">
              <span className="engineering-path__number">0{index + 1}</span>
              <span className="engineering-path__copy">
                <small>{path.label}</small>
                <strong>{path.project}</strong>
                <span>{path.detail}</span>
              </span>
              <HiArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
}
