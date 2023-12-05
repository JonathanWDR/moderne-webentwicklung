import React, { useState } from 'react';

function App() {
  const [gamefield, setGamefield] = useState([
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
  ]);

  function addCoinCol(colIndex: number) {
    const newGamefield = [...gamefield];
    for (let i = gamefield.length - 1; i >= 0; i--) {
      if (newGamefield[i][colIndex] === false) {
        newGamefield[i][colIndex] = true;
        break;
      }
    }
    setGamefield(newGamefield);
  }

  return (
    <div className="App">
      <table>
        <tbody>
          {gamefield.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <button onClick={() => addCoinCol(colIndex)}>
                    {cell === false ? 'X' : 'O'}
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
