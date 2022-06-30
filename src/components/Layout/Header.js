import { Fragment } from "react"

import heroImage from "../../assets/meals.jpg"
import CartButton from "./CartButton"

const Header = (props) => {
	return (
		<Fragment>
			<header className="header">
				<h1 className="header__title">Restaurant</h1>
				<CartButton />
			</header>
			<div>
				<img className="hero-image" src={heroImage} title="" alt="" />
			</div>
		</Fragment>
	)
}

export default Header