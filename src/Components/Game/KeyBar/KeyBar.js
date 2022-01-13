import React from 'react'
import "./KeyBar.css"
import Key from "./Keys/Key";
import KeyUnavailable from "./Keys/KeyUnavailable";


function KeyBar(){
    return (
        <div className="Keybar">
            <div className="KeyInBar"> <Key /></div>
            <div className="KeyInBar"> <Key /></div>
            <div className="KeyInBar"> <Key /></div>
            <KeyUnavailable />
        </div>
    )
}

export default KeyBar