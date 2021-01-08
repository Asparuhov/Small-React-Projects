import React, { Component } from "react";
import classes from "./App.module.css";
import Square from "./Rows/Square";
class App extends Component {
  state = {
    board: [
      "",
      "",
      "", //0 //3 //6
      "",
      "",
      "", //1 //4 //7
      "",
      "",
      "", //2 //5 //8
    ],
    mode: true,
  };

  usePlayer = (index) => {
    let reverseMode = !this.state.mode;
    let copy = this.state.board.slice(0);
    if (this.state.mode && copy[index] === "") {
      copy[index] = "x";
      this.setState({ mode: reverseMode });
    } else if (!this.state.mode && copy[index] === "") {
      copy[index] = "o";
      this.setState({ mode: reverseMode });
    }

    this.setState({ board: copy });
  };
  render() {
    let board = this.state.board;
    if (
      (board[0] === "x" && board[4] === "x" && board[8] === "x") ||
      (board[0] === "o" && board[4] === "o" && board[8] === "o")
    ) {
      //vertical - top left to bottom right
      alert(`${board[0].toLocaleUpperCase()} WON!`);
      window.location.reload();
    }
    if (
      (board[2] === "x" && board[4] === "x" && board[6] === "x") ||
      (board[2] === "o" && board[4] === "o" && board[6] === "o")
    ) {
      //vertical - bottom left to top right
      alert(`${board[0].toLocaleUpperCase()} WON!`);
      window.location.reload();
    }
    if (
      (board[0] === "x" && board[3] === "x" && board[6] === "x") ||
      (board[0] === "o" && board[3] === "o" && board[6] === "o")
    ) {
      //linear - top left to top right
      alert(`${board[0].toLocaleUpperCase()} WON!`);
      window.location.reload();
    }
    if (
      (board[0] === "x" && board[1] === "x" && board[2] === "x") ||
      (board[0] === "o" && board[1] === "o" && board[2] === "o")
    ) {
      //linear = top left to bottom left
      alert(`${board[0].toLocaleUpperCase()} WON!`);
      window.location.reload();
    }
    if (
      (board[8] === "x" && board[7] === "x" && board[6] === "x") ||
      (board[8] === "o" && board[7] === "o" && board[6] === "o")
    ) {
      //linear bottom right to top right
      alert(`${board[0].toLocaleUpperCase()} WON!`);
      window.location.reload();
    }
    if (
      (board[8] === "x" && board[5] === "x" && board[2] === "x") ||
      (board[8] === "o" && board[5] === "o" && board[2] === "o")
    ) {
      //linear - bottom right to bottom left
      alert(`${board[0].toLocaleUpperCase()} WON!`);
      window.location.reload();
    }
    if (
      (board[3] === "x" && board[4] === "x" && board[5] === "x") ||
      (board[3] === "o" && board[4] === "o" && board[5] === "o")
    ) {
      //middle left to middle right
      alert(`${board[0].toLocaleUpperCase()} WON!`);
      window.location.reload();
    }
    if (
      (board[1] === "x" && board[4] === "x" && board[7] === "x") ||
      (board[1] === "o" && board[4] === "o" && board[7] === "o")
    ) {
      //middle top to middle bottom
      alert(`${board[0].toLocaleUpperCase()} WON!`);
      window.location.reload();
    }
    return (
      <div className={classes.App}>
        <h1 style={{ textAlign: "center" }}>TicTacToe</h1>
        <div className={classes.Row}>
          <div>
            <Square
              value={this.state.board[0]}
              clicked={() => this.usePlayer(0)}
            />
            <Square
              value={this.state.board[1]}
              clicked={() => this.usePlayer(1)}
            />
            <Square
              value={this.state.board[2]}
              clicked={() => this.usePlayer(2)}
            />
          </div>
          <div>
            <Square
              value={this.state.board[3]}
              clicked={() => this.usePlayer(3)}
            />
            <Square
              value={this.state.board[4]}
              clicked={() => this.usePlayer(4)}
            />
            <Square
              value={this.state.board[5]}
              clicked={() => this.usePlayer(5)}
            />
          </div>
          <div>
            <Square
              value={this.state.board[6]}
              clicked={() => this.usePlayer(6)}
            />
            <Square
              value={this.state.board[7]}
              clicked={() => this.usePlayer(7)}
            />
            <Square
              value={this.state.board[8]}
              clicked={() => this.usePlayer(8)}
            />
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: "50px" }}>
          Current turn: {this.state.mode ? "X" : "O"}
        </p>
      </div>
    );
  }
}

export default App;
