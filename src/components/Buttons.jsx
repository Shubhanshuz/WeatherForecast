

let Buttons = (props) => {
    return (
        <button onClick = {props.onClick} className="btn"> {props.type} </button>
    )
}

export default Buttons;