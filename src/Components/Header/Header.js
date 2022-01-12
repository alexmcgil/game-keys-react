import React from 'react'
import "./Header.css"
import "./Button/Button"
import Button from "./Button/Button";

function Header() {
    return (
        <header>
            <ul>
                <li>Home</li>
                <li>Game</li>
                <li>Vault</li>
                <li>Scoreboard</li>
            </ul>
            <Button />

        </header>)
}

export default Header