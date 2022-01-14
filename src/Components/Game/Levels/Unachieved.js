import React from "react"
import "./Unachieved.css"

function Unachieved(props) {


    return (
        <div className="UnachievedLevels">
            <div className="img">
                <svg width="135" height="42" viewBox="0 0 135 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.53595 4.41675C8.21717 2.37612 10.1273 1 12.2787 1H122.227C124.33 1 126.208 2.31558 126.926 4.29178L132.379 19.2918C132.78 20.3953 132.78 21.6047 132.379 22.7082L126.926 37.7082C126.208 39.6844 124.33 41 122.227 41H12.2787C10.1273 41 8.21718 39.6239 7.53596 37.5833L2.52853 22.5833C2.18548 21.5556 2.18548 20.4444 2.52853 19.4167L7.53595 4.41675Z"
                        fill="url(#paint0_radial_1_238)"/>
                    <path
                        d="M120 1H123.421C123.935 1 124.404 1.29302 124.628 1.7548L133.714 20.4122C133.894 20.7832 133.894 21.2168 133.714 21.5878L124.628 40.2452C124.404 40.707 123.935 41 123.421 41H120"
                        stroke="url(#paint1_radial_1_238)" strokeWidth="2"/>
                    <path
                        d="M14 1H10.9099C10.3824 1 9.90383 1.30883 9.68652 1.78943L1.25013 20.4468C1.09113 20.7985 1.09112 21.2015 1.25013 21.5532L9.68652 40.2106C9.90383 40.6912 10.3824 41 10.9099 41H14"
                        stroke="url(#paint2_radial_1_238)" strokeWidth="2"/>
                    <defs>
                        <radialGradient id="paint0_radial_1_238" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(67.4565 21) rotate(88.8467) scale(27.0055 90.3164)">
                            <stop stopColor="#6C718E"/>
                            <stop offset="1" stopColor="#4F4F4F"/>
                        </radialGradient>
                        <radialGradient id="paint1_radial_1_238" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(134 21) rotate(180) scale(18.2609 62.1182)">
                            <stop stopColor="white"/>
                            <stop offset="1" stopOpacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint2_radial_1_238" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(1 21) scale(16.9565 62.1182)">
                            <stop stopColor="white"/>
                            <stop offset="1" stopOpacity="0"/>
                        </radialGradient>
                    </defs>
                </svg>

            </div>
            <div className="UnachievedLevel_text">{props.levelInfo}</div>
        </div>
    )
}

export default Unachieved