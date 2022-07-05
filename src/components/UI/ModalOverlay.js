const ModalOverlay = (props) => {
	return (
		<div className="modal-overlay" onClick={props.onHideCart}>
			<div className="modal-overlay__content card">{props.children}</div>
		</div>
	)
}

export default ModalOverlay
