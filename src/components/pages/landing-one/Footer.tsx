import Link from "next/link";

const Footer = () => {
  return (
    <footer className="landing-footer m-t-120px position-relative z-2">
      <div className="landing-footer__left">
        <p className="landing-footer__copyright-text textL">
          Copyright @ {new Date().getFullYear()}{" "}
          <Link href={`/`} className="footer-template-link">
            MöllerVisions
          </Link>
        </p>
        <p className="landing-footer__design-text textL">
          Designed By{" "}
          <Link className="textL" href="/">
            MöllerVisions
          </Link>
        </p>
      </div>
      <ul className="landing-footer__menu">
        <li className="landing-footer__menu-item">
          <Link className="textL" href={`/`}>
            Startseite
          </Link>
        </li>
        <li className="landing-footer__menu-item">
          <Link className="textL" href={`/about-us`}>
            Über Uns
          </Link>
        </li>
        <li className="landing-footer__menu-item">
          <Link className="textL" href={`/all-projects`}>
            Projekte
          </Link>
        </li>
        <li className="landing-footer__menu-item">
          <Link className="textL" href={`/contact`}>
            Kontakte
          </Link>
        </li>
        <li className="landing-footer__menu-item">
          <Link className="textL" href={`/datenschutz`}>
          Datenschutz
          </Link>
        </li>
        <li className="landing-footer__menu-item">
          <Link className="textL" href={`/impressum`}>
          Impressum
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
