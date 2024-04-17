import React, { useReducer } from 'react';


const contadorReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENTAR':
            return { count: state.count + 1 };
        case 'DECREMENTAR':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

function Contador1() {
    // Usa useReducer
    const [state, dispatch] = useReducer(contadorReducer, { count: 0 });

    return (
        <div>
            <br />
            <hr />
            Contador: {state.count}
            <button className='btn-count' onClick={() => dispatch({ type: 'DECREMENTAR' })}>-</button>
            <button className='btn-count' onClick={() => dispatch({ type: 'INCREMENTAR' })}>+</button>
        </div>
    );
}

export default Contador1;