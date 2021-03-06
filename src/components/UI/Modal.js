import { Fragment } from "react"
import ReactDOM from "react-dom"
import Backdrop from "./Backdrop"
import ModalOverlay from "./ModalOverlay"

const portalElement = document.getElementById("overlays")
const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay onHideCart={props.onHideCart}>{props.children}</ModalOverlay>, portalElement)}
		</Fragment>
	)
}

export default Modal
