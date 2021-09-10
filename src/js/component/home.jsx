import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import BootstrapCard from "./BootstrapCard.jsx";

export const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<BootstrapCard />
		</>
	);
};
