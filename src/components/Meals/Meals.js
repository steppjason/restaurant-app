import { Fragment } from "react"
import MealsList from "./MealsList"
import MealSummary from "./MealSummary"

const Meals = () => {
	return (
		<Fragment>
			<MealSummary />
			<MealsList />
		</Fragment>
	)
}

export default Meals