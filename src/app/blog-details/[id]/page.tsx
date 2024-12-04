import BlogDetailsBody from "@/components/pages/blog-details/BlogDetailsBody";
import Footer from "@/components/pages/landing-one/Footer";
import Navbar from "@/components/shared/Navbar";
import LinkBackHome from "@/components/shared/LinkBackHome";
import AboutTopLeftElement from "@/components/pages/about-us/AboutTopLeftElement";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import data from "@/../public/data/blog.json"; // Correct path to your JSON data
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const blog = data.find((item) => item.id === params.id);

  return {
    title: blog
      ? `${blog.title} - Blog Details`
      : "Blog Not Found - Blog Details",
    description: blog
      ? `Details about ${blog.title}`
      : "No blog details found.",
  };
}

const BlogDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const blog = data.find((item) => item.id === id);

  if (!blog) {
    return (
      <div className="container">
        <Navbar />
        <div className="not-found">
          <h1>Blog Not Found</h1>
          <p>The blog you are looking for does not exist.</p>
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
        <BlogDetailsBody blog={blog} /> {/* Passing the blog as a prop */}
        <Footer />
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default BlogDetails;
