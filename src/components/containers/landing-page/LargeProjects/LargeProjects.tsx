import "./style.scss"
import "./responsive.scss"

import ProjectCard from '../../../reusable-components/ProjectCard/ProjectCard'
import { largeProjects } from "../../../../data/data"


function LargeProjects() {
  return (
    <ul className="large-projects-container">
      {largeProjects.map((project, index) => {
        const { title, img, desc, githubLink, websiteLink } = project
        return (
          <li key={index}>
            <ProjectCard
              title={title}
              img={img}
              desc={desc}
              githubLink={githubLink}
              websiteLink={websiteLink}
            />
          </li>
        )
      })}
    </ul>)
}

export default LargeProjects