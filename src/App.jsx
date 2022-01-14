import React from 'react'
import "./App.css"
import Header from "./Components/Header/Header";
import BackGround from "./Components/Background/BackGround";
import Footer from "./Components/Footer/Footer";
import Game from "./Components/Game/Game";
import PopUp from "./Components/PopUp/PopUp";

function App(){

	return <div className="wrapper">
		<Header />
		<PopUp />
		<BackGround />
		<Game />
		<Footer />
	</div>
}

export default App;
