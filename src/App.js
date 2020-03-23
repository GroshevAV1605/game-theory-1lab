import React, { useState } from 'react';
import {Button, Table} from 'react-bootstrap'
import './App.css';

const App = () => {
  const [matrixSize, setMatrixSize] = useState(2);
  const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);

  const handleMatrixChange = (e, i, j) => {
    let newMatrix = matrix.map(arr=> [...arr])
    newMatrix[i][j]=e.target.value;
    setMatrix(newMatrix)
  }

  const handleMatrixSizeChange = (e) => {
    const size = parseInt(e.target.value);
    let newMatrix = matrix.map(arr=> [...arr]);
    if  (size>matrixSize){
      while(newMatrix.length !==size){
        newMatrix.push(Array(matrixSize).fill(0));
      }
      while(newMatrix[0].length !== size){
        newMatrix.forEach(arr=>{
          arr.push(0)
        })
      }
    }
    else{
      newMatrix = newMatrix.filter((arr, i)=>i<size);
      newMatrix = newMatrix.map(arr=> arr.filter((el, i)=> i < size))
    }
    setMatrix(newMatrix);
    setMatrixSize(size);
  }

  return(
    <div>
      <h3>Решение матричной игры методом ЗЛП </h3>
      <p>Размер матрицы:</p>
      <input type='number' value={matrixSize} onChange={handleMatrixSizeChange} />
      <Table striped bordered hover>
        <tbody>
          {Array(matrixSize).fill("").map((el, i)=>(
            <tr key={i}>
              {Array(matrixSize).fill("").map((le, j)=> <td key={j}><input type="text" value={matrix[i][j]} onChange={(e)=>handleMatrixChange(e, i, j)}></input></td>)}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default App;
