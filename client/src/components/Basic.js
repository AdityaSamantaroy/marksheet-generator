import React from "react";
import { useDropzone } from "react-dropzone";

export default function Basic({ url, handleSubmitClick }) {
	const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
		useDropzone();

	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	return (
		<div className="w-1/2">
			<form
				encType="multipart/form-data"
				onSubmit={(event) => handleSubmitClick(event, url)}
			>
				<div
					{...getRootProps({
						className:
							"flex-auto p-4 m-0.5 items-center justify bg-gray-100 rounded-lg",
						// className:
						// 	" flex-auto border rounded border-opacity-100 border-blue-500",
					})}
				>
					<input {...getInputProps()} />

					{isDragActive ? (
						<p>Drop files here</p>
					) : (
						<p>
							Drag 'n' drop some files here, or click to select
							files
						</p>
					)}

					{/* <Basic />
					 */}
				</div>
				<aside>
					{files.length ? <h4>Files</h4> : null}
					<ul>{files}</ul>
				</aside>
				<input
					type="submit"
					value="Submit"
					className="flex items-center justify-center rounded bg-blue-400 text-white p-1 m-0.5"
				/>
			</form>
		</div>
	);
}
