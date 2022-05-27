import "./style.scss"
import "./responsive.scss"
import SocialList from "../../reusable-components/socialList/SocialList"


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
          <SocialList />
        </div>
      </div>
    </div>
  )
}

export default Footer