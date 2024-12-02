"use client";
import { motion } from "framer-motion";
import { Call, Location, Send2 } from "iconsax-react";
import Link from "next/link";

const ContactLeft = () => {
  return (
    <div className="contact-section__left">
      <span className="heading-5 contact-sub-title">Kontaktformular</span>
      <h3 className="heading-2 section-title">Kontakt Aufnehmen</h3>
      <p className="textXL font-thin just-hello">
        Keine Scheu schreiben Sie <br /> uns einfach!
      </p>

      <div className="m-t-60px contact-info">
        {/* phone */}
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="contact-info__card"
        >
          <div className="contact-info__card-icon">
            <Call size={32} color="#9747FF" />
          </div>
          <div className="contact-info__card-info">
            <p className="textLead">Telefon</p>
            <Link href="tel:+4917623999625" className="textM font-thin link">
              0176 23999625
            </Link>
          </div>
        </motion.div>
        {/* email */}
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="contact-info__card"
        >
          <div className="contact-info__card-icon">
            <Send2 size={32} color="#9747FF" />
          </div>
          <div className="contact-info__card-info">
            <p className="textLead">E-Mail</p>
            <Link
              href="mailto:imfo@moellervisions.de"
              className="textM font-thin link"
            >
              Info@MöllerVisions.de
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="contact-info__card"
        >
          <div className="contact-info__card-icon">
            <Location size={32} color="#9747FF" />
          </div>
          <div className="contact-info__card-info">
            <p className="textLead">Standort</p>
            <p className="textM font-thin link">Hannover</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactLeft;
