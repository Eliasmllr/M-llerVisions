import Footer from "@/components/pages/landing-one/Footer";
import Navbar from "@/components/shared/Navbar";
import ProjectDetailsBody from "@/components/pages/project-details/ProjectDetailsBody";
import AboutTopLeftElement from "@/components/pages/about-us/AboutTopLeftElement";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import LinkBackHome from "@/components/shared/LinkBackHome";
import data from "@/../public/data/projects.json";
import { Metadata } from "next";
import ProjectBanner from '../../../components/pages/project-details/ProjectBanner';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = data.find((item) => item.id === params.id);

  return {
    title: project
      ? `${project.title} - Grid System Unique Portfolio NextJs Template`
      : "Project Not Found - Grid System Unique Portfolio NextJs Template",
    description: project
      ? `Details about ${project.title}`
      : "No project details found.",
  };
}

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const project = data.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="container">
        <Navbar />
        <div className="not-found">
          <h1>Project Not Found</h1>
          <p>The project you are looking for does not exist.</p>
          <LinkBackHome />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <ProjectBanner {...project} />
        <ProjectDetailsBody project={project} />
        <Footer />
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default ProjectDetails;
