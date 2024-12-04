import quoteImage from "@/../public/image/quote-down.png";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsLeft = ({ blog }) => {
  // Check if blog data exists
  if (!blog) {
    return <div>Loading...</div>; // Show a loading message or fallback UI
  }

  return (
    <div className="blog-details-container__left">
      <div className="date-tag">
        <span className="textL font-thin">{blog.date}</span>
        <span className="textL font-thin tag">{blog.tag}</span>
      </div>
      <h2 className="heading-2 main-title">{blog.title}</h2>
      <p className="textL font-thin main-title-text">{blog.text}</p>
      <div className="quote-box">
        <p className="textXL font-thin">
          {blog.quote ? blog.quote : "No quote available for this blog."}
        </p>
        <Image
          src={quoteImage}
          width={60}
          height={60}
          alt="Quote image"
          className="quote"
        />
      </div>
      <p className="textL font-thin text-after-quote">{blog.quoteText}</p>
      <div className="m-t-60px secondary-blog-details">
        <h3 className="heading-3">Aroha&apos;s Approach to SEO Optimization</h3>
        <p className="textL font-thin secondary-blog-details__text">
          Learn how Aroha Agency navigates the complex world of SEO. We share
          insights into enhancing online visibility and ensuring our clients
          stand out in the digital crowd.
        </p>
        <ol>
          <li className="textL font-thin">It is a long-established fact that a reader will.</li>
          <li className="textL font-thin">The standard chunk of Lorem Ipsum used since the 1500s.</li>
          <li className="textL font-thin">It is a long-established fact that a reader will.</li>
        </ol>
        <p className="textL font-thin secondary-blog-details__end-text">
          Dive into the world of branding with Aroha Agency. Discover how we
          create unique and memorable brand identities that resonate with
          audiences and stand the test of time.
        </p>
      </div>
      <div className="m-t-60px blog-detail-tags">
        <p className="textL tag-heading">Tags:</p>
        <div className="all-tags">
          {blog.tags.map((tag, index) => (
            <Link key={index} href={`#`}>
              {tag}
            </Link>
          ))}
        </div>
      </div>
      <div className="m-t-60px comment-section">
        <h5 className="heading-4">Leave A Comment</h5>
        <form className="comment-section__area">
          <div className="name-and-email">
            <input type="text" className="name" placeholder="Name" />
            <input type="email" className="name" placeholder="Email" />
          </div>
          <textarea
            name="txtname"
            rows={5}
            className="textarea"
            placeholder="Type a comment"
          />
          <button className="comment-submit">
            <span className="textM post-comment light-theme-white-text">
              Post Comment
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetailsLeft;
