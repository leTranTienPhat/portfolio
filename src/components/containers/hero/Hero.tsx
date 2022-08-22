import "./style.scss"
import "./responsive.scss"
import { forwardRef } from "react"
import SocialList from "../../reusable-components/socialList/SocialList"


const Hero = forwardRef((props, ref: any) => {

  const myCVLink = "https://drive.google.com/file/d/13L5SkxttKgW1WmXWWHX4LVCl-FiRe1Ik/view?usp=sharing"
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