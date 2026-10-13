import zorvexLogo from "./assets/Zorvex.svg";

function ZorvexLogo({ className = "" }) {
  return (
    <a
      className={`zorvex-brand ${className}`}
      href="#home"
      aria-label="ZORVEX home"
    >
      <img className="zorvex-image" src={zorvexLogo} alt="ZORVEX" />
    </a>
  );
}

export default ZorvexLogo;
