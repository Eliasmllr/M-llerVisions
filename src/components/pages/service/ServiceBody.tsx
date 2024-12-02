"use client";
import brandImage from "@/../public/image/Social Media Marketing Icon.png";
import marketingImage from "@/../public/image/Google Ads logo final.png";
import serviceShape from "@/../public/image/service-shape-14.png";
import shape11 from "@/../public/image/shape-11.png";
import shape29 from "@/../public/image/shape-29.png";
import shape53 from "@/../public/image/shape-53.png";
import uxDesignImage from "@/../public/image/Webdesign Icon.png";
import developmentImage from "@/../public/image/Analytics & reportings.png";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutEducation from "../about-us/AboutEducation";
import AboutLetsWorks from "../about-us/AboutLetsWorks";
import ProfileCardAbout from "../about-us/ProfileCardAbout";

const ServiceBody = () => {
  return (
    <div className="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
      <div className="service-body">
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="service-body__design service-card"
        >
          <h3 className="heading-3 card-title">
            <span className="title-top">Webdesign/</span>
            <span className="title-bottom">UI/UX Design</span>
          </h3>
          <Image
            src={uxDesignImage}
            width={100}
            height={100}
            alt="UI/UX design Image"
            className="m-t-40px img-fluid"
          />
          <p className="m-t-40px textL font-thin card-text-color">
          Unser Webdesign-Service geht über eine ansprechende Gestaltung hinaus: 
          Wir entwickeln maßgeschneiderte Websites, die deine Markenidentität 
          widerspiegelt und eine erstklassige Benutzererfahrung bieten. 
          Mit einem tiefen Verständnis für deine Unternehmensziele gestalten 
          wir Websites, die deine Besucher begeistern und zur Interaktion anregen.
          </p>
          <Image
            src={shape11}
            width={99}
            height={99}
            alt="Shape 11"
            className="img-fluid shape-image-service light-mood-image-shape"
          />
        </motion.div>
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="service-body__marketing service-card"
        >
          <h3 className="heading-3 card-title">
            <span className="title-top">Paid</span>
            <span className="title-bottom"> Marketing</span>
          </h3>
          <Image
            src={marketingImage}
            width={100}
            height={100}
            alt="UI/UX design Image"
            className="m-t-40px img-fluid"
          />
          <p className="m-t-40px textL font-thin card-text-color">
          Mein Performance-Marketing-Service setzt nicht nur auf einfache Werbeanzeigen, 
          sondern auf durchdachte, datenbasierte Strategien, 
          die gezielt deine Zielgruppe ansprechen und messbare Ergebnisse erzielen. 
          Ich konzipiere und verwalte Paid Ads auf Plattformen wie Google Ads und Meta Ads,
          um deine Marke sichtbar zu machen und gleichzeitig hohe Konversionsraten zu erreichen.
          </p>
          <Image
            src={serviceShape}
            width={99}
            height={99}
            alt="Service Shape"
            className="img-fluid shape-image-marketing light-mood-image-shape"
          />
        </motion.div>
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="service-body__brand-identity service-card"
        >
          <h3 className="heading-3 card-title">
            <span className="title-top">Social Media</span>
            <span className="title-bottom">Content Creation</span>
          </h3>
          <Image
            src={brandImage}
            width={100}
            height={100}
            alt="UI/UX design Image"
            className="m-t-40px img-fluid"
          />
          <p className="m-t-40px textL font-thin card-text-color">
          Unser Content-Marketing-Service geht über einfache Inhalte hinaus:
           Wir entwickeln maßgeschneiderte Strategien, die deine Markenidentität 
           widerspiegeln und deine Zielgruppe gezielt ansprechen. Mit einem tiefen 
           Verständnis für deine Unternehmensziele erstellen wir hochwertigen Content,
            der deine Kunden begeistert, bindet und zur Interaktion motiviert.
          </p>
          <Image
            src={shape29}
            width={99}
            height={99}
            alt="Service Shape"
            className="img-fluid shape-image-brand light-mood-image-shape"
          />
        </motion.div>
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="service-body__web-development service-card"
        >
          <h3 className="heading-3 card-title">
            <span className="title-top">Analytics &</span>
            <span className="title-bottom"> Reporting</span>
          </h3>
          <Image
            src={developmentImage}
            width={100}
            height={100}
            alt="UI/UX design Image"
            className="m-t-40px img-fluid"
          />
          <p className="m-t-40px textL font-thin card-text-color">
          Mein Analytics- & Reporting-Service geht weit über einfache Datenanalysen hinaus: 
          Mit Tableau erstelle ich maßgeschneiderte Dashboards und Berichte, die deine 
          Geschäftsziele unterstützen und dir helfen, fundierte Entscheidungen zu treffen. 
          Mit einem tiefen Verständnis für deine Unternehmensbedürfnisse visualisiere ich Daten so,
           dass sie nicht nur Zahlen darstellen, sondern echte Einblicke bieten und dir helfen, Potenziale zu erkennen.
          </p>
          <Image
            src={shape53}
            width={99}
            height={99}
            alt="Service Shape"
            className="img-fluid shape-image-developer light-mood-image-shape"
          />
        </motion.div>
      </div>
      <div className="service-bottom">
        <ProfileCardAbout />
        <AboutEducation />
        <AboutLetsWorks />
      </div>
    </div>
  );
};

export default ServiceBody;
