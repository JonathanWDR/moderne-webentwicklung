import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

let turn: boolean = true;
let winnerstatus = false;

function checkWinner(gamefield: any): void {
  if (turn === false) {
    checkRowsX(gamefield);
    checkColumnsX(gamefield);
    checkDiagonalsX(gamefield);
  } else {
    checkRowsO(gamefield);
    checkColumnsO(gamefield);
    checkDiagonalsO(gamefield);
  }
  if (winnerstatus === true) {
    if (turn === true) {
      alert("O hat gewonnen");
    } else {
      alert("X hat gewonnen");
    }
  }
}

function checkRowsX(gamefield: any): void {
  for (let row = 0; row < gamefield.length; row++) {
    for (let col = 0; col <= gamefield[row].length - 4; col++) {
      const symbol = gamefield[row][col];
      if (symbol === 'X' && gamefield[row][col + 1] === symbol && gamefield[row][col + 2] === symbol && gamefield[row][col + 3] === symbol) {
        winnerstatus = true; // Gewinner in der Reihe gefunden
        return;
      }
    }
  }
}

function checkRowsO(gamefield: any): void {
  for (let row = 0; row < gamefield.length; row++) {
    for (let col = 0; col <= gamefield[row].length - 4; col++) {
      const symbol = gamefield[row][col];
      if (symbol === 'O' && gamefield[row][col + 1] === symbol && gamefield[row][col + 2] === symbol && gamefield[row][col + 3] === symbol) {
        winnerstatus = true; // Gewinner in der Reihe gefunden
        return;
      }
    }
  }
}

function checkColumnsX(gamefield: any): void {
  for (let col = 0; col < gamefield[0].length; col++) {
    for (let row = 0; row <= gamefield.length - 4; row++) {
      const symbol = gamefield[row][col];
      if (symbol === 'X' && gamefield[row + 1][col] === symbol && gamefield[row + 2][col] === symbol && gamefield[row + 3][col] === symbol) {
        winnerstatus = true; // Gewinner in der Spalte gefunden
        return;
      }
    }
  }
}

function checkColumnsO(gamefield: any): void {
  for (let col = 0; col < gamefield[0].length; col++) {
    for (let row = 0; row <= gamefield.length - 4; row++) {
      const symbol = gamefield[row][col];
      if (symbol === 'O' && gamefield[row + 1][col] === symbol && gamefield[row + 2][col] === symbol && gamefield[row + 3][col] === symbol) {
        winnerstatus = true; // Gewinner in der Spalte gefunden
        return;
      }
    }
  }
}

function checkDiagonalsX(gamefield: any): void {
  const rows = gamefield.length;
  const cols = gamefield[0].length;

  for (let row = 3; row < rows; row++) {
    for (let col = 0; col <= cols - 4; col++) {
      const symbol = gamefield[row][col];

      // Diagonale von links oben nach rechts unten \
      if (symbol === 'X' && gamefield[row - 1][col + 1] === 'X' && gamefield[row - 2][col + 2] === 'X' && gamefield[row - 3][col + 3] === 'X') {
        winnerstatus = true; // Gewinner in der Diagonale gefunden
        return;
      }

      // Diagonale von rechts oben nach links unten /
      if (col < cols - 3 && symbol === 'X' && gamefield[row - 1][col + 1] === 'X' && gamefield[row - 2][col + 2] === 'X' && gamefield[row - 3][col + 3] === 'X') {
        winnerstatus = true; // Gewinner in der Diagonale gefunden
        return;
      }
    }

    for (let col = 3; col < cols; col++) {
      const symbol = gamefield[row][col];

      // Diagonale von rechts unten nach links oben /
      if (symbol === 'X' && gamefield[row - 1][col - 1] === 'X' && gamefield[row - 2][col - 2] === 'X' && gamefield[row - 3][col - 3] === 'X') {
        winnerstatus = true; // Gewinner in der Diagonale gefunden
        return;
      }

      // Diagonale von links unten nach rechts oben \
      if (symbol === 'X' && gamefield[row - 1][col] === 'X' && gamefield[row - 2][col + 1] === 'X' && gamefield[row - 3][col + 2] === 'X') {
        winnerstatus = true; // Gewinner in der Diagonale gefunden
        return;
      }
    }
  }
}

function checkDiagonalsO(gamefield: any): void {
  const rows = gamefield.length;
  const cols = gamefield[0].length;

  for (let row = 3; row < rows; row++) {
    for (let col = 0; col <= cols - 4; col++) {
      const symbol = gamefield[row][col];

      // Diagonale von links oben nach rechts unten \
      if (symbol === 'O' && gamefield[row - 1][col + 1] === 'O' && gamefield[row - 2][col + 2] === 'O' && gamefield[row - 3][col + 3] === 'O') {
        winnerstatus = true; // Gewinner in der Diagonale gefunden
        return;
      }

      // Diagonale von rechts oben nach links unten /
      if (col < cols - 3 && symbol === 'O' && gamefield[row - 1][col + 1] === 'O' && gamefield[row - 2][col + 2] === 'O' && gamefield[row - 3][col + 3] === 'O') {
        winnerstatus = true; // Gewinner in der Diagonale gefunden
        return;
      }
    }

    for (let col = 3; col < cols; col++) {
      const symbol = gamefield[row][col];

      // Diagonale von rechts unten nach links oben /
      if (symbol === 'O' && gamefield[row - 1][col - 1] === 'O' && gamefield[row - 2][col - 2] === 'O' && gamefield[row - 3][col - 3] === 'O') {
        winnerstatus = true; // Gewinner in der Diagonale gefunden
        return;
      }

      // Diagonale von links unten nach rechts oben \
      if (symbol === 'O' && gamefield[row - 1][col] === 'O' && gamefield[row - 2][col + 1] === 'O' && gamefield[row - 3][col + 2] === 'O') {
        winnerstatus = true; // Gewinner in der Diagonale gefunden
        return;
      }
    }
  }
}

function App() {
  const [gamefield, setGamefield] = useState([
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ]);

  const buttonStyle = {
    width: '40px', // Ändere die Breite nach Bedarf
    height: '40px', // Ändere die Höhe nach Bedarf
  };

  function addCoinCol(colIndex: number) {
    const newGamefield = [...gamefield];
    for (let i = gamefield.length - 1; i >= 0; i--) {
      if (newGamefield[i][colIndex] === ' ') {
        if (turn === true) {
          newGamefield[i][colIndex] = 'X'; // 'X' for player 1
          turn = false;
          break;
        } else {
          newGamefield[i][colIndex] = 'O'; // 'O' for player 2
          turn = true;
          break;
        }
      }
    }
    setGamefield(newGamefield);
    checkWinner(newGamefield);
    console.log(winnerstatus);
  }

  return (
    <div id="center">
      <table>
        <tbody>
          {gamefield.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => addCoinCol(colIndex)}
                    style={buttonStyle}
                  >
                    {cell}
                  </Button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;