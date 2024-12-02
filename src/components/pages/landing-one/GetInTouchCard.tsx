import getInTouchShape from "@/../public/image/get-in-touch-shape.png";
import LinkPrimary from "@/components/shared/LinkPrimary";
import Image from "next/image";

const GetInTouchCard = () => {
  return (
    <div className="card-style get-in-touch-card">
      <div className="get-in-touch-card__title-text">
        <p className="heading-5">Zusammenarbeiten mit</p>
        <p className="title-card__title-sub-text heading-3">
          MöllerVisions!
        </p>
      </div>

      <LinkPrimary
        linkText="Jetzt Kontaktieren"
        link="/contact"
        className="get-in-touch-card__link"
      />
      <Image
        src={getInTouchShape}
        width={32}
        height={32}
        alt="Get In Touch Shape"
        className="get-in-touch-card__image-shape scale-up-down light-mood-image-shape"
      />
    </div>
  );
};

export default GetInTouchCard;
