import React, { useState } from "react";
import { useSelector } from "react-redux"; // Import useSelector to get Redux state
import design3 from "../assets/figma-to-wordpress.webp";
import shopify from "../assets/shopify.webp";
import design4 from "../assets/figma-to-react.webp";
import digitalmarketing from "../assets/digital-marketing.webp";
import woocommerce from "../assets/woocommerce.webp";
import contentwriting from "../assets/content-writing.webp";
import gohighlevel from "../assets/go-highlevel.webp";
import squarespace from "../assets/square-space.webp";
import figmadesign from "../assets/figmadesign.webp";
import wixdesign from "../assets/wix-design.webp";

const ImageSliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Get isDarkMode from Redux state

  const images = [
    {
      image: design4,
      alt: "Figma to React",
      title: "Figma to React",
      paragraph: "Seamlessly transform your Figma designs into powerful React applications with our expertise. Perfectly coded for performance and scalability, we ensure your ideas come to life in a responsive and interactive way."
    },
    {
      image: figmadesign,
      alt: "figmadesign",
      title: "Figma Design Expert",
      paragraph: "Elevate your projects with expert-crafted Figma designs. From wireframes to final prototypes, we deliver creative and user-centric designs tailored to your vision and brand identity."
    },
    {
      image: wixdesign,
      alt: "wixdesign",
      title: "Wix Expert",
      paragraph: "Create stunning websites effortlessly with our Wix expertise. Whether it’s for a personal portfolio or a full-scale business website, we design and optimize your Wix site for success."
    },
    {
      image: design3,
      alt: "Figma to WordPress",
      title: "Figma to WordPress",
      paragraph: "Convert your Figma designs into feature-rich WordPress websites with pixel-perfect precision. Our team ensures fast, SEO-friendly, and fully functional WordPress development."
    },
    {
      image: shopify,
      alt: "Shopify Development",
      title: "Shopify Development",
      paragraph: "Take your eCommerce store to the next level with our Shopify development services. From setting up your store to custom theme designs, we help your business thrive online."
    },
    {
      image: digitalmarketing,
      alt: "Digital Marketing Expert",
      title: "Digital Marketing Expert",
      paragraph: "Boost your brand’s online presence with our digital marketing solutions. From social media strategies to targeted ad campaigns, we help you connect with the right audience."
    },
    {
      image: woocommerce,
      alt: "Expert",
      title: "Ecommerce Website Expert",
      paragraph: "Build a seamless shopping experience with our WooCommerce expertise. We design, develop, and optimize eCommerce websites that drive conversions and elevate customer satisfaction."
    },
    {
      image: contentwriting,
      alt: "contentwriting",
      title: "Content Writing Expert",
      paragraph: "Engage your audience with compelling and persuasive content. Our professional writing services deliver SEO-friendly articles, blogs, and copy that resonate with your brand voice."
    },
    {
      image: gohighlevel,
      alt: "gohighlevel",
      title: "Go High Level Expert",
      paragraph: "Maximize your business potential with our Go High Level expertise. From CRM setups to automation workflows, we help you streamline your operations and scale with ease."
    },
    {
      image: squarespace,
      alt: "squarespace",
      title: "Square Space Expert",
      paragraph: "Design modern and elegant websites with our Squarespace expertise. Perfect for creatives and businesses, we ensure your site is visually stunning and easy to manage."
    },
  ];
  

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
      visibleImages.push(images[(currentIndex + i) % images.length]);
    }
    return visibleImages;
  };

  const visibleImages = getVisibleImages();

  // Conditionally set background color based on dark mode
  const sliderBackgroundColor = isDarkMode ? "bg-gray-800 shadow-lg shadow-white " : "bg-white shadow-lg shadow-black ";

  return (
    <>
<div className="text-center text-2xl md:text-4xl font-bold py-4 mb-10 ">
  {/* Title Display */}
  <span
    className={`bg-clip-text text-transparent ${
      isDarkMode
        ? "bg-gradient-to-r from-blue-500 to-white"
        : "bg-gradient-to-r from-pink-500 to-red-500"
    }`}
  >
    {images[currentIndex].title}
  </span>
  
  {/* Paragraph Display */}
  <p
    className={`mt-4 text-sm md:text-base max-w-3xl mx-auto mb-8 sm:mb-2 ${
      isDarkMode ? "text-gray-300" : "text-gray-950"
    }`}
  >
    {images[currentIndex].paragraph}
  </p>
</div>


    <div className={`-translate-y-12 sm:translate-y-0 -mt-14 relative w-[99%] sm:w-[90%] mx-auto rounded-lg mb-20 ${sliderBackgroundColor}`}>
   
    
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat rounded-lg transition-all ease-in-out duration-200"
        style={{
          backgroundImage: `url(${images[currentIndex].image})`,
          backgroundSize: "contain",
        }}
      ></div>

      {/* Slider Container */}
      <div className="relative translate-y-36 flex items-end flex-col justify-end space-x-4 p-1 sm:p-2 sm:w-[98%] mt-20 h-[300px] sm:h-[450px] overflow-hidden mx-auto">
        <div className={`overflow-hidden mx-auto  sm:translate-x-2 w-[320px] sm:w-full flex justify-center  shadow-sm sm:shadow-md border  items-center sm:gap-5 rounded-lg p-3 bg-opacity-75 ${isDarkMode ? "bg-gray-900 border-black " : "bg-white shadow-black border"}`}>
          {visibleImages.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={`Slide ${currentIndex + index + 1}`}
              className={`w-[75px] h-[150px] p-1 sm:w-[200px] sm:h-[250px] bg-black  rounded-lg shadow-lg transition-transform duration-500 cursor-pointer ${
                index === 0 ? "sm:p-2  scale-100" : "sm:p-1 scale-75 opacity-80"
              }`}
              onClick={() => setCurrentIndex((currentIndex + index) % images.length)}
            />
          ))}
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-2 sm:gap-5 h-[200px]">
            <button
              onClick={handlePrev}
              className="bg-black w-7 h-7 sm:w-10 sm:h-10 text-white rounded-full hover:bg-white border hover:text-black hover:border-gray-950"
            >
              &#8592;
            </button>

            <button
              onClick={handleNext}
              className="bg-black w-7 h-7 sm:w-10 sm:h-10 text-white rounded-full hover:bg-white border hover:text-black hover:border-gray-950"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default ImageSliderComponent;
