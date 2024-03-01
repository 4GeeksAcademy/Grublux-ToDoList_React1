import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import MainList from "./MainList";

//create your first component
const Home = () => {
	return (
		<div className="row d-flex justify-content-center bg-light p-5">
			<MainList />
		</div>
	);
};

export default Home;
