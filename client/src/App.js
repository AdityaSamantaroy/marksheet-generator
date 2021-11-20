import { React, useState } from "react";
import "./App.css";
import UploadFileComponent from "./components/UploadFileComponent";
import GenerateMarksheet from "./components/GenerateMarksheet.js";
import GenConciseMarksheet from "./components/GenConciseMarksheet";
import SendEmail from "./components/SendEmail";

const baseUrl = "http://127.0.0.1:5000";

export default function App() {
	const [posMark, setPosMark] = useState(0);
	const [negMark, setNegMark] = useState(0);

	return (
		<>
			<UploadFileComponent
				text="Upload master csv"
				baseUrl={baseUrl}
				endpoint="/upload/master/"
			/>
			<UploadFileComponent
				text="Upload responses csv"
				baseUrl={baseUrl}
				endpoint="/upload/responses/"
			/>
			<div>
				<h3>Enter marking scheme:</h3>
				<div>
					<label>
						Correct answer:
						<input
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
							type="text"
							value={negMark}
							name="negative marks"
							onChange={(e) => setNegMark(e.target.value)}
						/>
					</label>
				</div>
			</div>

			<div>
				<h3>Get output:</h3>
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
					<SendEmail baseUrl={baseUrl} endpoint={"/send-email/"} />
				</div>
			</div>
		</>
	);
}
