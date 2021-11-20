import React from "react";
const axios = require("axios");

const handleSubmitClick = (event, url) => {
	event.preventDefault();

	const formData = new FormData();
	console.log(event.target[0]);
	formData.append("file", event.target[0].files[0]);
	console.log(formData);
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

export default function UploadFileComponent({ baseUrl, endpoint, text }) {
	const url = `${baseUrl}${endpoint}`;

	return (
		<div className="UploadFileComponent">
			<div>
				<h3>{text}</h3>
			</div>
			<form
				encType="multipart/form-data"
				onSubmit={(event) => handleSubmitClick(event, url)}
			>
				<input type="file" className="file" />
				<input type="submit" value="Upload" />
			</form>
		</div>
	);
}
