"use client"
import { useState, useEffect } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import BlogSliderItem from "./BlogSliderItem";

const BlogSlider = () => {
  const [blogs, setBlogs] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [buttonActive, setButtonActive] = useState("all");
  const [loading, setLoading] = useState(true);

  // Fetch the blog data
  useEffect(() => {
    fetch("/data/blog.json")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setFilterData(data); // Initially show all blog data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      });
  }, []);

  // Filter the data based on category
  const handleFilterData = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonText = e.target as HTMLButtonElement;
    const filterCategory = buttonText.innerText.toLocaleLowerCase();
    setButtonActive(filterCategory);

    if (filterCategory === "all") {
      setFilterData(blogs); // Show all blogs
    } else {
      const filteredItems = blogs.filter(
        (item) => item.tag.toLocaleLowerCase() === filterCategory
      );
      setFilterData(filteredItems); // Show filtered data
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-t-60px blog-body__down">
      <h3 className="heading-3">Categories</h3>
      <div className="tab-area">
        <div className="tab-area__buttons">
          <button
            className={`textM tab-area__buttons-button ${buttonActive === "Design" ? "tab-active" : ""
              }`}
            onClick={(e) => handleFilterData(e)}
          >
            Design
          </button>
          <button
            className={`textM tab-area__buttons-button ${buttonActive === "article" ? "tab-active" : ""
              }`}
            onClick={(e) => handleFilterData(e)}
          >
            Article
          </button>
          <button
            className={`textM tab-area__buttons-button ${buttonActive === "Branding" ? "tab-active" : ""
              }`}
            onClick={(e) => handleFilterData(e)}
          >
            Branding
          </button>
          <button
            className={`textM tab-area__buttons-button ${buttonActive === "all" ? "tab-active" : ""
              }`}
            onClick={(e) => handleFilterData(e)}
          >
            All
          </button>
        </div>
        <div className="slider-buttons">
          <button className="customerSliderNext blog-slider-button">
            <ArrowLeft2 />
          </button>
          <button className="customerSliderPrev blog-slider-button">
            <ArrowRight2 />
          </button>
        </div>
      </div>

      {/* Slider area */}
      <div className="m-t-40px">
        <Swiper
          slidesPerView={1}
          spaceBetween={6}
          speed={1400}
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".customerSliderNext",
            prevEl: ".customerSliderPrev",
          }}
          breakpoints={{
            768: {
              spaceBetween: 12,
              slidesPerView: 2,
            },
            992: {
              spaceBetween: 12,
              slidesPerView: 3,
            },
            1200: {
              spaceBetween: 24,
              slidesPerView: 3,
            },
          }}
        >
          {filterData.map(({ image, date, linkText, tag, text, title }, index) => (
            <SwiperSlide key={`blog-slider${index}`}>
              <BlogSliderItem
                image={image}
                date={date}
                linkText={linkText}
                tag={tag}
                text={text}
                title={title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSlider;
