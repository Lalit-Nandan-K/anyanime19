import React from 'react';
import Slider from "react-slick";

const SideCharacterData = [
  {
    id: 1,
    name: "Gojo",
    discription: "Powerful jujutsu sorcerer with limitless technique and playful nature.",
    img: "https://i.ytimg.com/vi/3WyuZl8P680/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDftnvLtI4QhuUw2DLtG8j5ZxN_fw",
  },
  {
    id: 2,
    name: "Zoro",
    discription: "Sword master aiming to be world’s strongest, loyal to Luffy.",
    img: "https://4kwallpapers.com/images/wallpapers/roronoa-zoro-4480x2520-19795.jpg",
  },
  {
    id: 3,
    name: "Zenitsu",
    discription: "Fearful demon slayer with lightning speed when unconscious or cornered.",
    img: "https://4kwallpapers.com/images/wallpapers/zenitsu-agatsuma-3840x2160-19143.jpg",
  },
  {
    id: 4,
    name: "Vegeta",
    discription: "Proud Saiyan prince, rival to Goku, constantly seeks strength.",
    img: "https://wallpapersok.com/images/hd/raging-vegeta-dragon-ball-z-iphone-w9b3uoy11l98bvfg.jpg",
  },
  {
    id: 5,
    name: "Kakashi",
    discription: "Copy ninja with Sharingan, calm leader and skilled strategist.",
    img: "https://i.pinimg.com/736x/ee/a2/1d/eea21dfa6e1fc1361a7867c713ec319a.jpg",
  },
];


const SideCharacter = () => {
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
    <div id='sidecharactes' className="bg-white dark:bg-black text-black dark:text-white py-10">
      <div className="container">
        {/* Head */}
        <div className="text-center  pb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
             Side Characters
          </h1>
          <p data-aos="fade-up" className="text-xl text-gray-400">
Supports the hero, adds humor or emotion, and often surprises with growth or unique contributions to the story.          </p>
        </div>

        {/* Body */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
          {SideCharacterData.map((data) => (
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
}

export default SideCharacter;