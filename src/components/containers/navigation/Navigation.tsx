import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars
} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
function Navigation() {
  const [toggleNavigator, setToggleNavigator] = useState<boolean>(false);
  return (
    <>
      <div className="navigator-toggle-btn">
        <FontAwesomeIcon icon={faBars} className={`navigator-icon ${toggleNavigator && "active"}`} onClick={() => setToggleNavigator(!toggleNavigator)} />
      </div>

      <div className={`navigator-container ${toggleNavigator && "showNavigator"}`} >
        <ul className="navigator-list">
          <li><a href="#home">HOME</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#aboutme">ABOUT ME</a> </li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </>

  )
}

export default Navigation