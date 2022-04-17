import "./style.scss"
import "./responsive.scss"
import About from "./About/About"
import LargeProjects from "./LargeProjects/LargeProjects"
import SmallProjects from "./SmallProjects/SmallProjects"

function LandingPage() {
  return (
    <div className='content-container'>
      <div className="section">
        <h2 className="split-section" id="projects">Projects</h2>
      </div>
      <div className="project-wrapper">
        <div className="project-list">
          <LargeProjects />
          <SmallProjects />
        </div>
      </div>
      <About />
    </div>
  )
}

export default LandingPage