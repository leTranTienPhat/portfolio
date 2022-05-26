import "./style.scss"
import portfolio from "../../../assets/images/portfolio.png"

function Header() {
  return (
    <div className="header-container" id="home">
      <img src={portfolio} alt="logo" className="header-logo" />
    </div>
  )
}

export default Header