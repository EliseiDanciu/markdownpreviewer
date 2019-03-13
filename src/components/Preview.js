import React from "react";
import marked from "marked";

const Preview = props => {
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
					__html: marked(props.code, { renderer: renderer })
				}}
			/>
		</div>
	);
};

export default Preview;
