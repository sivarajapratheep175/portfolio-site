import ZorvexLogo from "./ZorvexLogo";

function Footer() {
  return (
    <footer className="footer">
      <ZorvexLogo className="footer-brand" />
      <div className="footer-meta">
        <p>Designed &amp; built with purpose.</p>
        <p>© {new Date().getFullYear()} ZORVEX · Sivaraja Pratheep</p>
      </div>
    </footer>
  );
}
export default Footer;
