import React from 'react'
import "./App.css"
import Header from "./Components/Header/Header";
import BackGround from "./Components/Background/BackGround";
import Footer from "./Components/Footer/Footer";
import Game from "./Components/Game/Game";

function App(){

	return <div>
		<Header />
		<BackGround />
		<Game />
		<Footer />
	</div>
}

export default App;
