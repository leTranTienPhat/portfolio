import "./style.scss"

import ProjectCard from '../../../reusable-components/ProjectCard/ProjectCard'
import cart from "../../../../assets/images/Cart.png"
import quizApp from "../../../../assets/images/Quiz.png"
import discordClone from "../../../../assets/images/DiscordClone.png"

function SmallProjects() {
  return (
    <ul className="small-projects-container">
      <li>
        <ProjectCard
          title="Discord's Landing page"
          img={discordClone}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          githubLink="https://github.com/Dust07/DiscordClone"
          websiteLink="https://github.com/Dust07/DiscordClone"
        />
      </li>
      <li>
        <ProjectCard
          title="Quiz App"
          img={quizApp}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          githubLink="https://github.com/Dust07/QuizChallenge"
          websiteLink="https://quiz-challenge-botqg7ggb-dust07.vercel.app/"
        />
      </li>
      <li>
        <ProjectCard
          title="Shopping cart"
          img={cart}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          githubLink="https://github.com/Dust07/cart-tutorial"
          websiteLink="https://cart-tutorial.vercel.app/"
        />
      </li>
    </ul>
  )
}

export default SmallProjects