const CounterDisplay = ({ count }) => {
  const styles = {
    fontSize: "24px",
    color: "rgb(0, 120, 120)",
  };

  return <h2 style={styles}>Contatore: {count}</h2>;
};

export default CounterDisplay;