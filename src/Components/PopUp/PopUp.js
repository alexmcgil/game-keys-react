import React from "react"
import "./PopUp.css"
import Key from "../Game/KeyBar/Keys/Key";

function PopUp() {
    return (
        <div className="pop-up">
            <p className="pop-up__remaining__description">
                <span className="pop-up__remaining__description_purple">Level 2</span> keys remaining</p>
            <div className="pop-up__stack-of-keys">
                <Key className="pop-up__stack-of-keys_image-of-key" />
                <Key className="pop-up__stack-of-keys_image-of-key" />
                <Key className="pop-up__stack-of-keys_image-of-key" />
            </div>
            <div className="pop-up__quantity">X 65</div>
        </div>
    )
}

export default PopUp