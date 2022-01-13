import React from "react"
import "./PopUp.css"
import Key from "../Game/KeyBar/Keys/Key";

function PopUp() {
    return (
        <div className="PopUp">
            <p><span>Level 2</span> keys remaining</p>
            <div className="remaining">
                <div className="KeyRemaining"> <Key/></div>
                <div className="KeyRemaining"> <Key/></div>
                <div className="KeyRemaining"> <Key/></div>
            </div>
            <div className="quantity">X 65</div>
        </div>
    )
}

export default PopUp