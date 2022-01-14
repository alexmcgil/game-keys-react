import React from 'react'
import "./Header.css"
import "./ConnectWallet/ConnectWallet"
import ConnectWallet from "./ConnectWallet/ConnectWallet";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li className="nav-links">Home</li>
                    <li className="nav-links">Game</li>
                    <li className="nav-links">Vault</li>
                    <li className="nav-links">Scoreboard</li>
                </ul>
                <ConnectWallet/>
            </nav>
        </header>)
}

export default Header