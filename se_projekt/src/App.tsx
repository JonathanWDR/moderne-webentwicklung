import React, { useState } from 'react';
let turn: boolean = true;
let winnerstatus = false;

function checkRows(gamefield: any): void {
  for (let row = 0; row < gamefield.length; row++) {
    for (let col = 0; col <= gamefield[row].length - 4; col++) {
      const symbol = gamefield[row][col];
      if (symbol == 'X' && gamefield[row][col + 1] === symbol && gamefield[row][col + 2] === symbol && gamefield[row][col + 3] === symbol) {
        winnerstatus = true; // Gewinner in der Reihe gefunden
        return;
      }
    }
  }
}

function checkColumns(gamefield: any): void {
  for (let col = 0; col < gamefield[0].length; col++) {
    for (let row = 0; row <= gamefield.length - 4; row++) {
      const symbol = gamefield[row][col];
      if (symbol == 'X' && gamefield[row + 1][col] === symbol && gamefield[row + 2][col] === symbol && gamefield[row + 3][col] === symbol) {
        winnerstatus = true; // Gewinner in der Spalte gefunden
        return;
      }
    }
  }
}

function checkDiagonals(gamefield: any): void {
  for (let row = 0; row <= gamefield.length - 4; row++) {
    for (let col = 0; col <= gamefield[row].length - 4; col++) {
      const symbol = gamefield[row][col];
      // Diagonale von links oben nach rechts unten \
      if (symbol == 'X' && gamefield[row + 1][col + 1] === symbol && gamefield[row + 2][col + 2] === symbol && gamefield[row + 3][col + 3] === symbol) {
        winnerstatus = true; // Gewinner in der Diagonale gefunden
        return;
      }
      // Diagonale von rechts oben nach links unten /
      if (symbol == 'X' && gamefield[row + 1][col + 3] === symbol && gamefield[row + 2][col + 2] === symbol && gamefield[row + 3][col + 1] === symbol) {
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

  // SINGH

  function addCoinCol(colIndex: number) {
    const newGamefield = [...gamefield];
    for (let i = gamefield.length - 1; i >= 0; i--) {
      if (newGamefield[i][colIndex] === ' ') {
        if(turn === true){
          newGamefield[i][colIndex] = 'X'; // 'X' for player 1
          turn = false;
          break;
        }
        else{
          newGamefield[i][colIndex] = 'O'; // 'O' for player 2
          turn = true;
          break;
        }
        
      }
      
    
    }
    
    setGamefield(newGamefield);

    function checkWinner(gamefield: any): void {
      checkRows(gamefield);
      checkColumns(gamefield);
      checkDiagonals(gamefield);
    }
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
                  <button onClick={() => addCoinCol(colIndex)}>
                    {cell}
                  </button>
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

// import React, { useState } from 'react';

// function App() {
//   const [gamefield, setGamefield] = useState([
//     [false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false],
//   ]);

//   function addCoinCol(colIndex: number) {
//     const newGamefield = [...gamefield];
//     for (let i = gamefield.length - 1; i >= 0; i--) {
//       if (newGamefield[i][colIndex] === false) {
//         newGamefield[i][colIndex] = true;
//         break;
//       }
//     }
//     setGamefield(newGamefield);
//   }

//   return (
//     <div id="center">
//       <table>
//         <tbody>
//           {gamefield.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {row.map((cell, colIndex) => (
//                 <td key={colIndex}>
//                   <button onClick={() => addCoinCol(colIndex)}>
//                     {cell === false ? 'X' : 'O'}
//                   </button>
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// function App() {
//   const [gamefield, setGamefield] = useState([
//     [false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false],
//   ]);

//   function addCoinCol(colIndex: number) {
//     for (let i = gamefield.length - 1; i >= 0; i--) {
//       if (gamefield[i][colIndex] === false) {
//         const newGamefield = [...gamefield];
//         newGamefield[i][colIndex] = true;
//         setGamefield(newGamefield);
//         break;
//       }
//     }
//   }

//   return (
//     <div className="App">
//       <table>
//         <thead>
//           <tr>
//             <th>
//               <button onClick={() => addCoinCol(0)}>addCoinCol1</button>
//             </th>
//             <th>
//               <button onClick={() => addCoinCol(1)}>addCoinCol2</button>
//             </th>
//             <th>
//               <button onClick={() => addCoinCol(2)}>addCoinCol3</button>
//             </th>
//             <th>
//               <button onClick={() => addCoinCol(3)}>addCoinCol4</button>
//             </th>
//             <th>
//               <button onClick={() => addCoinCol(4)}>addCoinCol5</button>
//             </th>
//             <th>
//               <button onClick={() => addCoinCol(5)}>addCoinCol6</button>
//             </th>
//             <th>
//               <button onClick={() => addCoinCol(6)}>addCoinCol7</button>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {gamefield.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {row.map((cell, colIndex) => (
//                 <td key={colIndex}>{cell === false ? 'X' : 'O'}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function click() {
//   console.log("Test");
// }

// function App() {
//   const [gamefield, setGamefield] = useState([
//     [false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false],
//   ]);

//   function addCoinCol(colIndex: number) {
//     for (let i = gamefield.length - 1; i >= 0; i--) {
//       if (gamefield[i][colIndex] == false) {
//         const newGamefield = [...gamefield];
//         newGamefield[i][colIndex] = true;
//         setGamefield(newGamefield);
//         break;
//       }
//     }
//   }

//   return (
//     <div className="App">
//      <table> 
//       <td><button id='col1' onClick={() => addCoinCol(0)}>addCoinCol1</button></td>
//       <td><button id='col2' onClick={() => addCoinCol(1)}>addCoinCol2</button></td>
//       <td><button id='col3' onClick={() => addCoinCol(2)}>addCoinCol3</button></td>
//       <td><button id='col4' onClick={() => addCoinCol(3)}>addCoinCol4</button></td>
//       <td><button id='col5' onClick={() => addCoinCol(4)}>addCoinCol5</button></td>
//       <td><button id='col6' onClick={() => addCoinCol(5)}>addCoinCol6</button></td>
//       <td><button id='col7' onClick={() => addCoinCol(6)}>addCoinCol7</button></td>
      
//         {gamefield.map((row, rowIndex) => (
//           <tr key={rowIndex}>
//             {row.map((cell, cellIndex) => (
//               <td key={cellIndex}>{String(cell)}</td>
//             ))}
//           </tr>
//         ))}
//       </table>
//       <table>
//         <td><button id='col1' onClick={() => addCoinCol(0)}>addCoinCol1</button></td>
//         <td><button id='col2' onClick={() => addCoinCol(1)}>addCoinCol2</button></td>
//         <td><button id='col3' onClick={() => addCoinCol(2)}>addCoinCol3</button></td>
//         <td><button id='col4' onClick={() => addCoinCol(3)}>addCoinCol4</button></td>
//         <td><button id='col5' onClick={() => addCoinCol(4)}>addCoinCol5</button></td>
//         <td><button id='col6' onClick={() => addCoinCol(5)}>addCoinCol6</button></td>
//         <td><button id='col7' onClick={() => addCoinCol(6)}>addCoinCol7</button></td>
//         {gamefield.map((row, rowIndex) => (
//           <tr key={rowIndex}>
//             {row.map((cell, colIndex) => (
//               <td key={colIndex}>
//                 {cell === false ? (
//                   'X'
//                 ) : (
//                   'O'
//                 )}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </table>


//     </div>
//   );
// }

// export default App;

