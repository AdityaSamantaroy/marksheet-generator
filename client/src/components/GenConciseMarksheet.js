import React from "react";
import axios from "axios";

const handleButtonClick = (event, url) => {
	event.preventDefault();

	axios
		.get(url)
		.then((res) => {
			console.log("SUCCESS generating concise !!");
			console.log(res.data);
		})
		.catch(function () {
			console.log("FAILURE generating concise !!");
		});
};

export default function GenConciseMarksheet({ baseUrl, endpoint }) {
	const url = `${baseUrl}${endpoint}`;

	return (
		<>
			<button
				className="flex items-center justify-center rounded bg-blue-400 text-white p-1 m-0.5"
				onClick={(e) => handleButtonClick(e, url)}
			>
				Gennerte concise marksheet
			</button>
		</>
	);
}
