import "./style.scss"

import ProjectCard from '../../../reusable-components/ProjectCard/ProjectCard'
import ColoShop from '../../../../assets/images/ColoShop.png'
import LinkNeverPhai from "../../../../assets/images/LinkNeverPhai.png"

function LargeProjects() {
  return (
    <ul className="large-projects-container">
      <li>
        <ProjectCard
          title="E-Commerce StyleShop"
          img={ColoShop}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          githubLink="https://github.com/StevenOng97/Ecommerce-Frontend"
          websiteLink="https://ecommerce-frontend-git-products-id-stevenong97.vercel.app/"
        />
      </li>
      <li>
        <ProjectCard
          title="LinkNeverPhai"
          img={LinkNeverPhai}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          githubLink="https://github.com/Dust07/LinkNeverDieClone"
          websiteLink="https://link-never-die-clone-bjlco0ahr-dust07.vercel.app/"
        />

      </li>
    </ul>)
}

export default LargeProjects