import React from "react";
import "./App.css";

function Profile(props) {
  return (
    <div className={"ProfileCard"}>
      <span>
        Hi, <b>{props.name}!</b>
      </span>
      <span>Date of register: {props.registeredAt.toLocaleDateString()}</span>
    </div>
  );
}

class MyProfile extends React.Component {
  render() {
    return (
      <div className={"ProfileCard"}>
        <span>
          Hi, <b>{this.props.name}!</b>
        </span>
        <span>
          Date of register: {this.props.registeredAt.toLocaleDateString()}
        </span>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Profile name="Вася Пупкин" registeredAt={new Date(2021, 5, 22)} />
      <MyProfile name="Вася Пупкин" registeredAt={new Date(2021, 5, 22)} />
    </div>
  );
}

export default App;
