"use client";
import { motion } from "framer-motion";
import MyExperienceItem from "./MyExperienceItem";

const AboutMyExperience = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-card my-experience p-32px"
    >
      <div className="d-flex align-items-center justify-content-between">
        {" "}
        <p className="heading-4">Erfahrung</p>
      </div>

      <div className="my-experience__content">
        <MyExperienceItem
          time="2018"
          title="Videoschnitt"
          company="Freelancer"
        />
        <MyExperienceItem
          time="2019"
          title="UI/UX Designer"
          company="Freelancer"
        />
        <MyExperienceItem
          time="2022"
          title="Paid Marketing"
          company="Google"
        />
        <MyExperienceItem
          time="2024"
          title="UI/UX Designer"
          company="MöllerVisions"
        />
      </div>
    </motion.div>
  );
};

export default AboutMyExperience;
