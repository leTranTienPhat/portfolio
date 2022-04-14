import "./style.scss"

import ProjectCard from '../../../reusable-components/ProjectCard/ProjectCard'
import ColoShop from '../../../../assets/images/ColoShop.png'
import LinkNeverPhai from "../../../../assets/images/LinkNeverPhai.png"

function LargeProjects() {
  return (
    <ul className="large-projects-container">
      <li>
        <ProjectCard title="E-Commerce ColoShop" img={ColoShop} />
      </li>
      <li>
        <ProjectCard title="LinkNeverPhai" img={LinkNeverPhai} />
      </li>
    </ul>)
}

export default LargeProjects