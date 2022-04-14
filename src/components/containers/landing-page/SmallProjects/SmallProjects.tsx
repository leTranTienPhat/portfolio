import "./style.scss"

import ProjectCard from '../../../reusable-components/ProjectCard/ProjectCard'
import cart from "../../../../assets/images/Cart.png"
import quizApp from "../../../../assets/images/Quiz.png"
import discordClone from "../../../../assets/images/DiscordClone.png"

function SmallProjects() {
  return (
    <ul className="small-projects-container">
      <li>
        <ProjectCard title="Discord's Landing page" img={discordClone} />
      </li>
      <li>
        <ProjectCard title="Quiz App" img={quizApp} />
      </li>
      <li>
        <ProjectCard title="Shopping cart" img={cart} />
      </li>
    </ul>
  )
}

export default SmallProjects