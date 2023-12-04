import React, { useState, useEffect, ReactNode } from 'react';
import './App.css';

const ROWS = 6;
const COLS = 7;

type Player = 'X' | 'O' | null | 'Tie';

interface GameState {
  board: Player[][];
  currentPlayer: Player;
  winner: Player | null;
}

const App: React.FC = () => {
  const [state, setState] = useState<GameState>({
    board: Array.from({ length: ROWS }, () => Array(COLS).fill(null)),
    currentPlayer: 'X',
    winner: null,
  });

  const makeMove = (col: number): ReactNode => {
    if (!state.winner) {
      const boardCopy: Player[][] = state.board.map(row => [...row]);
      for (let row = ROWS - 1; row >= 0; row--) {
        if (!boardCopy[row][col]) {
          boardCopy[row][col] = state.currentPlayer;
          checkWinner(boardCopy);
          return null; 
        }
      }
    }
    return null; 
  };

  const checkWinner = (board: Player[][]) => {
 // Check rows
 for (let row = 0; row < ROWS; row++) {
  for (let col = 0; col < COLS - 3; col++) {
    if (
      board[row][col] &&
      board[row][col] === board[row][col + 1] &&
      board[row][col] === board[row][col + 2] &&
      board[row][col] === board[row][col + 3]
    ) {
      setState(prevState => ({ ...prevState, winner: state.currentPlayer }));
      return;
    }
  }
}

// Check columns
for (let col = 0; col < COLS; col++) {
  for (let row = 0; row < ROWS - 3; row++) {
    if (
      board[row][col] &&
      board[row][col] === board[row + 1][col] &&
      board[row][col] === board[row + 2][col] &&
      board[row][col] === board[row + 3][col]
    ) {
      setState(prevState => ({ ...prevState, winner: state.currentPlayer }));
      return;
    }
  }
}

// Check diagonals (left to right)
for (let row = 0; row < ROWS - 3; row++) {
  for (let col = 0; col < COLS - 3; col++) {
    if (
      board[row][col] &&
      board[row][col] === board[row + 1][col + 1] &&
      board[row][col] === board[row + 2][col + 2] &&
      board[row][col] === board[row + 3][col + 3]
    ) {
      setState(prevState => ({ ...prevState, winner: state.currentPlayer }));
      return;
    }
  }
}

// Check diagonals (right to left)
for (let row = 0; row < ROWS - 3; row++) {
  for (let col = 3; col < COLS; col++) {
    if (
      board[row][col] &&
      board[row][col] === board[row + 1][col - 1] &&
      board[row][col] === board[row + 2][col - 2] &&
      board[row][col] === board[row + 3][col - 3]
    ) {
      setState(prevState => ({ ...prevState, winner: state.currentPlayer }));
      return;
    }
  }
}

    // Check for a tie
    if (board.every(row => row.every(cell => cell))) {
      setState(prevState => ({ ...prevState, winner: 'Tie' as Player }));
      return;
    }

    // Switch to the next player
    setState(prevState => ({
      ...prevState,
      board,
      currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
    }));
  };

  const resetGame = () => {
    setState({
      board: Array.from({ length: ROWS }, () => Array(COLS).fill(null)),
      currentPlayer: 'X',
      winner: null,
    });
  };

  const renderCell = (row: number, col: number) => (
    <div
      key={col}
      className={`cell ${state.board[row][col]}`}
      onClick={() => makeMove(col)}
    >
      {state.board[row][col]}
    </div>
  );

  return (
    <div className="App">
      <h1>4-Gewinnt</h1>
      <div className="board">
        {state.board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
          </div>
        ))}
      </div>
      {state.winner && (
        <div className="winner-message">
          {state.winner === 'Tie' ? 'Unentschieden!' : `Spieler ${state.winner} hat gewonnen!`}
          <button onClick={resetGame}>Neues Spiel</button>
        </div>
      )}
    </div>
  );
};

export default App;

