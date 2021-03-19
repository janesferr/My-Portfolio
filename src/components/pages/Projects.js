import React from "react";
import Card from "./Card";
import Fade from "react-reveal/Fade";
import data from "./Janedata"
import  "./Project.scss"


function Projects() {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Project</h1>
          </Fade>
          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                >
                </Card>
               ))} 
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
