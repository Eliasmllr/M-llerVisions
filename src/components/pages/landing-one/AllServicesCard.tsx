import allServicesShape from "@/../public/image/all-service-shape.png";
import service1 from "@/../public/image/Webdesign Icon.png";
import service2 from "@/../public/image/Google Ads logo final.png";
import service3 from "@/../public/image/Social Media Marketing Icon.png";
import service4 from "@/../public/image/Analytics & reportings.png";
import LinkPrimary from "@/components/shared/LinkPrimary";
import Image from "next/image";

const serviceData = [
  {
    image: service1,
    title: "Webdesign - UI/UX Design",
  },
  {
    image: service2,
    title: "Performance Marketing",
  },
  {
    image: service3,
    title: "Social Media Marketing",
  },
  {
    image: service4,
    title: "Analytics & Reportings",
  },
];

const AllServicesCard = () => {
  return (
    <div className="card-style all-services-card">
      <span className="all-services-card__sub-title heading-4">
        Unsere Leistungen
      </span>
      <div className="all-services-card__services">
        {serviceData.map(({ image, title }) => (
          <div key={title} className="all-services-card__services-service">
            <Image src={image} width={80} height={80} alt="Service One" />
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div className="all-services-card__title">
        <h3 className="heading-3">Visionen wahr werden lassen!</h3>
      </div>
      <LinkPrimary
        linkText="Alle Leistungen"
        link="/services"
        className="all-services-card__link"
      />
      <Image
        src={allServicesShape}
        width={95}
        height={95}
        alt="Title Card Shape"
        className="all-services-card__shapes-image light-mood-image-shape"
      />
    </div>
  );
};

export default AllServicesCard;
