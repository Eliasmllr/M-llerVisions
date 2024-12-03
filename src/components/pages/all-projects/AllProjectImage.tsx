"use client";
import linkImage from "@/../public/image/all-project-link.png";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  width: number;
  hight: number;
  title?: string;
  text?: string;
  id?: string;
};

const AllProjectImage = ({ image, hight, width, title, text, id }: Props) => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="image-body"
    >
      <Image
        src={image}
        width={width}
        height={hight}
        alt="All Projects image 11"
        className="image-body__image img-fluid"
      />
      <Link href={`/project-details/${id}`} className="all-project-link">
        <span className="all-project-link__text-area">
          <span className="link-title heading-2">{title}</span>
          <span className="textL link-text">{text}</span>
        </span>
      </Link>

    </motion.div>
  );
};

export default AllProjectImage;
