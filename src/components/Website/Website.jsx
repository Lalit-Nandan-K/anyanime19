import React from "react";
import Img1 from "../../assets/website/netflix.jpg";
import Img2 from "../../assets/website/cruncyroll.png";
import Img3 from "../../assets/website/hianime.jpg";

const WebData = [
  {
    id: 1,
    img: Img1,
    title: "Netflix",
    link: "https://www.netflix.com/in/",
  },
  {
    id: 2,
    img: Img2,
    title: "Crunchyroll",
    link: "https://www.crunchyroll.com/",
  },
  {
    id: 3,
    img: Img3,
    title: "HiAnime",
    link: "https://hianime.tv/",
  },
];

const Website = () => {
  return (
    <div id="website" className="py-5">
      <div className="container">
        <div className="text-center  mb-8">
          <h1 data-aos="zoom-in" data-aos-once="true" className="text-3xl font-bold">
            Websites For Anime
          </h1>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-8">
          {WebData.map((data) => (
            <div
              key={data.id}
              className="rounded-2xl bg-white dark:bg-gray-600 relative shadow-xl duration-300 max-w-[300px]"
            >
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center items-center">
                  <div data-aos="zoom-in" data-aos-once="true">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="h-[120px] w-[120px] object-cover rounded-full shadow-md mx-auto transition duration-300 hover:scale-110 hover:shadow-2xl"
                    />
                  </div>
                </div>
              </a>
              <div className="p-4 text-center">
                <h3 className="font-semibold">{data.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Website;
