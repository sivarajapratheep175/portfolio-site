const projects = [
  {
    title: "FarmIntel AI",
    category: "AI · AGRICULTURE",
    description:
      "An AI-powered farming assistant delivering real-time insights, crop-health analysis, and Tamil voice interaction in a single dashboard.",
    technologies: ["JavaScript", "AI Integration", "Voice Recognition"],
    visual: "farm",
    link: "https://github.com/sivarajapratheep175/farmintel-Ai-app",
    linkText: "View on GitHub",
  },
  {
    title: "Safe Walk App",
    category: "MOBILE · SAFETY",
    description:
      "A mobile app aimed at pedestrian safety — real-time alerts and guidance for people navigating potentially risky situations.",
    technologies: ["JavaScript", "AI Integration", "Voice Recognition"],
    visual: "walk",
    link: "https://github.com/sivarajapratheep175/safewalk-app",
    linkText: "View on GitHub",
  },
  {
    title: "Link-in-bio Hub",
    category: "WEB · PERSONAL BRAND",
    description:
      "A fast, single-page directory that pulls every social and professional profile into one clean landing page.",
    technologies: ["HTML", "CSS", "JavaScript"],
    visual: "links",
    link: "https://sivarajapratheep175.github.io/PersonalWebPresence/",
    linkText: "View live site",
  },
  {
    title: "Design Portfolio",
    category: "VISUAL DESIGN",
    description:
      "A running collection of graphic and layout work made in the Adobe suite — posters, logos, and social assets.",
    technologies: ["Photoshop", "Illustrator", "InDesign"],
    visual: "design",
    link: "https://drive.google.com/drive/folders/1eHkSTsvYTT5zWBJ8rifmPmQX0lucWimt?usp=sharing",
    linkText: "View portfolio",
  },
];

function ProjectArtwork({ visual }) {
  if (visual === "farm") {
    return (
      <div className="artwork-dashboard">
        <div className="artwork-window-bar">
          <span className="artwork-window-brand">
            <span className="artwork-brand-mark">F</span>
            FarmIntel
          </span>
          <span className="artwork-live">LIVE INSIGHTS</span>
        </div>
        <div className="farm-dashboard-body">
          <div className="farm-dashboard-copy">
            <span className="artwork-overline">FIELD OVERVIEW</span>
            <strong>Grow with<br />confidence.</strong>
            <span>AI crop health monitoring</span>
          </div>
          <div className="farm-health">
            <span className="farm-health-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M19.5 4.5c-7.2 0-12 3.3-12 8.4a5.1 5.1 0 0 0 5.1 5.1c5.1 0 8.4-4.8 8.4-12v-1.5h-1.5Z" />
                <path d="M4 21c2.1-5.5 5.6-9.1 10.5-11.5" />
              </svg>
            </span>
            <span className="farm-health-label">CROP HEALTH</span>
            <strong>94%</strong>
            <span className="farm-health-trend">+8.2% this week</span>
          </div>
        </div>
        <div className="farm-chart" aria-hidden="true">
          {[32, 46, 38, 62, 52, 76, 66, 94, 82, 100, 76, 90].map(
            (height, index) => (
              <span
                key={`${height}-${index}`}
                style={{ "--bar-height": `${height}%` }}
              />
            ),
          )}
        </div>
      </div>
    );
  }

  if (visual === "walk") {
    return (
      <div className="artwork-phone">
        <div className="phone-screen">
          <div className="phone-status">
            <span>9:41</span>
            <span>●●●  ▰</span>
          </div>
          <div className="walk-map">
            <span className="map-road map-road-one" />
            <span className="map-road map-road-two" />
            <span className="map-road map-road-three" />
            <span className="map-route" />
            <span className="map-pin">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <span className="map-location-dot" />
          </div>
          <div className="walk-safe-status">
            <span className="walk-status-dot" />
            <span>
              <strong>You&apos;re safe</strong>
              <small>Route monitored</small>
            </span>
            <span className="walk-shield" aria-hidden="true">✓</span>
          </div>
        </div>
      </div>
    );
  }

  if (visual === "links") {
    return (
      <div className="artwork-profile">
        <div className="profile-avatar">SP</div>
        <strong>sivarajapratheep175</strong>
        <span className="profile-caption">Developer · Designer · Creator</span>
        <div className="profile-link-row">
          <span><b>in</b> LinkedIn</span>
          <span><b>⌘</b> GitHub</span>
        </div>
        <span className="profile-link-button">Explore my links <span>↗</span></span>
      </div>
    );
  }

  return (
    <div className="artwork-design">
      <div className="design-poster design-poster-one">
        <span>CREATIVE<br />DIRECTION</span>
        <strong>FORM<br />& COLOR</strong>
        <i />
      </div>
      <div className="design-poster design-poster-two">
        <i />
        <span>STUDIO<br />NOTES — 24</span>
      </div>
      <div className="design-poster design-poster-three">
        <span>TYPE<br />STUDY</span>
        <strong>Aa</strong>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / SELECTED WORK</p>
          <h2>Things I&apos;ve shipped.</h2>
        </div>
        <p className="section-kicker">
          A mix of useful tools, thoughtful interfaces, and experiments.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div
              className={`project-preview project-preview-${project.visual}`}
              aria-hidden="true"
            >
              <ProjectArtwork visual={project.visual} />
            </div>

            <div className="project-content">
              <div className="project-title-row">
                <h3>{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
              <p>{project.description}</p>
              <ul className="project-tech" aria-label="Technologies">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkText} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
