import "./style.scss"

function ProjectCard({ img, title }: { img: string, title: string }) {
  return (
    <div className="project-card-container">
      <div className="project-card-wrapper">
        <div className="project-card-img">
          <h3>{title}</h3>
          <img src={img} />
        </div>

        <div className="project-card-desc">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto facilis veritatis, nisi totam sed ex, nostrum possimus provident in dolor ab tenetur ipsum fugiat. Dolore iure autem mollitia voluptatem!</p>
          <button className="project-link-btn github">Github</button>
          <button className="project-link-btn">View Website</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard