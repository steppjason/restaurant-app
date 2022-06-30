import MealForm from "./MealForm"

const MealItem = (props) => {
	const price = `$${props.price.toFixed(2)}`

	return (
		<li className="meal-item">
			<div>
				<h3 className="meal-item__name">{props.name}</h3>
				<div className="meal-item__description">{props.description}</div>
				<div className="meal-item__price">{price}</div>
			</div>
			<div>
				<MealForm />
			</div>
		</li>
	)
}

export default MealItem
