import "./style.scss"
import "./responsive.scss"
import { forwardRef } from "react"
import SplitSection from "../../reusable-components/splitSection/SplitSection"

import reactIcon from "../../../assets/images/React.png"
import jsIcon from "../../../assets/images/javascript.png"
import htmlIcon from "../../../assets/images/html5.png"
import cssIcon from "../../../assets/images/css.png"
import sassIcon from "../../../assets/images/sass.webp"
import reduxIcon from "../../../assets/images/Redux.png"
import nextIcon from "../../../assets/images/next.png"
import githubIcon from "../../../assets/images/Github.png"
import jiraIcon from "../../../assets/images/jira.png"
import ptsIcon from "../../../assets/images/PS.png"
import aiIcon from "../../../assets/images/AI.png"
import vn from "../../../assets/images/vn-flag.webp"
import jp from "../../../assets/images/jp-flag.webp"
import usa from "../../../assets/images/us-flag.webp"
import phpIcon from "../../../assets/images/PHP-logo.png"
import vueIcon from "../../../assets/images/vuejs.png"
import nuxtIcon from "../../../assets/images/Nuxt_logo.png"

const About = forwardRef((props, ref: any) => {
  return (
    <div className="about-container" ref={ref} id="section3">
      <div className="about-wrapper">
        <SplitSection value="Skills" />
        <div className="about-desc">
          <p className="quotes">"Knowledge rests not upon truth alone, but upon error also"</p>
        </div>

        <div className="skills-gridview">
          <div className="skills-wrapper">
            <ul className="skills-list">
              <li><img src={htmlIcon} alt="htmlIcon" /></li>
              <li><img src={cssIcon} alt="cssIcon" /></li>
              <li><img src={jsIcon} alt="jsIcon" /></li>
              <li><img src={phpIcon} alt="phpIcon" /></li>
            </ul>
            <ul className="skills-list">
              <li><img src={reactIcon} alt="reactIcon" /></li>
              <li><img src={nextIcon} alt="nextIcon" /></li>
              <li><img src={vueIcon} alt="vueIcon" /></li>
              <li><img src={nuxtIcon} alt="nuxtIcon" /></li>
            </ul>

            <ul className="skills-list">
              <li> <img src={reduxIcon} alt="reduxIcon" /> </li>
              <li> <img src={sassIcon} alt="sassIcon" /> </li>
              <li> <img src={githubIcon} alt="githubIcon" /> </li>
              <li> <img src={jiraIcon} alt="jiraIcon" /> </li>
            </ul>
            <ul className="skills-list">
              <li> <img src={ptsIcon} alt="psIcon" /> </li>
              <li> <img src={aiIcon} alt="aiIcon" />  </li>
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
})

export default About