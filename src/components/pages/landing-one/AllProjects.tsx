"use client";
import allProjectImage from "@/../public/image/Geraete-bilder.png";
import allProjectStars from "@/../public/image/all-project-stars.png";
import LinkPrimary from "@/components/shared/LinkPrimary";
import { motion } from "framer-motion";
import Image from "next/image";

const AllProjects = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="card-style all-projects-card"
    >
      <div className="all-projects-card__title-text">
        <p className="heading-4">Abgeschlossene</p>
        <p className="all-projects-card__title-text-two heading-4">
          Projekte
        </p>
      </div>

      <Image
        src={allProjectImage}
        width={186}
        height={120}
        alt="Geraete-bilder.png"
        className="all-projects-card__image"
      />
      <LinkPrimary
        linkText="Alle Projekte"
        link="/all-projects"
        className="all-projects-card__link"
      />
      <Image
        src={allProjectStars}
        width={68}
        height={60}
        alt="All Project Stars"
        className="all-projects-card__image-star scale-up-down light-mood-image-shape"
      />
    </motion.div>
  );
};

export default AllProjects;
