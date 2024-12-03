import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ProjectDetailsItem from "./ProjectDetailsItem";
import ProjectBanner from './ProjectBanner';
import defaultImage from '../../../../public/image/all-project-11.png';  // Import the default image

type ProjectDetailsBodyProps = {
  project: {
    details: {
      challenge: {
        title: string;
        text: string;
        list: string[];
        image?: StaticImageData;
      };
      solution: {
        title: string;
        text: string;
        list: string[];
        image?: StaticImageData;
      };
      result: {
        title: string;
        text: string;
        list: string[];
        image?: StaticImageData;
      };
    };
  };
};

const ProjectDetailsBody = ({ project }: ProjectDetailsBodyProps) => {
  const { details } = project;

  return (
    <div className="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
      <div className="card-style-two project-details p-32px">
        {/* Challenge Section */}
        <ProjectDetailsItem
          image={details.challenge.image || defaultImage}  // Use the imported default image
          listContent={details.challenge.list}
          title={details.challenge.title}
          text={details.challenge.text}
        />

        {/* Solution Section */}
        <ProjectDetailsItem
          image={details.solution.image || defaultImage}  // Use the imported default image
          listContent={details.solution.list}
          flexDirection="flex-row-reverse"
          title={details.solution.title}
          text={details.solution.text}
        />

        {/* Result Section */}
        <ProjectDetailsItem
          image={details.result.image || defaultImage}  // Use the imported default image
          listContent={details.result.list}
          title={details.result.title}
          text={details.result.text}
        />
      </div>

      <Link
        href="/all-projects"
        className="header-title next-project heading-4 m-t-60px z-2 position-relative"
      >
        Next Projects
      </Link>
    </div>
  );
};

export default ProjectDetailsBody;
