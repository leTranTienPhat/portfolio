import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import { ReactComponent as SvgFacebook } from "../../../assets/images/facebook.svg"
function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <img className="hero-img" src={require("../../../assets/images/hero-image.png")} alt="hero-img" />
        <div className="social-wrapper">
          <ul className="social-list">
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
          </ul>
        </div>
        <div className="bio-wrapper">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam blanditiis nihil iusto, mollitia deserunt eius odio dolor itaque sunt, quas, vero nesciunt. Ea perferendis ex, sed iure nulla dignissimos veniam?</p>
        </div>
      </div>
    </div>
  )
}

export default Hero