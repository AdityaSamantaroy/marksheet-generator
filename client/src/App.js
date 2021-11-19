import "./App.css";
const axios = require("axios");

const baseUrl = "http://127.0.0.1:5000";

function handleSubmitClick(event) {
	event.preventDefault();
	const formData = new FormData();
	console.log(event.target[0]);
	formData.append("file", event.target[0].files[0]);
	console.log(formData);
	axios
		.post(`${baseUrl}/upload/responses/`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		})
		.then((res) => {
			console.log("SUCCESS!!");
			console.log(res.data);
			window.location = "/";
		})
		.catch(function () {
			console.log("FAILURE!!");
		});
}

function App() {
	return (
		<div className="App">
			<h1>Upload new File</h1>
			<form encType="multipart/form-data" onSubmit={handleSubmitClick}>
				<input type="file" className="file" />
				<input type="submit" value="Upload" />
			</form>
		</div>
	);
}

export default App;
