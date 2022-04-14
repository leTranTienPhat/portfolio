import About from "./About/About"
import LargeProjects from "./LargeProjects/LargeProjects"
import SmallProjects from "./SmallProjects/SmallProjects"


import "./style.scss"

function LandingPage() {
  return (
    <div className='content-container'>
      <h2>My Projects</h2>
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