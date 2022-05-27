import "./style.scss"
import "./responsive.scss"
function ProjectCard({ project }: any) {
  const { title, img, desc, teamSize, technology, features, tag, githubLink, websiteLink } = project
  let tagValue = ""
  if (tag[0] === "Team Project") tagValue = "team";
  if (tag[0] === "Personal Project") tagValue = "personal";
  if (tag[0] === "Online Tutorial") tagValue = "tutorial";
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
            <p className="desc-text"><span className={`project-card-tag tag-${tagValue}`}>{tag}</span></p>

          </div>
        </div>

        <div className="project-btn-wrapper">
          <button className="project-link-btn github-btn" onClick={() => window.open(githubLink)}>Github</button>
          <button className="project-link-btn" onClick={() => window.open(websiteLink)}>View Website</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard