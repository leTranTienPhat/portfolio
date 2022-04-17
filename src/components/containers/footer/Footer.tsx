import "./style.scss"
import "./responsive.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  const name = "LÊ TRẦN TIẾN PHÁT"
  const email = "tienphat0707@gmail.com"
  const phoneNum = "+84 92 116 5585"
  const address = "District 8, Ho Chi Minh City"
  return (
    <div className="footer-container" id="contact">
      <div className="footer-wrapper">
        <div className="footer-title-wrapper">
          <p className="footer-highlight">{name}</p>
          <p>{address}</p>
        </div>
        <div className="footer-contact-wrapper">
          <p>Email:	{email}</p>
          <p>Tel:	{phoneNum}</p>
        </div>

        <div className="footer-social-wrapper">
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
      </div>
    </div>
  )
}

export default Footer