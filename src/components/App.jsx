import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
// import ContactForm from "./ContactForm";
import Filter from './Filter';
import ContactList from './ContactList';

export function App() {

  const [contacts, setContacts] = useState([
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');


  function formSubmitHandler({name, number}) {
    if (contacts.map(contact => contact.name.toLowerCase()).includes(name.toLowerCase())){
      return alert(`${name} is already in contacts`)
    };

    const contact = {
      id: nanoid(),
      name,
      number
    };

    setContacts(contacts => ([...contacts, contact]));
  };

  function handleFilter(e) {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  function filteredContacts() {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  function deleteContact(id) {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== id))
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  })

    return (
      <div>
        {/* <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} /> */}
        <h2>Parts:</h2>
        <Filter value={filter} onChange={handleFilter} />
        <ContactList filteredContacts={filteredContacts()} deleteContact={deleteContact} />
      </div>
    );
  }