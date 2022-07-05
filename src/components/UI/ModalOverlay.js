const ModalOverlay = (props) => {
	return (
		<div className="modal-overlay">
			<div className="modal-overlay__content card">{props.children}</div>
		</div>
	)
}

export default ModalOverlay
