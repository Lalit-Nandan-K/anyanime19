import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Owner = () => {
  return (
    <div className=" py-8">
      <div className="flex flex-row justify-center items-center gap-8">
        <a
          href="#"
          className="hover:text-pink-500 transition-colors duration-300"
        >
          <FaInstagram className="text-4xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/lalit-nandan-29610a299"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          <FaLinkedin className="text-4xl" />
        </a>
        <a
          href="https://wa.me/919508286005"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors duration-300"
        >
          <FaWhatsapp className="text-4xl" />
        </a>
      </div>
      <div className="flex flex-row justify-center items-center gap-2 py-3">
        <p>
          Created for Anime lover by{" "}
          <span className="font-bold">Lalit Nandan</span>
        </p>
      </div>
    </div>
  );
};

export default Owner;
