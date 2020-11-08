import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import data from "../data.js";

const ProjectCardContainer = ({}) => {
  const [projectList] = useState(data);
  const projectCards = projectList.map((project) => {
    const { id, title, url } = project;
    return <ProjectCard keys={id} title={title} url={url} />;
  });

  return (
    <section>
      <h2>Basic projects</h2>
      <div className="underline"></div>
      <div className="grid">{projectCards}</div>
    </section>
  );
};
export default ProjectCardContainer;
