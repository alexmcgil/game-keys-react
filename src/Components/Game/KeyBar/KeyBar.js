import React from 'react'
import "./KeyBar.css"
import Key from "./Keys/Key";
import KeyUnavailable from "./Keys/KeyUnavailable";


function KeyBar(){
    return (
        <div className="game-section__key-bar">
            <Key className="game-section__key-bar_image-of-key"/>
            <Key className="game-section__key-bar_image-of-key"/>
            <Key className="game-section__key-bar_image-of-key"/>
            <KeyUnavailable className="game-section__key-bar_image-of-unavailable-key"/>
        </div>
    )
}

export default KeyBar