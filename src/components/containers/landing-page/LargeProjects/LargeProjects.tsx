import "./style.scss"

import ProjectCard from '../../../reusable-components/ProjectCard/ProjectCard'
import ColoShop from '../../../../assets/images/ColoShop.png'
import LinkNeverPhai from "../../../../assets/images/LinkNeverPhai.png"

function LargeProjects() {
  return (
    <ul className="large-projects-container">
      <li>
        <ProjectCard
          title="StyleShop"
          img={ColoShop}
          desc="An MERN-stack E-commerce website that i collaborated with another mid-level developer friend of mine. I did about 50% of the front-end work in this project, which involve using React, Redux, SASS."
          githubLink="https://github.com/StevenOng97/Ecommerce-Frontend"
          websiteLink="https://ecommerce-frontend-git-products-id-stevenong97.vercel.app/"
        />
      </li>
      <li>
        <ProjectCard
          title="LinkNeverPhai"
          img={LinkNeverPhai}
          desc="A clone version of LinkNerverDie's original website. I built the website from scratch in order to understand how things work. Database are stored using Firebase. Have fully functional CRUD for users."
          githubLink="https://github.com/Dust07/LinkNeverDieClone"
          websiteLink="https://link-never-die-clone-bjlco0ahr-dust07.vercel.app/"
        />

      </li>
    </ul>)
}

export default LargeProjects