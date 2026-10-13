import "./Hero.css";

function Hero() {
  return (
    <div>
    <section className="hero" id="home">
      <p className="eyebrow">COMPUTER SCIENCE · DEVELOPER IN PROGRESS</p>

      <h1>
        Building ideas into
        <br />
        <span>digital experiences.</span>
      </h1>

      <p className="hero-description">
        I'm Sivaraja Pratheep, a Computer Science undergraduate passionate
        about software development, technology, and solving real-world
        problems through code.
      </p>

      <div className="hero-actions">
        <a className="button button-primary" href="#projects">
          Explore my work ↗
        </a>
        <a className="button button-secondary" href="#contact">
          Contact me
        </a>
      </div>

      <p className="availability">
        <span className="status-dot"></span>
        Learning, building, and exploring new opportunities
      </p>
    </section>
    </div>
  );
}
export default Hero;