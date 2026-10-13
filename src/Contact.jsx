import "./Contact.css";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <p className="eyebrow">04 / GET IN TOUCH</p>
      <h2>Have an idea? Let&apos;s connect.</h2>
      <p className="section-description">
        I'm interested in technology, collaboration, and opportunities to learn
        by building useful things.
      </p>

      <a
        className="button button-primary"
        href="mailto:sivarajapratheep175@gmail.com"
      >
        Send me an email ↗
      </a>
    </section>
  );
}
export default Contact;