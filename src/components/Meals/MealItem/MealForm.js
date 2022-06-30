import Input from "../../UI/Input"

const MealForm = (props) => {
	return (
		<form className="meal-form">
			<Input label="Amount" input={{ id: "amount_" + props.id, type: "number", min: "1", max: "5", step: "1", defaultValue: "1" }} />
			<button>+</button>
		</form>
	)
}

export default MealForm
