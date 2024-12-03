import AboutTopLeftElement from "@/components/pages/about-us/AboutTopLeftElement";
import AboutUsBody from "@/components/pages/about-us/AboutUsBody";
import Footer from "@/components/pages/landing-one/Footer";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";
import aboutOne from "@/../public/image/about-1.png"

export const metadata: Metadata = {
  title: "About Us - Grid System Unique Portfolio NextJs Template",
  description: "NextJs Template",
};

const AboutUs = () => {
  return (
    <div className="position-relative overflow-hidden ">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <div className='impressum-content'>
          <h1>Impressum</h1>

          <p>Elias M&ouml;ller<br />
            Birkenring 4<br />
            31319 Sehnde</p>

          <h2>Kontakt</h2>
          <p>Telefon: 017623999625<br />
            E-Mail: info@moellervisions.de</p>

          <h2>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
            Beantragt</p>

          <h2>Redaktionell verantwortlich</h2>
          <p>Elias M&ouml;ller</p>

          <h2>EU-Streitschlichtung</h2>
          <p>Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

          <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>
        <Footer />
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default AboutUs;
