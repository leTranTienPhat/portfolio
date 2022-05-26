import "./style.scss"
import "./responsive.scss"
import ProjectCard from '../../../reusable-components/ProjectCard/ProjectCard'
import { projects } from "../../../../data/data"

function Projects() {
  return (
    <ul className="projects-container">
      {projects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            project={project}
          />
        )
      })}
    </ul>
  )
}

export default Projects