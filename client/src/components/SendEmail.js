import React from "react";
import axios from "axios";

const handleButtonClick = (event, url, data) => {
	event.preventDefault();

	axios
		.get(url)
		.then((res) => {
			console.log("SUCCESS sending mails !!");
			console.log(res.data);
		})
		.catch(function () {
			console.log("FAILURE sending mails !!");
		});
};

export default function SendEmail({ baseUrl, endpoint }) {
	const url = `${baseUrl}${endpoint}`;

	return (
		<>
			<button
				className="btn-blue"
				onClick={(e) => handleButtonClick(e, url)}
			>
				Send Email
			</button>
		</>
	);
}
