import "./style.scss"
import "./responsive.scss"
import reactIcon from "../../../assets/images/React.png"
import jsIcon from "../../../assets/images/javascript.png"
import htmlIcon from "../../../assets/images/html5.png"
import cssIcon from "../../../assets/images/css.png"
import sassIcon from "../../../assets/images/sass.webp"
import reduxIcon from "../../../assets/images/Redux.png"
import nextIcon from "../../../assets/images/next.png"
import githubIcon from "../../../assets/images/Github.png"
import ptsIcon from "../../../assets/images/PS.png"
import aiIcon from "../../../assets/images/AI.png"
import vn from "../../../assets/images/vn-flag.webp"
import jp from "../../../assets/images/jp-flag.webp"
import usa from "../../../assets/images/us-flag.webp"
import SplitSection from "../../reusable-components/splitSection/SplitSection"

function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <SplitSection value="Skills" />
        <div className="about-desc">
          <p className="quotes">"Knowledge rests not upon truth alone, but upon error also"</p>
        </div>

        <div className="skills-gridview">
          <div className="skills-wrapper">
            <ul className="skills-list">
              <li><img src={reactIcon} alt="reactIcon" /></li>
              <li><img src={nextIcon} alt="nextIcon" /></li>
            </ul>
            <ul className="skills-list">
              <li><img src={jsIcon} alt="jsIcon" /></li>
              <li><img src={htmlIcon} alt="htmlIcon" /></li>
              <li><img src={cssIcon} alt="cssIcon" /></li>
            </ul>
          </div>
          <div className="skills-wrapper">
            <ul className="skills-list">
              <li> <img src={reduxIcon} alt="reduxIcon" className="small-icon" /> </li>
              <li> <img src={sassIcon} alt="sassIcon" className="small-icon" /> </li>
              <li> <img src={githubIcon} alt="githubIcon" className="small-icon" /> </li>
            </ul>
            <ul className="skills-list">
              <li> <img src={ptsIcon} alt="psIcon" className="small-icon" /> </li>
              <li> <img src={aiIcon} alt="aiIcon" className="small-icon" />  </li>
            </ul>
          </div>
        </div>

        <SplitSection value="Languages" />
        <div className="languages-wrapper">
          <div className="languages-card">
            <img src={vn} alt="Vietnamese" />
            <p>Vietnamese</p>
          </div>
          <div className="languages-card">
            <img src={usa} alt="English" />
            <p>English</p>
          </div>
          <div className="languages-card">
            <img src={jp} alt="Japanese" />
            <p>Japanese</p>
          </div>
        </div>
      </div >
    </div>

  )
}

export default About