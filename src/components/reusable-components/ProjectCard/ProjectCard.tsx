import "./style.scss"
import "./responsive.scss"
function ProjectCard({ project }: any) {
  const { title, img, desc, teamSize, technology, features, tag, githubLink, websiteLink } = project
  let tagValue = ""
  if (tag[0] === "Team Project") tagValue = "team";
  if (tag[0] === "Personal Project") tagValue = "personal";
  if (tag[0] === "Online Tutorial") tagValue = "tutorial";
  if (tag[0] === "Freelance Project") tagValue = "freelance";
  return (
    <div className="project-card-container">
      <div className="project-card-wrapper">
        <div>
          <div className="project-card-image-container">
            <h3>{title}</h3>
            <img src={img} alt={title} />
          </div>
          <div className="project-card-desc">
            <p className="desc-text"><span>Description: </span>{desc}</p>
            <p className="desc-text"><span>Team size: </span>{teamSize}</p>
            <p className="desc-text"><span>Technologies: </span>{technology}</p>
            <p className="desc-text"><span>Features: </span>{features}</p>
          </div>
        </div>

        <div className="project-card-bottom-container">
          <div>
            <p className="desc-text"><span className={`project-card-tag tag-${tagValue}`}>{tag}</span></p>
          </div>
          <div className="project-btn-wrapper">
            {githubLink && <button className="project-link-btn github-btn" onClick={() => window.open(githubLink)}>Github</button>}
            {websiteLink
              ? <button className="project-link-btn" onClick={() => window.open(websiteLink)}>View Website</button>
              : <button className="preview-btn" >Show Preview</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard