import react from "react"


function Calculator (props) {
    return (
        <div>
            <h2 id="total">Total: {
                props.operator === "add" ? props.num1 + props.num2 :
                props.operator === "subtract" ? props.num1 - props.num2 :
                props.operator === "multiply" ? props.num1 * props.num2 :
                props.operator === "divide" ? props.num1 / props.num2 :
                ""}
            </h2>
            
        </div>
    )
}

export default Calculator