import bioImage from "@/../public/image/logo-3d.gif";
import bioRoundImage from "@/../public/image/Runder-text.png";
import ButtonPrimary from "@/components/shared/ButtonPrimary";
import LinkPrimary from "@/components/shared/LinkPrimary";
import Image from "next/image";

const BioCard = () => {
  return (
    <div className="card-style d-flex flex-column bio-card">
      <div className="bio-rounded-image">
        <Image
          src={bioRoundImage}
          width={204}
          height={204}
          alt="Bio rounded Image"
          className="bio-rounded-text-image light-mood-image-shape"
        />
        <Image
          src={bioImage}
          width={300}
          height={300}
          style={{objectFit: "contain",background: "none"}}
          alt="logo-kopie"
          className="bio-image position-absolute"
        />
      </div>
      <ButtonPrimary  />
      <LinkPrimary linkText="Über Uns" link="/about-us" />
    </div>
  );
};

export default BioCard;
