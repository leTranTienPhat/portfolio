import "./style.scss"

function Intro({ theme }: any) {
  return (
    <div className={`intro-wrapper`}>
      <div className="particle particle-1 " />
      <div className="particle particle-2 " />
      <div className="intro-content">
        <div className="box box-1">
          <p>Lê Trần Tiến Phát</p>
        </div>
        <div className="box box-2">
          <p>Web Developer Portfolio</p>
        </div>
      </div>
    </div>
  )
}

export default Intro