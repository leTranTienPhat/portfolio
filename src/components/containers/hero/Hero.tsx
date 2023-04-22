import "./style.scss"
import "./responsive.scss"
import { forwardRef } from "react"
import SocialList from "../../reusable-components/socialList/SocialList"


const Hero = forwardRef((props, ref: any) => {
  const myCVLink = "https://drive.google.com/file/d/17ccVNvFYUNL703TlaJkY4prYTk_b_0pm/view?usp=share_link"
  return (
    <div className="hero-container" ref={ref} id="section1">
      <div className="hero">
        <img className="hero-img hero-image-animation" src={require("../../../assets/images/hero-image.png")} alt="hero-img" />
        <div className="social-wrapper">
          <button className="get-resume-btn" onClick={() => window.open(myCVLink)}>Get Resume</button>
          <SocialList />
        </div>
      </div>
    </div>
  )
})

export default Hero
