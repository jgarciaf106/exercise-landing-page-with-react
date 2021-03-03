import React from "react";

export const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className="bg-dark mh-100">
			<footer className="text-center h-75">
				<small className="text-white">
					Copyright &copy; My React Landing Page {year}
				</small>
			</footer>
		</div>
	);
};
