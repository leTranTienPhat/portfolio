import "./style.scss"

function ProjectCard({
  img,
  title,
  desc,
  githubLink,
  websiteLink
}: { img: string, title: string, desc: string, githubLink: string, websiteLink: string }) {
  return (
    <div className="project-card-container">
      <div className="project-card-wrapper">
        <div className="project-card-img">
          <h3>{title}</h3>
          <img src={img} />
        </div>

        <div className="project-card-desc">
          <p>{desc}</p>
          <button className="project-link-btn github" onClick={() => window.open(githubLink)}>Github</button>
          <button className="project-link-btn" onClick={() => window.open(websiteLink)}>View Website</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard