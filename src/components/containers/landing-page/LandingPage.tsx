import "./style.scss"
import "./responsive.scss"
import About from "./About/About"
import Projects from "./Projects/Projects"

function LandingPage() {
  return (
    <div className='content-container'>
      <div className="section">
        <h2 className="split-section" id="projects">Projects</h2>
      </div>
      <div className="project-wrapper">
        <div className="project-list">
          <Projects />
        </div>
      </div>
      <About />
    </div>
  )
}

export default LandingPage