import React, { Component } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

class App extends Component {
	state = {
		code: placeholder
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { code } = this.state;
		return (
			<div className="App">
				<div className="container">
					<Editor code={code} handleChange={this.handleChange} />
					<Preview code={code} />
				</div>
			</div>
		);
	}
}

const placeholder = `# This is an h1!
## This is an h2

Some inline code \`<div></div>\`.

\`\`\`
// multi-line code:

function HelloWorld() {
  const text = "Hello World";
  alert(text);
}
\`\`\`
**Bold Text Here**
[Here](https://github.com/EliseiDanciu) is my GitHub account

> Block Quotes here

1. This
1. is
1. a
- list

![Image](https://goo.gl/Umyytc)
`;

export default App;
