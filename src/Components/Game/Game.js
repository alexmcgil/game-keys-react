import React from 'react'
import "./Game.css"
import Levels from "./Levels/Levels";
import Picture from "./Picture/Picture";
import KeyBar from "./KeyBar/KeyBar"

function Game() {
    return (
        <main className="game-section">
            <Levels />
            <Picture />
            <KeyBar />
        </main>)
}

export default Game