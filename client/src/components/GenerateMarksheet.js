import React from "react";
import axios from "axios";

const handleButtonClick = (event, url, data) => {
	event.preventDefault();

	axios
		.post(url, data, {
			headers: {
				"Content-Type": "Application/json",
			},
		})
		.then((res) => {
			console.log("SUCCESS generating marksheet !!");
			console.log(res.data);
		})
		.catch(function () {
			console.log("FAILURE generating marksheet !!");
		});
};

export default function GenerateMarksheet({
	baseUrl,
	endpoint,
	posMark,
	negMark,
}) {
	const url = `${baseUrl}${endpoint}`;
	const markingData = {
		positive: {
			posMark,
		},
		negative: {
			negMark,
		},
	};

	return (
		<>
			<button
				className="genMarksheet"
				onClick={(e) => handleButtonClick(e, url, markingData)}
			>
				Gennerte Roll Number wise marksheet
			</button>
		</>
	);
}
