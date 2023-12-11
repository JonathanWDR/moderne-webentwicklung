import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { AppBar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const schriftArt = 'Roboto, sans-serif';

const defaultTheme = createTheme({
  typography: {
    fontFamily: schriftArt,
  },
});

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
    width: '80px', // Ändere die Breite nach Bedarf
    height: '60px', // Ändere die Höhe nach Bedarf
    backgroundColor: 'white',
  };
  const buttonStyle1 = {
    width: '80px', // Ändere die Breite nach Bedarf
    height: '60px', // Ändere die Höhe nach Bedarf
  };

 function setGamefieldAndWinnerStatus() {
    setGamefield([
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ]);
  winnerstatus = false;
}
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
    if (winnerstatus === true) {
      if (turn === true) {
        alert("O hat gewonnen");
      } else {
        alert("X hat gewonnen");
      }
      setTimeout(() => {
        setGamefieldAndWinnerStatus();
      }, 5000);
    }
    console.log(winnerstatus);

   
  }

  return (
    /* <div id="center">
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
    </div> */

      <ThemeProvider theme={defaultTheme}>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap flex={1} style={{ fontFamily: schriftArt }}>
              4 Gewinnt von Idioten
            </Typography>

            <Button
                component="a" // 'a' für Anchor-Element
                href="https://webdesign.thepic.de" // Ersetze dies durch die tatsächliche Website-URL
                target="_blank" // Öffnet den Link in einem neuen Tab
                rel="noopener noreferrer" // Empfohlene Sicherheitspraxis für externe Links
                variant="text" // Du kannst 'contained' oder 'outlined' verwenden, je nach Bedarf
                color="inherit" // Vererbt die Farbe von der umgebenden Komponente (AppBar)
                style={{ marginRight: '20px', fontSize: '1.2rem', fontFamily: schriftArt}}
            >
              Home
            </Button>

            <Button
                component="a" // 'a' für Anchor-Element
                href="https://webdesign.thepic.de" // Ersetze dies durch die tatsächliche Website-URL
                target="_blank" // Öffnet den Link in einem neuen Tab
                rel="noopener noreferrer" // Empfohlene Sicherheitspraxis für externe Links
                variant="text" // Du kannst 'contained' oder 'outlined' verwenden, je nach Bedarf
                color="inherit" // Vererbt die Farbe von der umgebenden Komponente (AppBar)
                style={{ marginRight: '20px', fontSize: '1.2rem', fontFamily: schriftArt}}
            >
              About us
            </Button>

          </Toolbar>
        </AppBar>

      <Box /*component="section" /*sx={{ flexGrow: 1 }} alignSelf="center" justifyContent="center" direction="column"*/display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="#292d2e"
      >
        <Grid>
          {gamefield.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  {rowIndex == 0 ? 
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={() => addCoinCol(colIndex)}
                    style={buttonStyle1}
                  >
                    {cell}
                  </Button> : <Button
                      variant="contained"
                      color="primary"
                      onClick={() => addCoinCol(colIndex)}
                      disabled
                      style={buttonStyle}
                    >
                      {cell}
                    </Button>}
                </td>
              ))}
            </tr>
          ))}
        </Grid>

        <Button
          color="secondary"
          variant="contained"
          onClick={() => setGamefieldAndWinnerStatus()}
          style={buttonStyle1}
        >
          Reset
        </Button>
      </Box>
    </ThemeProvider>

      /* <TableContainer
        component={Paper}
        variant="outlined"
      >
        <Table aria-label="demo table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert</TableCell>
              <TableCell>Calories</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Frozen yoghurt</TableCell>
              <TableCell>109</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cupcake</TableCell>
              <TableCell>305</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer> */
  );
}

export default App;