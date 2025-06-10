import React from "react";
import Slider from "react-slick";

const HeroData = [
  {
    id: 1,
    name: "Yuji Itadori",
    discription:
      "Kind-hearted teen who swallows a cursed object, fights evil spirits to fulfill his grandfather’s wish of helping others.",
    img: "https://4kwallpapers.com/images/wallpapers/yuji-itadori-fan-2560x2560-16498.jpg",
  },
  {
    id: 2,
    name: "Monkey D. Luffy",
    discription:
      "Carefree pirate with rubber powers and big dreams, Luffy leads his crew to find the legendary treasure, One Piece.",
    img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/Luffy-One-Piece-Red.jpg",
  },
  {
    id: 3,
    name: "Tanjiro Kamado",
    discription:
      "Compassionate demon slayer with heightened senses, seeks revenge and a cure for his sister Nezuko, who became a demon.",
    img: "https://m.media-amazon.com/images/I/81vznx3NwyL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Goku",
    discription:
      "Saiyan warrior with a pure heart, defends Earth while seeking stronger opponents to fight and improve his power.",
    img: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/07/Ultra-Instinct-Goku.jpg",
  },
  {
    id: 5,
    name: "Naruto Uzumaki",
    discription:
      "Energetic ninja dreaming of becoming Hokage, overcomes loneliness and hate through perseverance, courage, and unshakable bonds of friendship.",
    img: "https://i.pinimg.com/736x/42/cf/6e/42cf6ea7dae7548244a7d5a546bf37aa.jpg",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div id="heroes" className="bg-white dark:bg-black text-black dark:text-white py-10">
      <div className="container">
        {/* Head */}
        <div className="text-center  pb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Heroes
          </h1>
          <p data-aos="fade-up" className="text-xl text-gray-400">
            Main character with strong morals, grows through challenges,
            protects others, and often unlocks powerful abilities to defeat
            evil.{" "}
          </p>
        </div>

        {/* Body */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div className="my-7">
                <div
                  key={data.id}
                  className="flex flex-row gap-4 py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative h-[160px]"
                >
                  <div className="mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mt-1">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-start">
                    <div className="space-y-3">
                      <h2 className="text-lg font-bold mb-1 text-black/90 dark:text-white">
                        {data.name}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                        {data.discription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;