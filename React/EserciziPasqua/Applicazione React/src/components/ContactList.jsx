const ContactList = ({ contacts }) => {
    return (
      <ul>
        {contacts.length === 0 ? (
          <p>Nessun contatto salvato</p>
        ) : (
          contacts.map((contact, index) => (
            <li key={index}>
              {contact.name} - {contact.phone}
            </li>
          ))
        )}
      </ul>
    );
  };
  
  export default ContactList;
  