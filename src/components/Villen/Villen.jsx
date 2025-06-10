import React from "react";
import Slider from "react-slick";

const VillenData = [
  {
    id: 1,
    name: "Sukuna",
    discription: "Cursed king of demons with terrifying power and malevolence.",
    img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/sukuna-uses-his-domain-expansion-in-jujutsu-kaisen.jpg",
  },
  {
    id: 2,
    name: "Blackbeard",
    discription:
      "Ambitious pirate with darkness powers, betrays allies for strength.",
    img: "https://i.pinimg.com/736x/7d/2f/94/7d2f94770f0cedb885a570d732db99b5.jpg",
  },
  {
    id: 3,
    name: "Muzan Kibutsuji",
    discription:
      "First demon, manipulative and merciless, creates an army of demons.",
    img: "https://cdna.artstation.com/p/assets/images/images/042/121/360/large/sakshi-tripathi-final.jpg?1633624058",
  },
  {
    id: 4,
    name: "Frieza",
    discription:
      "Tyrannical alien overlord, destroys planets, obsessed with domination.",
    img: "https://ih1.redbubble.net/image.1579031277.4814/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg",
  },
  {
    id: 5,
    name: "Madara Uchiha",
    discription:
      "Legendary shinobi, seeks eternal peace through infinite illusion plan.",
    img: "https://cdn.shopify.com/s/files/1/0785/4004/6646/files/39349af71e44acd05f7ff09cf78eed5d_480x480.jpg?v=1727177811",
  },
];

const Villen = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
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
    <div id="villens" className="py-10">
      <div className="container">
        {/* Head */}
        <div className="text-center  max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Villen
          </h1>
          <p data-aos="fade-up" className="text-xl text-gray-400">
            Opposes the hero, driven by power or trauma, adds conflict and depth
            with complex goals and memorable traits.{" "}
          </p>
        </div>

        {/* Body */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {VillenData.map((data) => (
              <div className="my-7">
                <div
                  key={data.id}
                  className="flex flex-row gap-4 py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative h-[160px]"
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

export default Villen;
