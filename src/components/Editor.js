import React from "react";

const Editor = props => {
	return (
		<div>
			<h1 className="text-white">EDITOR</h1>
			<form>
				<div className="form-group">
					<textarea
						id="editor"
						className="form-control"
						name="code"
						rows="20"
						onChange={props.handleChange}
						defaultValue={props.code}
					/>
				</div>
			</form>
		</div>
	);
};

export default Editor;
