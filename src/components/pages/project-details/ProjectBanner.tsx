import Image from "next/image";
type Props = {
  image: string;
  title?: string;
  description?: string;
};
const ProjectBanner = ({ image,  title, description }: Props) => {
  return (
    <div className="project-details__banner">
      <Image
        src={image}
        width={1232}
        height={500}
        alt="Banner Image"
        className="img-fluid"
      />
      <h2 className="heading-2">{title}</h2>
      <p className="textL">
       {description}
      </p>
    </div>
  );
};

export default ProjectBanner;
