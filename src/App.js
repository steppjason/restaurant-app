import { Fragment, useState } from "react"

import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart"

const App = () => {
	const [cartShowing, setCartShowing] = useState(false)

	const showCartHandler = () => {
		setCartShowing(true)
	}

	const hideCartHandler = () => {
		setCartShowing(false)
	}

	return (
		<Fragment>
			{cartShowing && <Cart onHideCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler}/>
			<main>
				<Meals />
			</main>
		</Fragment>
	)
}

export default App
