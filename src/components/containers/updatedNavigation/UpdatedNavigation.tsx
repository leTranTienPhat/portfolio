import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWarehouse,
  faAddressCard,
  faRectangleList,
  faSuitcase,

} from "@fortawesome/free-solid-svg-icons"

const navigationIcons = [faWarehouse, faRectangleList, faSuitcase, faAddressCard]
function UpdatedNavigation({ heroInView, projectsInView, skillsInView, contactInView }: any) {
  const options = [heroInView, projectsInView, skillsInView, contactInView]
  return (
    <div className="updated-navigation-container">
      <div className="updated-navigation-icon-list">
        {navigationIcons.map((icon, index) => {
          return (
            <a href={`#section${index + 1}`}>
              <FontAwesomeIcon icon={icon} key={index} className={`${options[index] && "current-section"}`} />
            </a>
          )
        })
        }
      </div>
    </div>
  )
}
export default UpdatedNavigation