import React, { useState, useEffect, useRef } from "react";
import Img1 from "../../assets/MoviesData/spiritedaway.jpg";
import Img2 from "../../assets/MoviesData/silentvoicemovie.jpg";
import Img3 from "../../assets/MoviesData/garden.jpg";
import Img4 from "../../assets/MoviesData/suzume.avif";
import Img5 from "../../assets/MoviesData/weatheringwithyou.avif";
import Img6 from "../../assets/MoviesData/yournamemovie.jpg";
import { FaStar } from "react-icons/fa";

const MoviesData = [
  {
    id: 1,
    img: Img1,
    title: "Spirited Away",
    duration: "2hr4min",
    rating: "8.6",
    link: "https://hianime.pe/watch/spirited-away-20?ep=58021",
  },
  {
    id: 2,
    img: Img2,
    title: "A Silent Voice",
    duration: "2hr10min",
    rating: "8.1",
    link: "https://hianime.pe/watch/a-silent-voice-11?ep=50465",
  },
  {
    id: 3,
    img: Img3,
    title: "The Garden of Words",
    duration: "46min",
    rating: "7.4",
    link: "https://hianime.pe/watch/the-garden-of-words-414?ep=57988",
  },
  {
    id: 4,
    img: Img4,
    title: "Suzume",
    duration: "2hr2min",
    rating: "7.6",
    link: "https://hianime.pe/watch/the-garden-of-words-414?ep=57988",
  },
  {
    id: 5,
    img: Img5,
    title: "Weathering with You",
    duration: "1hr52min",
    rating: "7.5",
    link: "https://hianime.pe/watch/weathering-with-you-111?ep=71785",
  },
  {
    id: 6,
    img: Img6,
    title: "Your Name",
    duration: "1hr46min",
    rating: "8.4",
    link: "https://hianime.pe/watch/your-name-10?ep=57910",
  },
];

// 🎯 Accept searchTerm and shouldScroll props
const Movies = ({ searchTerm = "", shouldScroll = false }) => {
  const [viewMore, setViewMore] = useState(false);
  const [columns, setColumns] = useState(5);
  const firstMatchRef = useRef(null);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) setColumns(2);
      else if (width < 768) setColumns(3);
      else setColumns(5);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // 🔍 Filter movies by search term
  const filteredMovies = MoviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedMovies = viewMore
    ? filteredMovies
    : filteredMovies.slice(0, columns);

  // ⬇ Scroll to first match on search
  useEffect(() => {
    if (shouldScroll && searchTerm && firstMatchRef.current) {
      firstMatchRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchTerm, shouldScroll]);

  return (
    <div id="movies" className="bg-white dark:bg-black text-black dark:text-white py-10">
      <div className="container">
        {/* Head Section */}
        <div className="text-left mb-10">
          <p className="text-md text-primary">Top Rated</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold mb-4">
            Anime Movies
          </h1>
          <p data-aos="fade-up" className="text-lg text-gray-600 dark:text-gray-300">
            Anime movies are standalone films known for stunning visuals and
            emotional storytelling. They’re perfect for short but powerful
            viewing experiences.
          </p>
        </div>

        {/* Body Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-6">
          {displayedMovies.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No results found for "{searchTerm}"
            </p>
          ) : (
          displayedMovies.map((data, index) => (
            <div
              key={data.id}
              ref={index === 0 ? firstMatchRef : null}
              className="rounded-2xl bg-white dark:bg-gray-800 relative shadow-xl duration-300 group max-w-[300px]"
            >
              <div className="flex justify-center items-center">
                <div data-aos="zoom-in" data-aos-once="true">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="h-[280px] w-[200px] object-cover rounded-xl shadow-md mx-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {data.duration}
                </p>
                <div className="flex justify-center items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span>{data.rating}</span>
                </div>
                <button className="bg-primary text-white py-1 px-4 rounded-full mt-4 transition-transform duration-300 hover:scale-105">
                  <a href={data.link}>Watch Now</a>
                </button>
              </div>
            </div>
          ))
          )}
        </div>

        {/* View More/Less button */}
        {filteredMovies.length > columns && (
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

export default Movies;
