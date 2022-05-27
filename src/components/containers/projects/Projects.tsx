import "./style.scss"
import "./responsive.scss"
import ProjectCard from '../../reusable-components/ProjectCard/ProjectCard'
import { projects } from "../../../data/data"
import { forwardRef } from "react"

const Projects = forwardRef((props, ref: any) => {
  return (
    <div className="projects-container" ref={ref} id="section2">
      <div className="projects-wrapper">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              project={project}
            />
          )
        })}
      </div>

    </div>
  )
})

export default Projects