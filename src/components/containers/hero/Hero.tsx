import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <img className="hero-img" src={require("../../../assets/images/hero-image.png")} alt="hero-img" />
        <div className="social-wrapper">
          <ul className="social-list">
            <a href="https://www.facebook.com/DMs.Cloud/">
              <li>
                <button className="get-resume-btn">Get CV</button>
              </li>
            </a>
            <a href="https://www.facebook.com/DMs.Cloud/">
              <li>
                <FontAwesomeIcon icon={faFacebook} className="facebook" />
              </li>
            </a>
            <a href="https://www.instagram.com/tienphat07/">
              <li>
                <FontAwesomeIcon icon={faInstagram} className="instagram" />
              </li>
            </a>
            <a href="https://github.com/Dust07">
              <li>
                <FontAwesomeIcon icon={faGithub} />
              </li>
            </a>
            <a href="https://www.linkedin.com/in/letrantienphat/">
              <li>
                <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
              </li>
            </a>
          </ul>
        </div>
        <div className="bio-wrapper">
          <p>I have studied programing languages for 3 years in college before dropping out due to family issues. But now i want to get back to writing codes, because this is what i do best.
          </p>
          <p className="bio-important-info">I have been self-studing Javascript, React for 4 months, did some small projects here and there to put my knowledge into practice.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero