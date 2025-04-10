import { useEffect, useState } from 'react';
import CounterDisplay from './CounterDisplay';

const Counter = ({ initialValue, incrementAmount }) => {
  // Creazione dello stato 'counter' inizializzato al valore di 'initialValue' passato come prop.
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => console.log("The value of the counter is", counter), [counter])

  // Funzioni per incrementare, decrementare e resettare il contatore.
  const increment = () => setCounter(prevCounter => prevCounter + incrementAmount);
  // Utilizzo di prevCounter per garantire che il valore sia aggiornato correttamente.
  const decrement = () => setCounter(prevCounter => prevCounter - incrementAmount);
  const reset = () => setCounter(initialValue);

  return (
    <div>
      {/* Il componente CounterDisplay viene renderizzato all'interno di Counter. */}
      <CounterDisplay count={counter} />
      {/* Pulsanti per incrementare, decrementare e resettare il contatore. */}
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Resetta</button>
    </div>
  );
};

export default Counter;
