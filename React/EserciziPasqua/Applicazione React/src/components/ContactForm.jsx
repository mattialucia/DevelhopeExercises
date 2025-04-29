import { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      addContact({ name, phone });
      setName("");
      setPhone("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Telefono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Aggiungi Contatto</button>
    </form>
  );
};

export default ContactForm;
