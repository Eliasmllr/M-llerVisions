"use client";
import image from "@/../public/image/shape-11.png";
import { motion } from "framer-motion";
import Image from "next/image";

const HelloCard = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-card card-hello"
    >
      <span className="heading-3">Hey,</span>
      <h2 className="heading-3">Ich bin Elias, CEO und Inhaber von</h2>
      <span className="heading-3">MöllerVisions</span>
      <p className="textL">
        MöllerVisions ist nicht nur einfach eine Webdesign & Marketing Agency,
        Unser Anspruch ist es, die Ziele und Visionen unserer Kunden umfassend zu
        verstehen und sie bestmöglich auf ihrem Weg zum Erfolg zu begleiten. 
        Mit unserem Fokus auf erstklassige Qualität und maßgeschneiderte Lösungen 
        realisieren wir nachhaltige Erfolge für Ihr Unternehmen.
      </p>
      <Image
        src={image}
        width={99}
        height={99}
        alt="Shape"
        className="card-hello__shape light-mood-image-shape"
      />
    </motion.div>
  );
};

export default HelloCard;
