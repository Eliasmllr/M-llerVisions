"use client";
import { motion } from "framer-motion";
import ExperienceCardItem from "./ExperienceCardItem";

const ExperienceCard = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="card-style experience-card"
    >
      <ExperienceCardItem
        counterNumber={5}
        text="JAHRE ERFAHRUNG"
        counterElement="0"
      />
      <ExperienceCardItem
        counterNumber={74}
        text="PROJEKTE"
        counterElement="+"
      />
      <ExperienceCardItem
        counterNumber={70}
        text="ZUFRIEDENE KUNDEN"
        counterElement="+"
      />
    </motion.div>
  );
};

export default ExperienceCard;
