import React from "react";

//import components
import { NavBar } from "./navBar";
import { Jumbotron } from "./jumboTron";
import { Card } from "./card";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div className="container">
			<NavBar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
}
