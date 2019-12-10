import React from "react";
import ReactDom from "react-dom";

export default class WelcomeApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Hellow React...</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDom.render(<WelcomeApp />, rootElement);
