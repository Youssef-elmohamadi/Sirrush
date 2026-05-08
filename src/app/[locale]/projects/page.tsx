import React from "react";
import ProjectsHero from "../../_components/projects/ProjectsHero";
import ProjectsContainer from "../../_components/projects/ProjectsContainer";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <ProjectsHero />
      <ProjectsContainer />
    </div>
  );
}
