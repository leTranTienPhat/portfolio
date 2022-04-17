import "./style.scss"
import reactIcon from "../../../../assets/images/React.png"
import jsIcon from "../../../../assets/images/javascript.png"
import htmlIcon from "../../../../assets/images/html5.png"
import cssIcon from "../../../../assets/images/css.png"
import sassIcon from "../../../../assets/images/sass.webp"
import reduxIcon from "../../../../assets/images/Redux.png"
import githubIcon from "../../../../assets/images/Github.png"
import ptsIcon from "../../../../assets/images/PS.png"
import aiIcon from "../../../../assets/images/AI.png"
import vn from "../../../../assets/images/vn.png"
import jp from "../../../../assets/images/jp.png"
import usa from "../../../../assets/images/usa.png"


function About() {
  return (
    <div className="about-container" id="aboutme">
      <div className="section">
        <h2 className="split-section">What can i do?</h2>
      </div>
      <div className="about-desc">
        <p>"Knowledge is of no value unless you put it into practice"</p>
      </div>

      <div className="skills-gridview">
        <div className="skills-wrapper">
          <ul className="skills-list">
            <li>
              <img src={reactIcon} alt="reactIcon" />
            </li>
            <li><img src={jsIcon} alt="jsIcon" /></li>
            <li><img src={htmlIcon} alt="htmlIcon" /></li>
            <li><img src={cssIcon} alt="cssIcon" /></li>
          </ul>
        </div>
        <div className="skills-wrapper">
          <div className="library">
            <ul className="skills-list">
              <li> <img src={reduxIcon} alt="reduxIcon" className="small-icon" /> </li>
              <li> <img src={sassIcon} alt="sassIcon" className="small-icon" /> </li>
              <li> <img src={githubIcon} alt="githubIcon" className="small-icon" /> </li>
            </ul>
          </div>
          <div className="more-skills">
            <ul className="skills-list">
              <li> <img src={ptsIcon} alt="psIcon" className="small-icon" /> </li>
              <li> <img src={aiIcon} alt="aiIcon" className="small-icon" />  </li>

            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="split-section">Languages</h2>
      </div>
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
  )
}

export default About