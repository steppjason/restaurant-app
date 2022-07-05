import Modal from "../UI/Modal"

const Cart = (props) => {
	const cartItems = [
		{
			id: "c1",
			name: "Sushi",
			amount: 2,
			price: 22.99,
		},
	]

	return (
		<Modal>
			<ul className="cart__items">
				{cartItems.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
			<div className="cart__total">
				<span>Total Amount</span>
				<span>35.62</span>
			</div>
			<div className="cart__actions">
				<button className="cart__close-button">Close</button>
				<button className="cart__order-button">Order</button>
			</div>
		</Modal>
	)
}

export default Cart
