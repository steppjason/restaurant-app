import CartIcon from "../Cart/CartIcon"

const CartButton = () => {
	return (
		<button className="cart-button">
			<span className="cart-button__icon">
				<CartIcon />
			</span>
			<span className="cart-button__text">Your Cart</span>
			<span className="cart-button__item-count">3</span>
		</button>
	)
}

export default CartButton
