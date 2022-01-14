import React from 'react'
import Unachieved from "./Unachieved"
import "./Levels.css"

function Levels() {

    let currentLevel = "Level 1"
    let first = "Level 2"
    let second = "Level 3"

    return (
        <div className="game-section__levels">
            <div className="game-section__levels__active-level">
                <div className="game-section__levels__active-level_background">
                    <svg width="417" height="61" viewBox="0 0 417 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M113.882 4.54701C114.522 2.44026 116.465 1 118.666 1H300.088C302.339 1 304.313 2.50491 304.909 4.6761L311.636 29.1761C311.874 30.0427 311.874 30.9573 311.636 31.8239L304.909 56.3239C304.313 58.4951 302.339 60 300.088 60H118.666C116.465 60 114.522 58.5597 113.882 56.453L106.441 31.953C106.154 31.0057 106.154 29.9943 106.441 29.047L113.882 4.54701Z" fill="url(#paint0_radial_1_243)"/>
                        <path d="M299 1H301.964C302.554 1 303.075 1.38507 303.247 1.94908L311.879 30.1065C311.958 30.3629 311.958 30.6371 311.879 30.8935L303.247 59.0509C303.075 59.6149 302.554 60 301.964 60H299" stroke="url(#paint1_radial_1_243)" strokeWidth="2"/>
                        <path d="M118 1H115.036C114.446 1 113.925 1.38507 113.753 1.94908L105.121 30.1065C105.042 30.3629 105.042 30.6371 105.121 30.8935L113.753 59.0509C113.925 59.6149 114.446 60 115.036 60H118" stroke="url(#paint2_radial_1_243)" strokeWidth="2"/>
                        <rect width="71" height="1" transform="matrix(-1 0 0 1 383 30)" fill="url(#paint3_linear_1_243)"/>
                        <rect x="34" y="30" width="71" height="1" fill="url(#paint4_linear_1_243)"/>
                        <defs>
                            <radialGradient id="paint0_radial_1_243" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(209.839 30.5) rotate(90) scale(75.641 276.836)">
                                <stop stopColor="#994CA5"/>
                                <stop offset="1" stopColor="#030A2F"/>
                            </radialGradient>
                            <radialGradient id="paint1_radial_1_243" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(312 30.5) rotate(180) scale(40 216.139)">
                                <stop stopColor="#E571F6"/>
                                <stop offset="0.914583" stopColor="#E571F6" stopOpacity="0"/>
                                <stop offset="1" stopColor="#512C6C"/>
                            </radialGradient>
                            <radialGradient id="paint2_radial_1_243" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(105 30.5) scale(40 216.139)">
                                <stop stopColor="#E571F6"/>
                                <stop offset="0.914583" stopColor="#E571F6" stopOpacity="0"/>
                                <stop offset="1" stopColor="#512C6C"/>
                            </radialGradient>
                            <linearGradient id="paint3_linear_1_243" x1="71" y1="0.49976" x2="0" y2="0.49976" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#E571F6"/>
                                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint4_linear_1_243" x1="105" y1="30.4998" x2="34" y2="30.4998" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#E571F6"/>
                                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>

                </div>
                <div className="game-section__levels__active-level_text">{currentLevel}</div>
            </div>
            <div className="game-section__levels__not-active-levels-block">
            <Unachieved levelInfo={first}/>
            <Unachieved levelInfo={second}/>
            </div>
        </div>)
}

export default Levels