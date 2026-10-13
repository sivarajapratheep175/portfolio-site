import ZorvexLogo from "./ZorvexLogo";

function Navbar() {
  return (
    <nav className="navbar">
      <ZorvexLogo />

      <div className="navbar-right">
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-socials" aria-label="Social profiles">
          <a
            className="social-linkedin"
            href="https://www.linkedin.com/in/sivarajapratheep175/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.3 18H5.8V9.8h2.5V18ZM7.05 8.7a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9ZM18.2 18h-2.5v-4c0-.96-.02-2.2-1.34-2.2-1.34 0-1.55 1.05-1.55 2.13V18h-2.5V9.8h2.4v1.12h.04c.34-.64 1.15-1.31 2.37-1.31 2.54 0 3.01 1.67 3.01 3.84V18Z" />
            </svg>
            <span className="nav-social-label">LinkedIn</span>
          </a>
          <a
            className="social-github"
            href="https://github.com/sivarajapratheep175"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.64-1.24-1.64-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.65 1.78 3.83 1.36.1-.7.39-1.18.7-1.45-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.03.75 2.08v3.11c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
            <span className="nav-social-label">GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
