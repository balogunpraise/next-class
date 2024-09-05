import './button.css'
export default function Button({name, color, isClicked, func}){

    return(
        <button onClick={func} style={{backgroundColor : color}}>
            {name} - {isClicked == true ? "I have clicked" : "I have not clicked"}
        </button>
    )
}

