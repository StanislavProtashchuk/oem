import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
// import ContactForm from "./ContactForm";
import Filter from './Filter';
import ContactList from './ContactList';

export function App() {

  const [contacts, setContacts] = useState([
                                      {
      id: nanoid(),
      name: '2015 - 2019 LAND ROVER DISCOVERY SPORT REAR BUMPER REINFORCEMENT OEM FK7217906AE',
      number: 'FK7217906AE / FK7217906 AE / FK 7217906 AE	',
      oem: 'LR104912 / LR 104912	',
      notes: ''
    },
                                    {
      id: nanoid(),
      name: '2015 - 2020 LAND ROVER DISCOVERY SPORT REAR BUMPER RIGHT BRACKET OEM FK7217A881A',
      number: 'FK7217A881A / FK7217A881 A / FK 7217A881 A	',
      oem: 'LR061274 / LR 061274',
      notes: ''
    },
                                  {
      id: nanoid(),
      name: '2018-2019 LAND ROVER DISCOVERY SPORT REAR RIGHT BLIND SPOT MOUNT OEM JK7217E800A',
      number: 'JK7217E800A / JK7217E800 A / JK 7217E800 A	',
      oem: 'LR096609 / LR 096609',
      notes: ''
    },
                                {
      id: nanoid(),
      name: '2018-2019 LAND ROVER DISCOVERY SPORT REAR LEFT BLIND SPOT MOUNT OEM JK7217E801A',
      number: 'JK7217E801A / JK7217E801 A / JK 7217E801 A	',
      oem: 'LR096610 / LR 096610',
      notes: ''
    },
                              {
      id: nanoid(),
      name: '2015 - 2020 LAND ROVER DISCOVERY SPORT REAR BUMPER LEFT BRACKET OEM FK7217A882A',
      number: 'FK7217A882A / FK7217A882 A / FK 7217A882 A	',
      oem: 'LR061275 / LR 061275',
      notes: ''
    },
                            {
      id: nanoid(),
      name: '2015-2019 LAND ROVER DISCOVERY SPORT FRONT FENDER LEFT BRACKET OEM FK7216A129AG',
      number: 'FK7216A129AG / FK7216A129 AG / FK 7216A129 AG	',
      oem: 'LR087699 /LR 087699',
      notes: ''
    },
                          {
      id: nanoid(),
      name: '2015-2019 LAND ROVER DISCOVERY SPORT FRONT BUMPER LEFT BRACKET OEM FK7217E763AC',
      number: 'FK7217E763AC / FK7217E763 AC / FK 7217E763 AC	',
      oem: 'LR077883 / LR 077883',
      notes: ''
    },
                        {
      id: nanoid(),
      name: '2015-2019 LAND ROVER DISCOVERY SPORT FRONT BUMPER REINFORCEMENT OEM FK7217F021AB',
      number: 'FK7217F021AB / FK7217F021 AB / FK 7217F021 AB',
      oem: 'LR059013 / LR 059013',
      notes: ''
    },
                      {
      id: nanoid(),
      name: '2015 - 2019 LAND ROVER DISCOVERY SPORT AWD REAR RIGHT AXLE SHAFT OEM FK724B402AB',
      number: 'FK724B402AB / FK724B402 AB / FK 724B402 AB	',
      oem: 'LR060478 / LR 060478',
      notes: ''
    },
                    {
      id: nanoid(),
      name: '2015 - 2019 LAND ROVER DISCOVERY SPORT AWD REAR LEFT AXLE SHAFT OEM FK724B402AB',
      number: 'FK724B402AB / FK724B402 AB / FK 724B402 AB	',
      oem: 'LR060480 / LR 060480',
      notes: ''
    },
                  {
      id: nanoid(),
      name: '2015 - 2019 LAND ROVER DISCOVERY SPORT FRONT RIGHT A PILLAR TRIM OEM FK7203510AH',
      number: 'FK7203510AH / FK7203510 AH / FK 7203510 AH	',
      oem: 'LR060523 / LR 060523',
      notes: ''
    },
                {
      id: nanoid(),
      name: '2015 - 2019 LAND ROVER DISCOVERY SPORT FRONT LEFT A PILLAR TRIM OEM FK7203511AX',
      number: 'FK7203511AX / FK7203511 AX / FK 7203511 AX',
      oem: '',
      notes: ''
    },
              {
      id: nanoid(),
      name: '2015 - 2019 LAND ROVER DISCOVERY SPORT FRONT LEFT A PILLAR FRAME OEM GRAY=1AU',
      number: 'LR061006 / LR 061006',
      oem: '',
      notes: 'WILL CUT OUT EXACTLY AS YOU NEED. COMMERCIAL ADDRESS REQUIRED FOR SHIPPING.'
    },
            {
      id: nanoid(),
      name: '2015 - 2019 LAND ROVER DISCOVERY SPORT ANTENNA MODULE CONNECTOR OEM K8D219C097AA',
      number: 'K8D219C097AA / K8D219C097 AA / K8D2 19C097 AA	',
      oem: 'LT95439 / LT 95439, LR044855 / LR 044855',
      notes: ''
    },
          {
      id: nanoid(),
      name: '2017-2019 LAND ROVER DISCOVERY SPORT SHARK FIN ANTENNA OEM GJ3219C089EB GRAY=1AU',
      number: 'GJ3219C089EB / GJ3219C089 EB / GJ 3219C089 EB',
      oem: 'LR070775 / LR 070775',
      notes: ''
    },
        {
      id: nanoid(),
      name: '2015 - 2020 LAND ROVER DISCOVERY SPORT RIGHT AMPLIFIER ISOLATOR OEM CX2318K891CA',
      number: 'CX2318K891CA / CX2318K891 CA / CX 2318K891 CA',
      oem: 'LR060984 / LR 060984',
      notes: ''
    },
      {
      id: nanoid(),
      name: '2015 - 2020 LAND ROVER DISCOVERY SPORT LEFT AMPLIFIER ISOLATOR OEM CX2318K891AA',
      number: 'CX2318K891AA / CX2318K891 AA / CX 2318K891 AA',
      oem: 'LR060983 / LR 060983',
      notes: ''
    },
    {
      id: nanoid(),
      name: '2016 - 2020 LAND ROVER DISCOVERY SPORT ALTERNATOR GENERATOR 14V OEM GX7310300DF',
      number: 'GX7310300DF / GX7310300 DF / GX 7310300 DF	',
      oem: '',
      notes: ''
    },
    {
      id: nanoid(),
      name: '2018 - 2019 LAND ROVER DISCOVERY SPORT AIR INTAKE DUCT RESONATOR OEM HJ329C623AC',
      number: 'HJ329C623AC / HJ329C623 AC / HJ 329C623 AC',
      oem: 'LR094066 / LR 094066',
      notes: ''
    },
    {
      id: nanoid(),
      name: '2018 - 2020 LAND ROVER DISCOVERY SPORT LEFT AIR FILTER DUCT OEM FK72021B61AB',
      number: 'FK72021B61AB / FK72021B61 AB / FK 72021B61 AB',
      oem: 'LR071942 / LR 071942',
      notes: ''
    },
    {
      id: nanoid(),
      name: '2018 - 2019 LAND ROVER DISCOVERY SPORT AIR INTAKE DUCT RESONATOR OEM JK729H707AC',
      number: 'JK729H707AC / JK729H707 AC / JK 729H707 AC',
      oem: 'LR097974 / LR 097974',
      notes: ''
    },
    {
      id: nanoid(),
      name: '2018 - 2020 LAND ROVER DISCOVERY SPORT AIR FILTER BOX ASSEMBLY OEM HJ329H709AB',
      number: 'HJ329H709AB / HJ329H709 AB / HJ 329H709 AB',
      oem: 'LR094063 / LR 094063',
      notes: ''
    },
    {
      id: nanoid(),
      name: '2015 - 2020 LAND ROVER DISCOVERY SPORT REAR RIGHT SHOCK ABSORBER OEM GK7218A116',
      number: 'GK7218A116 / GK 7218A116	',
      oem: 'LR124639 / LR 124639',
      notes: ''
    },
    {
      id: nanoid(),
      name: '2019 - 2020 LAND ROVER DISCOVERY SPORT ABS ANTI LOCK BRAKE PUMP OEM KJ322C405AB',
      number: 'KJ322C405AB / KJ322C405 AB / KJ 322C405 AB',
      oem: 'LR117212 / LR 117212',
      notes: ''
    },
    {
      id: nanoid(),
      name: '2015 - 2020 LAND ROVER DISCOVERY SPORT REAR LEFT SHOCK ABSORBER OEM GK7218A145',
      number: 'GK7218A145 / GK 7218A145',
      oem: 'LR124717 / LR 124717',
      notes: ''
    },
  ]);
  const [filter, setFilter] = useState('');


  // function formSubmitHandler({name, number}) {
  //   if (contacts.map(contact => contact.name.toLowerCase()).includes(name.toLowerCase())){
  //     return alert(`${name} is already in contacts`)
  //   };

  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number
  //   };

  //   setContacts(contacts => ([...contacts, contact]));
  // };

  function handleFilter(e) {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  function filteredContacts() {
    return contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));
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