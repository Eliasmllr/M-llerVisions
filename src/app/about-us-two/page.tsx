import profileImage from "@/../public/image/landing-bio-image.png";
import AboutTopLeftElement from "@/components/pages/about-us/AboutTopLeftElement";
import AboutUsBody from "@/components/pages/about-us/AboutUsBody";
import Footer from "@/components/pages/landing-one/Footer";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Grid System Unique Portfolio NextJs Template",
  description: "NextJs Template",
};

const AboutUsTwo = () => {
  return (
    <div className="position-relative overflow-hidden ">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <AboutUsBody image={profileImage} />
        <Footer />
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default AboutUsTwo;
