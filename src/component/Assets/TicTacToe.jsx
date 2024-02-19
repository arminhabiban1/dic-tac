import React from "react";
import "./TicTacToe.css";
import circle_icon from "./circle.png";
import cross_icon from "./cross.png";

const TicTacToe = () => {
  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Gmae In <span>React</span>
      </h1>
      <div className="board"></div>
      <button className="reset">Reset</button>
    </div>
  );
};

export default TicTacToe;
