import { useState, useEffect } from 'react';

const Clock = () => {
  // Stato per memorizzare l'ora corrente.
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Aggiornamento dell'orario ogni secondo usando useEffect.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Pulizia: rimuove il timer quando il componente viene smontato.
    return () => clearInterval(timer);
  }, []);

  return (
    <h2>Ora corrente: {currentTime}</h2>
  );
};

export default Clock;
