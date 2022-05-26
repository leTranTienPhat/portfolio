import "./style.scss"
import "./responsive.scss"
import ProjectCard from '../../reusable-components/ProjectCard/ProjectCard'
import { projects } from "../../../data/data"

function Projects() {
  return (
    <div className="projects-container">
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
}

export default Projects