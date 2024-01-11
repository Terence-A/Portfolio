import LgCard from "@/components/lgCard";
import SmCard from "@/components/smCard";
import React from "react";
import ProjectList from "@/components/projectList";

const Projects = () => {
  return (
    <section>
      <h1 className="text-white text-center mb-4 mt-14">My Projects</h1>
      <div className="flex flex-wrap justify-center pb-20">
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
