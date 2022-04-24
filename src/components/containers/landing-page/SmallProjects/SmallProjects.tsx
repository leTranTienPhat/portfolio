import "./style.scss"
import "./responsive.scss"
import ProjectCard from '../../../reusable-components/ProjectCard/ProjectCard'
import cart from "../../../../assets/images/Cart.png"
import quizApp from "../../../../assets/images/Quiz.png"
import zomatoClone from "../../../../assets/images/Zomato.png"

function SmallProjects() {
  return (
    <ul className="small-projects-container">
      <li>
        <ProjectCard
          title="Zomato's Clone"
          img={zomatoClone}
          desc="Clone version of an Indian delivery website. Built to pratice using Carousel and CSS management."
          githubLink="https://github.com/Dust07/zomato-clone-delivery-app"
          websiteLink="https://zomato-clone-delivery-app.vercel.app/"
        />
      </li>
      <li>
        <ProjectCard
          title="Quiz App"
          img={quizApp}
          desc="An React mini quiz interactive game with timer, able to save highscores on local storage. "
          githubLink="https://github.com/Dust07/QuizChallenge"
          websiteLink="https://quiz-challenge-botqg7ggb-dust07.vercel.app/"
        />
      </li>
      <li>
        <ProjectCard
          title="Shopping cart"
          img={cart}
          desc="Shopping cart functions built when i first started learning React and Hooks."
          githubLink="https://github.com/Dust07/cart-tutorial"
          websiteLink="https://cart-tutorial.vercel.app/"
        />
      </li>
    </ul>
  )
}

export default SmallProjects