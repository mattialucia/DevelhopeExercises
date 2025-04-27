import React from "react";

const NameList = ({ names }) => {
  return (
    <div style={{ listStyleType: 'none', marginBottom: "60px"}}>
      <h2>2) NameList:</h2>
      <h3>Lista di Nomi:</h3>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {names.map((name, index) => (
          <li key={index}>{name}{index === names.length - 1 ? '.' : ','}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
