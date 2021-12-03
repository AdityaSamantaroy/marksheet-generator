import { React, useState, useEffect } from "react";
// import "./App.css";
import UploadFileComponent from "./components/UploadFileComponent";
import GenerateMarksheet from "./components/GenerateMarksheet.js";
import GenConciseMarksheet from "./components/GenConciseMarksheet";
import SendEmail from "./components/SendEmail";
import axios from "axios";
const baseUrl = "http://127.0.0.1:5000";

export default function App() {
	const [posMark, setPosMark] = useState(0);
	const [negMark, setNegMark] = useState(0);

	useEffect(() => {
		axios.get(`${baseUrl}/deleteResidualOutput`).then((res) => {
			console.log(res.data);
		});
	}, []);

	return (
		<div className="flex-auto items-center justify-center rounded p-2 m-0.5">
			<h1 className="h1-tag my-3 mb-7">Marksheet Generator</h1>
			<div>
				<h3 className="h3-tag">Upload master csv:</h3>
				<UploadFileComponent
					baseUrl={baseUrl}
					endpoint="/upload/master/"
				/>
			</div>
			<div>
				<h3 className="h3-tag">Upload responses csv:</h3>
				<UploadFileComponent
					baseUrl={baseUrl}
					endpoint="/upload/responses/"
				/>
			</div>
			<div>
				<h3 className="h3-tag">Enter marking scheme:</h3>
				<div className="flex m-2 items-center">
					<div>
						<label>
							Correct answer:
							<input
								className="classic-input"
								type="text"
								value={posMark}
								name="positive marks"
								onChange={(e) => {
									setPosMark(e.target.value);
									console.log(e.target.value);
								}}
							/>
						</label>
					</div>
					<div>
						<label>
							Wrong answer:
							<input
								className="classic-input"
								type="text"
								value={negMark}
								name="negative marks"
								onChange={(e) => setNegMark(e.target.value)}
							/>
						</label>
					</div>
				</div>
			</div>

			<div>
				<h3 className="h3-tag">Get output:</h3>
				<div className="flex m-2 items-center">
					<div>
						<GenerateMarksheet
							baseUrl={baseUrl}
							endpoint={"/output/marksheet/"}
							posMark={posMark}
							negMark={negMark}
						/>
					</div>

					<div>
						<GenConciseMarksheet
							baseUrl={baseUrl}
							endpoint={"/output/concise-marksheet/"}
						/>
					</div>
					<div>
						<SendEmail
							baseUrl={baseUrl}
							endpoint={"/send-email/"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
