import "./styles.scss"
import "./responsive.scss"
const SplitSection = ({ value }: { value: string }) => {
  return (
    <div className="section">
      <h2 className="split-section">{value}</h2>
    </div >
  )
}

export default SplitSection