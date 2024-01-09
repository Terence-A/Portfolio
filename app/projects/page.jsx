import LgCard from "@/components/lgCard";
import SmCard from "@/components/smCard";
import React from "react";
import ProjectList from "@/components/projectList";

const Projects = () => {
  console.log(ProjectList[0].portTitle);
  return (
    <section>
      <h1 className="text-white text-center mb-12">My Projects</h1>
      <div className="flex flex-wrap justify-center">
        {ProjectList.map((list) => (
          <div key={list.id}>
            <SmCard
              title={list.portTitle}
              repoLink={list.repoLink}
              image={list.image}
              deployLink={list.deployLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
