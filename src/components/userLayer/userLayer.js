import React from "react";
import "./userLayer.css"

export function UserLayer (props) {
    return (
        <div className="UserLayer">
            <input type="text" placeholder="Entré votre message" className="messageInput"/>
            <input type="button" text="Envoyer" className="messageSenderButton"/>
        </div>
    )
}