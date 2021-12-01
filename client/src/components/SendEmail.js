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
				className="flex items-center justify-center rounded bg-blue-400 text-white p-1 m-0.5"
				onClick={(e) => handleButtonClick(e, url)}
			>
				Send Email
			</button>
		</>
	);
}
