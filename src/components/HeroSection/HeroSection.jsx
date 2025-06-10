import React from "react";
import Image1 from "../../assets/herosection/yourname.png";
import Image2 from "../../assets/herosection/gardenofwords.jpg";
import Image3 from "../../assets/herosection/onepiece.jpg";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Your Name",
    description:
      "The story explores the idea of fate, the importance of relationships, and the search for oneself.",
    link: "https://hianime.pe/watch/your-name-10?ep=57910",
  },
  {
    id: 2,
    img: Image2,
    title: "The Garden of Words",
    description:
      "The story of a schoolboy, Takao, who's in the habit of walking through a park on wet days...",
    link: "https://hianime.pe/watch/the-garden-of-words-414?ep=57988",
  },
  {
    id: 3,
    img: Image3,
    title: "ONE PIECE",
    description:
      "Luffy is a young adventurer who has longed for a life of freedom...",
    link: "https://hianime.pe/watch/one-piece-100?ep=2142",
  },
];


const HeroSection = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[500px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                {/* text-section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-red-400 "
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-in"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className="bg-gradient-to-r from-primary to-primary/50 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full" >
                    <a href={data.link}>Watch Now</a>
                    </button>
                  </div>
                </div>
                {/* image-section */}
                <div className="order-1 sm:order-2 flex justify-center items-center">
                  <div data-aos="zoom-in" data-aos-once="true">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[450px] h-[350px] sm:w-[700px] sm:h-[400px] object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;