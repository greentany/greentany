import React from 'react';
import { FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="w-full bg-[#0000FF] z-50">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-between h-10 md:h-12 text-sm md:text-base">
          <a
            href="mailto:contact@greentany.com"
            className="inline-flex items-center gap-2 font-medium text-white hover:text-brand-green transition-colors duration-200"
          >
            <FaEnvelope className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
            contact@greentany.com
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://www.facebook.com/greentany.conseil.madagascar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebook className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;


