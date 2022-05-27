import "./style.scss"
import "./responsive.scss"

import SocialList from "../../reusable-components/socialList/SocialList"

function Hero() {
  const myCVLink = "https://drive.google.com/file/d/1oC89jT1qogmt_DVK32VLM1z0T6peqrmR/view?usp=sharing"
  return (
    <div className="hero-container">
      <div className="hero">
        <img className="hero-img hero-image-animation" src={require("../../../assets/images/hero-image.png")} alt="hero-img" />
        <div className="social-wrapper">
          <button className="get-resume-btn" onClick={() => window.open(myCVLink)}>Get CV</button>
          <SocialList />
        </div>
        {/* <div className="bio-wrapper">
          <p className="extra-info">I have studied programing languages for 3 years in college before dropping out due to family issues. But now i want to get back to writing codes, because this is what i do best.
          </p>
          <p className="bio-important-info">I have been self-studing Javascript, ReactJS, NextJS for 6 months, did some small projects here and there to put my knowledge into practice.
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default Hero