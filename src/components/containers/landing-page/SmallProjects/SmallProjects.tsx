import "./style.scss"
import "./responsive.scss"
import ProjectCard from '../../../reusable-components/ProjectCard/ProjectCard'
import cart from "../../../../assets/images/Cart.png"
import quizApp from "../../../../assets/images/Quiz.png"
import zomatoClone from "../../../../assets/images/Zomato.png"
import { smallProjects } from "../../../../data/data"

function SmallProjects() {
  return (
    <ul className="small-projects-container">
      {smallProjects.map((project, index) => {
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
    </ul>
  )
}

export default SmallProjects