import React from "react";
import ReactDom from "react-dom";

export default class FormHandling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
      errormessage: ""
    };
  }
  onChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    let error = "";
    if (nam === "age") {
      if (val != "" && !Number(val)) {
        error = <strong>Age must be number</strong>;
      }
    }
    this.setState({ errormessage: error });
    this.setState({ [nam]: val });
  };

  onSubmitHandler = event => {
    // alert(this.state.username + " -> " + this.state.age);

    document.getElementById("display").innerHTML =
      '<div id="display">' +
      this.state.username +
      " form submit successful</div>";
    event.preventDefault();
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <label>
            Name:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChangeHandler}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.onChangeHandler}
            />
          </label>

          <br />
          <input type="submit" value="Submit" />
          {this.state.errormessage}
        </form>
        <div id="display" />
      </>
    );
  }
}
