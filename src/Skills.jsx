const skills = [
  { name: "Java", category: "Programming language", icon: "java" },
  { name: "JavaScript", category: "Programming language", icon: "javascript" },
  { name: "React", category: "Frontend library", icon: "react" },
  { name: "HTML & CSS", category: "Web fundamentals", icon: "web" },
  { name: "MySQL", category: "Database", icon: "database" },
  { name: "Git & GitHub", category: "Version control", icon: "git" },
];

const designTools = [
  { name: "Photoshop", mark: "Ps", brand: "photoshop" },
  { name: "Illustrator", mark: "Ai", brand: "illustrator" },
  { name: "InDesign", mark: "Id", brand: "indesign" },
  { name: "Premiere Pro", mark: "Pr", brand: "premiere" },
  { name: "Figma", mark: "figma", brand: "figma" },
  { name: "Canva", mark: "C", brand: "canva" },
  { name: "Blender", mark: "B", brand: "blender" },
  { name: "DaVinci Resolve", mark: "DR", brand: "davinci" },
];

function DesignToolLogo({ tool }) {
  if (tool.brand === "figma") {
    return (
      <span className="design-tool-logo design-tool-logo-figma" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </span>
    );
  }

  return (
    <span
      className={`design-tool-logo design-tool-logo-${tool.brand}`}
      aria-hidden="true"
    >
      {tool.mark}
    </span>
  );
}

function SkillIcon({ type }) {
  const iconPaths = {
    java: (
      <>
        <path d="M7 9h10l-1 7H8L7 9Z" />
        <path d="M17 10h2a2 2 0 0 1 0 4h-3M6 19h12M9 22h6" />
        <path d="M10 6c0-1 2-1 2-3M14 7c0-1 2-1 2-3" />
      </>
    ),
    react: (
      <>
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.4" className="skill-icon-fill" />
      </>
    ),
    web: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-12-4 14" />,
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
      </>
    ),
    git: (
      <>
        <path d="M7 5v14M7 8c0 5 10 1 10 8" />
        <circle cx="7" cy="5" r="2" />
        <circle cx="7" cy="19" r="2" />
        <circle cx="17" cy="18" r="2" />
      </>
    ),
  };

  if (type === "javascript") {
    return (
      <span className="skill-icon skill-icon-js" aria-hidden="true">
        JS
      </span>
    );
  }

  return (
    <svg
      className="skill-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[type]}
    </svg>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <p className="eyebrow">02 / TOOLKIT</p>
      <h2>Tech I work with.</h2>
      <p className="section-description">
        The languages, frameworks, and tools I use to take ideas from sketch to
        working software.
      </p>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <span className="skill-icon-wrap">
              <SkillIcon type={skill.icon} />
            </span>
            <span className="skill-copy">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-category">{skill.category}</span>
            </span>
            <span className="skill-card-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
        ))}
      </div>
      <div className="design-tools">
        <p className="design-tools-label">DESIGN</p>
        <ul className="design-tools-list">
          {designTools.map((tool) => (
            <li className="design-tool" key={tool.name}>
              <DesignToolLogo tool={tool} />
              <span>{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
