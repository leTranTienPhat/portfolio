import "./style.scss"
import "./responsive.scss"
function ProjectCard({ project }: any) {
  const { title, img, desc, teamSize, technology, features, tag, githubLink, websiteLink } = project
  return (
    <div className="project-card-container">
      <div className="project-card-wrapper">
        <div>
          <div className="project-card-img">
            <h3>{title}</h3>
            <img src={img} alt={title} />
          </div>
          <div className="project-card-desc">
            {/* <p className="project-card-desc-text">{desc}</p> */}
            <p className="desc-text"><span>Description: </span>{desc}</p>
            <p className="desc-text"><span>Team size: </span>{teamSize}</p>
            <p className="desc-text"><span>Technologies: </span>{technology}</p>
            <p className="desc-text"><span>Features: </span>{features}</p>
            <p className="desc-text"><span>Tag: </span>{tag}</p>
          </div>
        </div>

        <div className="project-btn-wrapper">
          <button className="project-link-btn github" onClick={() => window.open(githubLink)}>Github</button>
          <button className="project-link-btn" onClick={() => window.open(websiteLink)}>View Website</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard