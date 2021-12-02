import React from "react";
import Lottery from "./Component/Lottery/Lottery";

import "./App.scss";
export default class App extends React.Component {
  render() {
    return (
      <div className={"App"}>
        <h1 className="App__title">Gacha Machine</h1>
        <Lottery ballCount={3} />
        <Lottery ballCount={27} title="Daily lottery" maxNum={20} />
      </div>
    );
  }
}
