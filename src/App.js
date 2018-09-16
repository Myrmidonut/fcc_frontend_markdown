import React, { Component } from "react";
import "./App.css";
import marked from "marked";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";
import Header from "./components/Header/Header";

const demoText = 
`# H1 header

## H2 header

[link](https://www.google.com)

\`inline code\`

\`\`\`
code
block
\`\`\`

1. list item 1
1. list item 2
a. sub list item 1
b. sub list item 2


* unordered list item

> blockquote

![a dog on a path in a forest](https://images.unsplash.com/photo-1537095267667-f65b33e26331?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=02041be564e4417fe60b9ec399b10750&auto=format&fit=crop&w=400&q=80 "Dog")

*italic text*

**bold text**

**_italic bold text_**

~~striked through text~~`

marked.setOptions({
  breaks: true
});

class App extends Component {
  state = {
    text: demoText
  }

  changeHandler = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Editor 
          text={this.state.text}
          onChange={this.changeHandler} />
        <Preview 
          text={this.state.text} />
      </div>
    );
  }
}

export default App;