// BlogDetailsBody.tsx
import { Blog } from "@/types/blog";  // Import the Blog interface
import bannerImage from "@/../public/image/blog-details-banner.png";
import Image from "next/image";
import BlogDetailsLeft from "./BlogDetailsLeft";
import CategoriesCard from "./CategoriesCard";
import PopularTags from "./PopularTags";
import RecentPosts from "./RecentPosts";
import SearchBox from "./SearchBox";

// Update the component to type the prop as Blog
const BlogDetailsBody = ({ blog }: { blog: Blog }) => {
  return (
    <div className="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
      <div className="blog-detail-style blog-details-body">
        <Image
          src={bannerImage}
          width={1232}
          height={592}
          alt="Blog Details Banner Image"
          className="img-fluid banner-image"
        />
        <div className="blog-details-container">
          <BlogDetailsLeft blog={blog} />

          <div className="blog-details-container__right">
            <SearchBox />
            <RecentPosts />
            <CategoriesCard />
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsBody;
