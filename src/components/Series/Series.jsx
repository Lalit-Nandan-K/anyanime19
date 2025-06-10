import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import Img1 from "../../assets/SeriesData/naruto.jpg";
import Img2 from "../../assets/SeriesData/bleach.jpg";
import Img3 from "../../assets/SeriesData/onepieceseries.jpg";
import Img4 from "../../assets/SeriesData/jjk.jpg";
import Img5 from "../../assets/SeriesData/demonslayer.webp";
import Img6 from "../../assets/SeriesData/deathnote.jpg";
import Img7 from "../../assets/SeriesData/drazonball.webp";

const SeriesData = [
  {
    id: 1,
    img: Img1,
    title: "Naruto",
    episodes: "720 episodes",
    rating: "4.6",
    link: "https://hianime.pe/watch/naruto-677?ep=12352",
  },
  {
    id: 2,
    img: Img2,
    title: "Bleach",
    episodes: "366 episodes",
    rating: "4.7",
    link: "https://hianime.pe/watch/bleach-806?ep=13793",
  },
  {
    id: 3,
    img: Img3,
    title: "ONE PIECE",
    episodes: "1000+ episodes",
    rating: "4.7",
    link: "https://hianime.pe/watch/one-piece-100?ep=2142",
  },
  {
    id: 4,
    img: Img4,
    title: "Jujutsu Kaisen",
    episodes: "47 episodes",
    rating: "4.5",
    link: "https://hianime.pe/watch/jujutsu-kaisen-tv-534?ep=10789",
  },
  {
    id: 5,
    img: Img5,
    title: "Demon Slayer",
    episodes: "55 episodes",
    rating: "4.3",
    link: "https://hianime.pe/watch/demon-slayer-kimetsu-no-yaiba-47?ep=1279",
  },
  {
    id: 6,
    img: Img6,
    title: "Death Note",
    episodes: "37 episodes",
    rating: "4.8",
    link: "https://hianime.pe/watch/death-note-60?ep=1464",
  },
  {
    id: 7,
    img: Img7,
    title: "Dragon Ball",
    episodes: "153 episodes",
    rating: "4.8",
    link: "https://hianime.pe/watch/dragon-ball-509?ep=10218",
  },
];

const Series = ({ searchTerm = "" }) => {
  const [viewMore, setViewMore] = useState(false);
  const [columns, setColumns] = useState(4);

  // Ref for scrolling to first matched item
  const firstMatchRef = useRef(null);

  const updateColumns = () => {
    const width = window.innerWidth;
    if (width < 640) setColumns(2);
    else if (width < 768) setColumns(3);
    else setColumns(4);
  };

  useEffect(() => {
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const filteredSeries = SeriesData.filter((series) =>
    series.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedSeries = viewMore ? filteredSeries : filteredSeries.slice(0, columns);

  // Scroll to first matching item when searchTerm changes
  useEffect(() => {
    if (searchTerm && firstMatchRef.current) {
      firstMatchRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchTerm]);

  return (
    <div id="series" className="py-10">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-md text-primary">Best</p>
          <h1 className="text-3xl font-bold">Anime Series</h1>
          <p className="text-xl text-gray-400">
            Anime series are multi-episode shows that explore characters and stories in depth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center gap-6">
          {displayedSeries.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No results found for "{searchTerm}"
            </p>
          ) : (
            displayedSeries.map((data, index) => (
              <div
                key={data.id}
                ref={index === 0 ? firstMatchRef : null} // Attach ref to first displayed item
                className="space-y-3"
              >
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="h-[190px] w-[280px] object-contain rounded-md hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.episodes}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* View More/Less Button */}
        {filteredSeries.length > columns && (
          <div className="text-center mt-8">
            <button
              onClick={() => setViewMore(!viewMore)}
              className="bg-primary text-white py-1 px-4 rounded-full mt-4 transition-transform duration-300 hover:scale-105"
            >
              {viewMore ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Series;
