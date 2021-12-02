import React, { Component } from "react";
import "./Ball.scss";
class Ball extends Component {
  render() {
    return (
      <div
        className={`lottery__ball ${
          this.props.isActive && "lottery__ball--active"
        }`}
      >
        {this.props.num}
      </div>
    );
  }
}

export default Ball;
