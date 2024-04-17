import React, { useReducer } from 'react';
import '../index.css';

const initialState = {
  input: '',
  tareas: [],
};

const tareasReducer = (state, action) => {
  switch (action.type) {
    case 'ACTUALIZAR_INPUT':
      return { ...state, input: action.payload };
    case 'AGREGAR_TAREA':
      return { ...state, tareas: [...state.tareas, action.payload] };
    default:
      return state;
  }
};

function Tareas1(props) {
  const [state, dispatch] = useReducer(tareasReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.crearTarea(state.input);
    localStorage.setItem('input', state.input);
    dispatch({ type: 'AGREGAR_TAREA', payload: state.input });
    dispatch({ type: 'ACTUALIZAR_INPUT', payload: '' }); // Limpiar el input después de guardar
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Ingresar nueva tarea'
          value={state.input}
          onChange={(e) => dispatch({ type: 'ACTUALIZAR_INPUT', payload: e.target.value })}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default Tareas1;
