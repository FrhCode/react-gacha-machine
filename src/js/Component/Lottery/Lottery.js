import React, { Component } from "react";
import generateRandomNumber from "../../Helper/generateRandomNumber";
import Ball from "../Ball/Ball";

import "./Lottery.scss";
class Lottery extends Component {
  static defaultProps = {
    title: "weeekly Lottery",
    ballCount: 3,
    maxNum: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      isGenerating: false,
      ball: Array.from({
        length: this.props.ballCount,
      }),
      num: Array.from({
        length: this.props.ballCount,
      }).map((e) => generateRandomNumber(1, this.props.maxNum)),
      counter: 0,
      timeOut: this.props.ballCount * 2 * 1000,
    };

    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick() {
    this.setState({
      isGenerating: true,
    });

    const intervalChangeNumber = setInterval(() => {
      this.setState((state) => {
        return {
          num: state.num.map((e, index) => {
            if (index < state.counter) return e;
            return generateRandomNumber(1, this.props.maxNum);
          }),
        };
      });
    }, 10);

    const intervalAddCounter = setInterval(() => {
      this.setState((state) => {
        return {
          counter: ++state.counter,
        };
      });
    }, this.state.timeOut / this.props.ballCount);
    setTimeout(() => {
      clearInterval(intervalChangeNumber);
      clearInterval(intervalAddCounter);
      this.setState((state) => {
        return {
          isGenerating: false,
          counter: 0,
        };
      });
    }, this.state.timeOut);
  }

  render() {
    let ball = this.state.ball.map((el, index) => {
      if (index == this.state.counter)
        return <Ball num={this.state.num[index]} key={index} isActive={true} />;
      return <Ball num={this.state.num[index]} key={index} />;
    });

    return (
      <div className="lottery">
        <h1 className="lottery__title"> {this.props.title}</h1>
        <div className="lottery__ball-container">{ball}</div>
        <button
          className="lottery__btn"
          onClick={this.handleBtnClick}
          disabled={this.state.isGenerating}
        >
          Generate
        </button>
      </div>
    );
  }
}

export default Lottery;
