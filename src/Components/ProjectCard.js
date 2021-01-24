import React from "react";

const ProjectCard = ({ id, title, url }) => {


  return (
    <a href={url} className="cardWrapper" target='_blank' rel="noreferrer">
      <div className='card'>
        <img src={process.env.PUBLIC_URL + `/images/${title}.png`} alt={title} />
        <h3>{title.replace('_', ' ')}</h3>
      </div>
    </a>
  );
};
export default ProjectCard;
