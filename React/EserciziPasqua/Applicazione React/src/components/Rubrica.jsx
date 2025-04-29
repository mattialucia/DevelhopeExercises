import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const Rubrica = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div>
      <h1>Esercizio Extra:</h1>
      <h2>Mini Rubrica</h2>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Rubrica;
