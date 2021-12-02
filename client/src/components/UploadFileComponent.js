import React from "react";
import Basic from "./Basic";
const axios = require("axios");

const handleSubmitClick = (event, url, reqFile) => {
	event.preventDefault();

	const formData = new FormData();
	console.log(reqFile);
	// console.log(event.target[0].files);
	// console.log(event.target[0].files[0]);
	formData.append("file", reqFile);
	// console.log(formData);
	axios
		.post(url, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		})
		.then((res) => {
			console.log("SUCCESS!!");
			console.log(res.data);
		})
		.catch(function () {
			console.log("FAILURE!!");
		});
};

export default function UploadFileComponent({ baseUrl, endpoint }) {
	const url = `${baseUrl}${endpoint}`;

	return (
		<div className="flex m-2 items-center">
			<Basic url={url} handleSubmitClick={handleSubmitClick} />
		</div>
	);
}
