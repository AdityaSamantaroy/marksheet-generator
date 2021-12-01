import { React, useState } from "react";
// import "./App.css";
import UploadFileComponent from "./components/UploadFileComponent";
import GenerateMarksheet from "./components/GenerateMarksheet.js";
import GenConciseMarksheet from "./components/GenConciseMarksheet";
import SendEmail from "./components/SendEmail";

const baseUrl = "http://127.0.0.1:5000";

export default function App() {
	const [posMark, setPosMark] = useState(0);
	const [negMark, setNegMark] = useState(0);

	return (
		<div className="flex-auto items-center justify-center rounded p-2 m-0.5">
			<h1 className="flex-auto text-5xl font-semibold my-3 mb-7">
				Marksheet Generator
			</h1>
			<div>
				<h3 className="flex-auto text-2xl font-semibold">
					Upload master csv:
				</h3>
				<UploadFileComponent
					baseUrl={baseUrl}
					endpoint="/upload/master/"
				/>
			</div>
			<div>
				<h3 className="flex-auto text-2xl font-semibold">
					Upload responses csv:
				</h3>
				<UploadFileComponent
					baseUrl={baseUrl}
					endpoint="/upload/responses/"
				/>
			</div>
			<div>
				<h3 className="flex-auto text-2xl font-semibold">
					Enter marking scheme:
				</h3>
				<div className="flex m-2 items-center">
					<div>
						<label>
							Correct answer:
							<input
								className="flex justify-center rounded-md border border-gray-300"
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
								className="flex justify-center rounded-md border border-gray-300"
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
				<h3 className="flex-auto text-2xl font-semibold">
					Get output:
				</h3>
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
