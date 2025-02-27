import React from "react";

const ExternalLink = ({ title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline hover:text-blue-300 transition"
    >
      {title}
    </a>
  );
};

export default ExternalLink;
