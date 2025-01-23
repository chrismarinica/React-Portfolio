import React from 'react';
import '../styles/Project.css';

const Project = ({ title, image, deployedUrl, repoUrl }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
          Live Site
        </a>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;
