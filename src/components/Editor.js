import React, { Component } from "react";

export default class Editor extends Component {
	render() {
		const { handleChange, code } = this.props;
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
							onChange={handleChange}
							defaultValue={code}
						/>
					</div>
				</form>
			</div>
		);
	}
}
