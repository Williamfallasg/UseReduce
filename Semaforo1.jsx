import React, { useReducer } from 'react';
import './Semaforo1.css';


const semaforoReducer = (state, action) => {
  switch (action.type) {
    case 'ROJO':
      return 'red';
    case 'AMARILLO':
      return 'yellow';
    case 'VERDE':
      return 'green';
    default:
      return state;
  }
};

function Semaforo1() {
  const [color, dispatch] = useReducer(semaforoReducer, 'red');

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={() => dispatch({ type: 'ROJO' })} className={`btn-color ${color === 'red' ? 'selected' : ''}`}>Color Rojo</button>
        <button onClick={() => dispatch({ type: 'AMARILLO' })} className={`btn-color ${color === 'yellow' ? 'selected' : ''}`}>Color Amarillo</button>
        <button onClick={() => dispatch({ type: 'VERDE' })} className={`btn-color ${color === 'green' ? 'selected' : ''}`}>Color Verde</button>
      </div>

      <div className="semaforo">
        <div className="circle" style={{ backgroundColor: color }}></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Semaforo1;
