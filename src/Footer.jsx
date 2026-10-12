function Footer() {
  return (
    <footer className="footer">
      <a className="logo" href="#home">
        SP<span>.</span>
      </a>
      <p>Designed and built with React.</p>
      <p>© {new Date().getFullYear()} Sivaraja Pratheep</p>
    </footer>
  );
}
export default Footer;
