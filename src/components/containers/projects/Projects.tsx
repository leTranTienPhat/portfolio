import "./style.scss"
import "./responsive.scss"
import ProjectCard from '../../reusable-components/ProjectCard/ProjectCard'
import { projects } from "../../../data/data"
import { forwardRef } from "react"
import FadeFromBottom from "../../animate/FadeFromBottom"

const Projects = forwardRef(({ handleOpenModal }: any, ref: any) => {
  return (
    <div className="projects-container" ref={ref} id="section2">
      <div className="projects-wrapper">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              project={project}
              handleOpenModal={handleOpenModal}
            />

          )
        })}
      </div>

    </div>
  )
})

export default Projects