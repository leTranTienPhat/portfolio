import "./style.scss"
import "./responsive.scss"

function Modal({ handleCloseModal }: any) {
  return (
    <div className="modal-wrapper">
      <div className="modal-container" onClick={handleCloseModal}>
        <h3>Nifehub</h3>
      </div>
    </div>
  )
}

export default Modal