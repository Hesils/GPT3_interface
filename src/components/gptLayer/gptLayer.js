import React, { useEffect, useState } from "react";
import "./gptLayer.css"

export function GptLayer(props) {
    const {messageListe} = props
    const [messageDiv, setMessageDiv] = useState([])

    function makeMessageDiv(message) {
        return (
            <div className="messageContainer">
                <p>{message}</p>
            </div>
        )
    }

    useEffect(() => {
        //Update Message Div liste when messageListe Changes
        if (messageListe.length === 0) { // Si initialisation ou refresh du flux
            setMessageDiv([])
        } else { // Else rajoute le dernier message a la conv
            setMessageDiv(messageDiv.concat(makeMessageDiv(messageListe[-1])))
        }
    }, [messageListe])
    return (
        <div className="TalkLayer">
            <h1>Let's begin the show!</h1>
            {messageDiv}
        </div>
    )
}