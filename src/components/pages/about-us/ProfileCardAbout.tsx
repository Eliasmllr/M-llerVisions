"use client";
import LinkPrimaryTwo from "@/components/shared/LinkPrimaryTwo";
import { motion } from "framer-motion";
import { Be, Instagram, Whatsapp } from "iconsax-react";
import ProfileIcon from "../landing-one/ProfileIcon";

const ProfileCardAbout = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-profile about-card p-32px profile-card"
    >
      <div className="profile-icons">
        <ProfileIcon icon={<Whatsapp size="40" />} socialLink="https://wa.me/4917623999625?text=Willkommen%20bei%20M%C3%B6llerVisions%2C%20wie%20k%C3%B6nnen%20wir%20Ihnen%20weiterhelfen%3F
" />
        <ProfileIcon icon={<Instagram size="40" />} socialLink="https://wa.me/4917623999625?text=Willkommen%20bei%20M%C3%B6llerVisions%2C%20wie%20k%C3%B6nnen%20wir%20Ihnen%20weiterhelfen%3F
" />
      </div>
      <div>
        <p className="textM about-profile__text">Lass uns in Kontakt bleiben</p>
        <LinkPrimaryTwo
          link="/about-us"
          linkText="Social Media"
          className="about-profile-link"
        />
      </div>
    </motion.div>
  );
};

export default ProfileCardAbout;
