import "./style.scss"
import "./responsive.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWarehouse,
  faAddressCard,
  faRectangleList,
  faSuitcase,

} from "@fortawesome/free-solid-svg-icons"

const navigationIcons = [faWarehouse, faRectangleList, faSuitcase, faAddressCard]
function UpdatedNavigation() {
  return (
    <div className="updated-navigation-container">
      <div className="updated-navigation-icon-list">
        {navigationIcons.map((icon, index) => {
          return (
            <FontAwesomeIcon icon={icon} key={index} className={`${index === 0 && "current-section"}`} />
          )
        })
        }
      </div>

    </div>
  )
}
export default UpdatedNavigation