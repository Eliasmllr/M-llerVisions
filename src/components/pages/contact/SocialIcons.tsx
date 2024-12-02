"use client";
import { motion } from "framer-motion";
import {Whatsapp, Instagram} from "iconsax-react";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div className="m-t-120px social-icon-section">
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href="https://wa.me/4917623999625?text=Willkommen%20bei%20M%C3%B6llerVisions%2C%20wie%20k%C3%B6nnen%20wir%20Ihnen%20weiterhelfen%3F
" className="social-icon">
          <span className="icon">
            <Whatsapp size={24} />
          </span>
          <p className="textLead icon-name">Whatsapp</p>
        </Link>
      </motion.div>
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href="https://www.instagram.com/moellervisions/" className="social-icon">
          <span className="icon">
            <Instagram size={24} />
          </span>
          <p className="textLead icon-name">Instagram</p>
        </Link>
      </motion.div>
  
    </div>
  );
};

export default SocialIcons;
