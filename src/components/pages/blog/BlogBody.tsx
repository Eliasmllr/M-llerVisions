"use client";
import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import BlogBig from "./BlogBig";
import BlogSlider from "./BlogSlider";

const BlogBody = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/blog.json")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      });
  }, []);

  // Get the latest blog (assuming the first blog in the array is the latest)
  const latestBlog = blogs.length > 0 ? blogs[0] : null;

  // Limit the BlogList to 3 blogs
  const blogsToShow = blogs.slice(0, 3);

  return (
    <div className="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
      <div className="blog-body">
        <div className="blog-body__up">
          {latestBlog && <BlogBig blog={latestBlog} />} {/* Pass latest blog to BlogBig */}
          <div className=" blog-body__up-right">
            {loading ? (
              <div>Loading blogs...</div>
            ) : (
              blogsToShow.map((blog, index) => (
                <BlogList
                  key={index}
                  image={blog.image}
                  date={blog.date}
                  link={blog.link}
                  linkText={blog.linkText}
                  tag={blog.tag}
                  text={blog.text}
                  title={blog.title}
                />
              ))
            )}
          </div>
        </div>
        <BlogSlider />
      </div>
    </div>
  );
};

export default BlogBody;
