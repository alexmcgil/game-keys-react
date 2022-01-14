import React from 'react'
import "./ConnectWallet.css"

function ConnectWallet() {
    return (
        <div className="navigation__links__connect-button">
            <div className="navigation__links__connect-button_background">
            <svg width="266" height="80" viewBox="0 0 266 80" fill="none" xmlns="http:www.w3.org/2000/svg">
                <path opacity="0.46"
                      d="M16.7273 4.10222C17.4972 2.22555 19.3247 1 21.3531 1H245.725C247.714 1 249.514 2.17883 250.309 4.00207L265.129 38.0021C265.684 39.2761 265.684 40.7239 265.129 41.9979L250.309 75.9979C249.514 77.8212 247.714 79 245.725 79H21.3531C19.3247 79 17.4972 77.7745 16.7273 75.8978L2.77858 41.8978C2.2797 40.6818 2.2797 39.3182 2.77858 38.1022L16.7273 4.10222Z"
                      fill="url(#paint0_radial_1_139)"/>
                <path
                    d="M243 1.5H246.68C248.692 1.5 250.508 2.70565 251.288 4.55972L265.183 37.5597C265.705 38.8005 265.705 40.1995 265.183 41.4403L251.288 74.4403C250.508 76.2944 248.692 77.5 246.68 77.5H243"
                    stroke="url(#paint1_radial_1_139)" strokeWidth="3"/>
                <path
                    d="M25 1.5H21.3199C19.3082 1.5 17.4924 2.70565 16.7117 4.55972L2.81696 37.5597C2.29453 38.8005 2.29453 40.1995 2.81696 41.4403L16.7117 74.4403C17.4924 76.2944 19.3082 77.5 21.3199 77.5H25"
                    stroke="url(#paint2_radial_1_139)" strokeWidth="3"/>
                <rect x="38" width="192" height="2" fill="url(#paint3_radial_1_139)"/>
                <rect x="34" y="77.5" width="192" height="2" fill="url(#paint4_radial_1_139)"/>
                <defs>
                    <radialGradient id="paint0_radial_1_139" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(134 40) rotate(90) scale(100 338.462)">
                        <stop stopColor="#E571F6"/>
                        <stop offset="1" stopColor="#C4C4C4" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial_1_139" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(266 39.5) rotate(180) scale(30 118.025)">
                        <stop stopColor="#E571F6"/>
                        <stop offset="1" stopColor="#E571F6" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="paint2_radial_1_139" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(2 39.5) scale(30 118.025)">
                        <stop stopColor="#E571F6"/>
                        <stop offset="1" stopColor="#E571F6" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="paint3_radial_1_139" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(134 1) rotate(90) scale(1 96)">
                        <stop stopColor="#E571F6"/>
                        <stop offset="1" stopColor="#E571F6" stopOpacity="0.02"/>
                    </radialGradient>
                    <radialGradient id="paint4_radial_1_139" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(130 78.5) rotate(90) scale(1 96)">
                        <stop stopColor="#E571F6"/>
                        <stop offset="1" stopColor="#E571F6" stopOpacity="0.02"/>
                    </radialGradient>
                </defs>
            </svg>
            </div>
            <span className="navigation__links__connect-button_description">
            Connect wallet
        </span>
        </div>
    )
}

export default ConnectWallet