import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import Darkmode from "./Darkmode";

const Head = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Series", link: "#series" },
  { id: 3, name: "Movies", link: "#movies" },
  { id: 4, name: "Website", link: "#website" },
];

const DropdownLinks = [
  { id: 1, name: "Hero", link: "#heroes" },
  { id: 2, name: "Villen", link: "#villens" },
  { id: 3, name: "SideCharacters", link: "#sidecharactes" },
];

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    handleSearch(e); // prevent auto-scroll while typing
  }
};

const handleSearch = (e) => {
  if (e) e.preventDefault();
  if (onSearch && search.trim()) {
    onSearch(search);
    const section = document.getElementById("series");
    section?.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="logo" className="w-10 uppercase" /> Anime
            </a>
          </div>

          {/* Search + Darkmode */}
          <div className="flex justify-between items-center gap-4 text-black">
            <form
              onSubmit={handleSearch}
              className="relative group hidden sm:block"
            >
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-3 py-1 focus:outline-none focus:border-primary"
              />
              <button type="submit">
                <FaSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer" />
              </button>
            </form>
            <button>
              <Darkmode />
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Head.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Characters
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/10"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;