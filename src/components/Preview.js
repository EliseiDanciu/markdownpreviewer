import React, { Component } from "react";
import marked from "marked";

export default class Preview extends Component {
	render() {
		const renderer = new marked.Renderer();
		renderer.link = function(href, title, text) {
			return `<a target="_blank" href="${href}">${text}` + "</a>";
		};
		marked.setOptions({
			breaks: true
		});
		return (
			<div>
				<h1 className="text-white">PREVIEW</h1>
				<div
					id="preview"
					className="card card-body"
					dangerouslySetInnerHTML={{
						__html: marked(this.props.code, { renderer: renderer })
					}}
				/>
			</div>
		);
	}
}
