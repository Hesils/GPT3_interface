import React, { useEffect, useState } from "react";
import "./gptLayer.css"

export function GptLayer(props) {
    const {messageListe} = props
    const [messageDiv, setMessageDiv] = useState([])
    const [keyCount, setKeyCount] = useState(0)

    function makeMessageDiv(message) {
        setKeyCount(keyCount + 1)
        return (
            <div className="messageContainer" key={keyCount - 1}>
                <p>{message}</p>
            </div>
        )
    }

    useEffect(() => {
        //Update Message Div liste when messageListe Changes
        console.log("useEffect in gptLayer so messageListe Changed : ", messageListe)
        if (messageListe.length === 0) { // Si initialisation ou refresh du flux
            setMessageDiv([])
        } else { // Else rajoute le dernier message a la conv
            setMessageDiv(messageDiv.concat(makeMessageDiv(messageListe[-1])))
        }
    }, [messageListe])

    return (
        <div className="TalkLayer">
            {console.log("redering gptLayer messageListe = ", messageListe, "\n     messageDiv = ", messageDiv)}
            <h1>Let's begin the show!</h1>
            {messageDiv}
        </div>
    )
}