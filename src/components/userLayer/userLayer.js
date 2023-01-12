import React, {useState} from "react";
import "./userLayer.css"

export function UserLayer (props) {
    const {saveMessage} = props
    const [input, setInput] = useState("")
    const handleButtonPress = (e) => {
        if (input && input !== ""){
            saveMessage(input)
        }
    }

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="UserLayer">
            <input type="text" placeholder="Entré votre message" className="messageInput" onChange={handleInputChange}/>
            <input type="button" value="Envoyer" className="messageSenderButton" onClick={handleButtonPress}/>
        </div>
    )
}