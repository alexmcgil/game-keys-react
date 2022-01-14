import React from 'react'
import "./Header.css"
import "./ConnectWallet/ConnectWallet"
import ConnectWallet from "./ConnectWallet/ConnectWallet";

function Header() {
    return (
        <header className="header">
            <nav className="navigation">
                <ul className="navigation__links__wrapper">
                    <li className="navigation__links__wrapper_link">Home</li>
                    <li className="navigation__links__wrapper_link">Game</li>
                    <li className="navigation__links__wrapper_link">Vault</li>
                    <li className="navigation__links__wrapper_link">Scoreboard</li>
                </ul>
                <ConnectWallet/>
            </nav>
        </header>)
}

export default Header