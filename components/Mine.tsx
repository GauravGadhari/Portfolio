import React from "react";
import Image from "next/image";
import { FaYoutube, FaGithub, FaInstagram } from "react-icons/fa"; // Import icons

export const Mine = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-6 mb-4">
        <Image
          src="/icon.png" // Path to your image file
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
          alt="Gaurav Gadhari" // Alt text for accessibility
        />
        <div className="text-center">
          <p className="text-lg font-bold">Gaurav Gadhari</p>
          <p className="mt-2 text-sm font-medium">Find Me On:</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://youtube.com/YOUR_CHANNEL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
