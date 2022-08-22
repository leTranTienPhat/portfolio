import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import "./styles.scss"
import "./responsive.scss"

const SocialList = () => {
  return (
    <ul className="social-list">
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
      <a href="https://github.com/leTranTienPhat">
        <li>
          <FontAwesomeIcon icon={faGithub} className="github" />
        </li>
      </a>
      <a href="https://www.linkedin.com/in/letrantienphat/">
        <li>
          <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
        </li>
      </a>
    </ul>
  )
}

export default SocialList