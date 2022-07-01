import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
// import ContactForm from "./ContactForm";
import Filter from './Filter';
import ContactList from './ContactList';

export function App() {

  const [contacts, setContacts] = useState([
  {
id: nanoid(),
name: '2015 - 2019 LAND ROVER DISCOVERY SPORT TURN SIGNAL SWITCH OEM BJ323F972CC',
number: 'BJ323F972CC / BJ323F972 CC / BJ32 3F972 CC',
oem: 'LR024626 / LR 024626',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2019 LAND ROVER DISCOVERY SPORT WIPER SWITCH CONTROL OEM BJ323F973BC',
number: 'BJ323F973BC / BJ323F973 BC / BJ32 3F973 BC',
oem: 'LR024628 / LR 024628',
notes: ''
},
{
id: nanoid(),
name: '2015-2019 LAND ROVER DISCOVERY SPORT WINDSHIELD COWL VENT GRILLE OEM FK72020K46A',
number: 'FK72020K46A / FK72020K46 A / FK72 020K46 A',
oem: 'LR111636 / LR 111636',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2019 LAND ROVER DISCOVERY SPORT DASH LEFT END CAP TRIM OEM FK72043C27BA',
number: 'FK72043C27BA / FK72043C27 BA / FK72 043C27 BA',
oem: 'LR060606 / LR 060606',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2019 LAND ROVER DISCOVERY SPORT DASH RIGHT END CAP TRIM OEM FK72044B78B',
number: 'FK72044B78B / FK72044B78 B / FK72 044B78 B',
oem: 'LR060605 / LR 060605',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2019 LAND ROVER DISCOVERY SPORT DASHBOARD CENTER LEFT MOLDING TRIM OEM',
number: 'GK7M640E73AB / GK7M640E73 AB / GK7M 640E73 AB',
oem: 'LR088587 / LR 088587',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2019 LAND ROVER DISCOVERY SPORT DASH LEFT COLUMN CORNER TRIM OEM',
number: 'FK7204304AB / FK7204304 AB / FK72 04304 AB',
oem: 'LR059670 / LR 059670',
notes: ''
},
{
id: nanoid(),
name: '2018-2019 LAND ROVER DISCOVERY SPORT DASH LEFT LOWER KNEE COVER OEM FK72044F08A',
number: 'FK72044F08A / FK72044F08 A / FK72 044F08 A',
oem: '',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2019 LAND ROVER DISCOVERY SPORT DASH RIGHT TRAY STORAGE OEM FK72044J53AW',
number: 'FK72044J53AW / FK72044J53 AW / FK72 044J53 AW',
oem: 'LR072463 / LR 072463',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2019 LAND ROVER DISCOVERY SPORT DASH RIGHT COLUMN CORNER TRIM OEM',
number: '',
oem: 'LR059643 / LR 059643',
notes: 'BROKEN TAB. SEE PICTURES.'
},
{
id: nanoid(),
name: '2018 - 2019 LAND ROVER DISCOVERY SPORT DIPSTICK OIL LEVEL CHECK OEM H4P36754DC',
number: 'H4P36754DC / H4P36754 DC / H4P3 6754 DC',
oem: 'LR112111 / LR 112111',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2019 LAND ROVER DISCOVERY SPORT RIGHT VIEW MIRROR LOWER TRIM COVER OEM',
number: '',
oem: 'LR048351 / LR 048351',
notes: ''
},
{
id: nanoid(),
name: '2018 - 2019 LAND ROVER DISCOVERY SPORT LEFT DOOR REAR VIEW MIRROR OEM GRAY=1AU',
number: '',
oem: 'LR096594 / LR 096594',
notes: ''
},
{
id: nanoid(),
name: '2015-2020 LAND ROVER DISCOVERY SPORT LEFT QUARTER MOLDING COVER OEM FK7229149AC',
number: 'FK7229149AC / FK7229149 AC / FK72 29149 AC',
oem: 'LR061130 / LR 061130',
notes: ''
},
{
id: nanoid(),
name: '2015-2020 LAND ROVER DISCOVERY SPORT RIGHT QUARTER MOLDING COVER OEM FK7229148AC',
number: 'FK7229148AC / FK7229148 AC / FK72 29148 AC',
oem: 'LR061128 / LR 061128',
notes: ''
},
{
id: nanoid(),
name: '2015-2020 LAND ROVER DISCOVERY SPORT LEFT D PILLAR UPPER COVER OEM FK7251749AG',
number: 'FK7251749AG / FK7251749 AG / FK72 51749 AG',
oem: 'LR060541 / LR 060541',
notes: ''
},
{
id: nanoid(),
name: '2015-2020 LAND ROVER DISCOVERY SPORT RIGHT D PILLAR UPPER COVER OEM FK7251748AG',
number: 'FK7251748AG / FK7251748 AG / FK72 51748 AG',
oem: 'LR060533 / LR 060533',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2019 LAND ROVER DISCOVERY SPORT DASH DASHBOARD INSTRUMENT PANEL OEM',
number: '',
oem: 'LR083776 / LR 083776',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2020 LAND ROVER DISCOVERY SPORT FRONT LEFT WINDOW SWITCH OEM FK7214540AD',
number: 'FK7214540AD / FK7214540 AD / FK72 14540 AD',
oem: 'LR109008 / LR 109008',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2019 LAND ROVER DISCOVERY SPORT FRONT RIGHT WINDOW SWITCH OEM FK7214717AB',
number: 'FK7214717AB / FK7214717 AB / FK72 14717 AB',
oem: 'LR063714 / LR 063714',
notes: ''
},
{
id: nanoid(),
name: '2015-2020 LAND ROVER DISCOVERY SPORT FRONT RIGHT DOOR WINDOW REGULATOR MOTOR OEM',
number: '',
oem: 'LR126072 / LR 126072',
notes: ''
},
{
id: nanoid(),
name: '2018-2019 LAND ROVER DISCOVERY SPORT ENGINE CONTROL MODULE ECM OEM HJ3214C568AB',
number: 'HJ3214C568AB / HJ3214C568 AB / HJ32 14C568 AB',
oem: 'LR104411 / LR 104411',
notes: ''
},
{
id: nanoid(),
name: '2018-2019 LAND ROVER DISCOVERY SPORT ENGINE COOLING RADIATOR FAN OEM HJ328C607AE',
number: 'HJ328C607AE / HJ328C607 AE / HJ32 8C607 AE',
oem: 'LR094059 / LR 094059',
notes: ''
},
{
id: nanoid(),
name: '2018-2019 LAND ROVER DISCOVERY SPORT MAIN ENGINE FUSE RELAY BOX OEM 6G9T14A067AB',
number: '6G9T14A067AB / 6G9T14A067 AB / 6G9T 14A067 AB',
oem: '',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2020 LAND ROVER DISCOVERY SPOR PARKING BRAKE SWITCH OEM FK722B623AA',
number: 'FK722B623AA / FK722B623 AA / FK72 2B623 AA',
oem: 'LR060857 / LR 060857',
notes: ''
},
{
id: nanoid(),
name: '2019 LAND ROVER DISCOVERY SPORT AWD 2.0L ENGINE ASSEMBLY 11K OEM H4P36J011DG',
number: 'H4P36J011DG / H4P36J011 DG / H4P3 6J011 DG',
oem: 'LR112029 / LR 112029',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2019 LAND ROVER DISCOVERY SPORT LEFT ENGINE FRAME MOUNT OEM EJ32711121AD',
number: 'EJ32711121AD / EJ32711121 AD / EJ32 711121 AD',
oem: '',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2019 LAND ROVER DISCOVERY SPORT RIGHT ENGINE FRAME MOUNT OEM BJ326F012BA',
number: 'BJ326F012BA / BJ326F012 BA / BJ32 6F012 BA',
oem: 'LR024730 / LR 024730',
notes: ''
},
{
id: nanoid(),
name: '2018-2019 LAND ROVER DISCOVERY SPORT RIGHT ENGINE MOUNT BRACKET OEM GJ326P096AF',
number: 'GJ326P096AF / GJ326P096 AF / GJ32 6P096 AF',
oem: 'LR095899 / LR 095899',
notes: ''
},
{
id: nanoid(),
name: '2018 - 2019 LAND ROVER DISCOVERY SPORT FRONT ENGINE FRAME MOUNT OEM GJ326030AA',
number: 'GJ326030AA / GJ326030 AA / GJ32 6030 AA',
oem: 'LR072044 / LR 072044',
notes: ''
},
{
id: nanoid(),
name: '2018-2019 LAND ROVER DISCOVERY SPORT ENGINE FRAME MOUNT BRACKET OEM GJ326H051AB',
number: 'GJ326H051AB / GJ326H051 AB / GJ32 6H051 AB',
oem: 'LR032311 / LR 032311',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2019 LAND ROVER DISCOVERY SPORT ENGINE UPPER FRAME MOUNT BRACKET OEM',
number: '',
oem: 'LR000597 / LR 000597',
notes: ''
},
{
id: nanoid(),
name: '2018 - 2020 LAND ROVER DISCOVERY SPORT ENGINE MOTOR TIMING COVER OEM HJ326A949A',
number: 'HJ326A949A / HJ326A949 A / HJ32 6A949 A',
oem: 'LR094077 / LR 094077',
notes: ''
},
{
id: nanoid(),
name: '2018 - 2019 LAND ROVER DISCOVERY SPORT ENGINE INSULATION COVER OEM HJ329U550AB',
number: 'HJ329U550AB / HJ329U550 AB / HJ32 9U550 AB',
oem: 'LR093826 / LR 093826',
notes: ''
},
{
id: nanoid(),
name: '2017 - 2019 LAND ROVER DISCOVERY SPORT TRANS SHIFTER KNOB SWITCH OEM HJ327E453AF',
number: 'HJ327E453AF / HJ327E453 AF / HJ32 7E453 AF',
oem: 'LR117066 / LR 117066',
notes: ''
},
{
id: nanoid(),
name: '2015 - 2019 LAND ROVER DISCOVERY SPORT ENGINE EXHAUST PIPE SYSTEM ASSEMBLY OEM',
number: '',
oem: 'LR093653 / LR 093653',
notes: ''
},
{
id: nanoid(),
name: '2018 - 2019 LAND ROVER DISCOVERY SPORT EXHAUST INTERMEDIATE PIPE OEM HJ325E212AC',
number: 'HJ325E212AC / HJ325E212 AC / HJ32 5E212 AC',
oem: 'LR094445 / LR 094445',
notes: ''
},
{
id: nanoid(),
name: '2018-2020 LAND ROVER DISCOVERY SPORT OVERHEAD CONSOLE DOME LAMP OEM HJ32519A58A',
number: 'HJ32519A58A / HJ32519A58 A / HJ32 519A58 A',
oem: 'LR107966 / LR 107966',
notes: ''
},
  
      {
      id: nanoid(),
      name: '2019 LAND ROVER DISCOVERY SPORT SPARE TIRE CONTINENTAL T155/85R18 OEM K8021007RA',
      number: 'K8021007RA / K8021007 RA / K8 021007 RA',
      oem: 'LR088518 / LR 088518',
      notes: 'COMPATIBILITY FOR THE YEAR 2015 / 2016 / 2017 / 2018 / 2019 / 2020'
    },
  
    {
      id: nanoid(),
      name: '2019 17 18 LAND ROVER DISCOVERY SPORT WHEEL RIM ALLOY 20X8J ET45 OEM FK7M1007MB',
      number: 'FK7M1007MB / FK7M1007 MB / FK 7M1007 MB',
      oem: 'LR085994 / LR 085994',
      notes: 'COMPATIBILITY FOR THE YEAR 2017 / 2018 / 2019'
    },
  
                                                          {
      id: nanoid(),
      name: '2015 – 2019 LAND ROVER DISCOVERY SPORT REAR SUBFRAME LEFT WIRE OEM JK729L468AB',
      number: 'JK729L468AB / JK729L468 AB / JK 729L468 AB',
      oem: '',
      notes: ''
    },
                                                        {
      id: nanoid(),
      name: '2015 – 2019 LAND ROVER DISCOVERY SPORT REAR SUBFRAME RIGHT WIRE OEM JK729L468BC',
      number: 'JK729L468BC / JK729L468 BC / JK 729L468 BC',
      oem: '',
      notes: ''
    },
                                                      {
      id: nanoid(),
      name: '2015–2019 LAND ROVER DISCOVERY SPORT STEERING GEAR WIRE HARNESS OEM JK7214A614BK',
      number: 'JK7214A614BK / JK7214A614 BK / JK 7214A614 BK',
      oem: 'LR060806 / LR 060806',
      notes: ''
    },
  
                                                    {
      id: nanoid(),
      name: '2015 – 2019 LAND ROVER DISCOVERY SPORT WIRE WIRING HARNESS OEM HJ329137CA',
      number: 'HJ329137CA / HJ329137 CA / HJ 329137 CA',
      oem: '',
      notes: ''
    },
                                                  {
      id: nanoid(),
      name: '2015–2020 LAND ROVER DISCOVERY SPORT FRONT WIPER LINKAGE & MOTOR OEM FK7217500AC',
      number: 'FK7217500AC / FK7217500 AC / FK 7217500 AC',
      oem: 'LR058845 / LR 058845',
      notes: ''
    },
                                                {
      id: nanoid(),
      name: '2015–2020 LAND ROVER DISCOVERY SPORT REAR WIPER LINKAGE W/ MOTOR OEM FK7217404AC',
      number: 'FK7217404AC / FK7217404 AC / FK 7217404 AC',
      oem: 'LR060921 / LR 060921',
      notes: ''
    },
                                              {
      id: nanoid(),
      name: '2015 – 2020 LAND ROVER DISCOVERY SPORT LEFT HEADLIGHT WASHER OEM FK7213L015AA',
      number: 'FK7213L015AA / FK7213L015 AA / FK 7213L015 AA',
      oem: 'LR061219 / LR 061219',
      notes: ''
    },
                                            {
      id: nanoid(),
      name: '2015 –2020 LAND ROVER DISCOVERY SPORT WASHER BOTTLE FILLER NECK OEM FK7217C615AA',
      number: 'FK7217C615AA / FK7217C615 AA / FK 7217C615 AA',
      oem: 'LR084365 / LR 084365',
      notes: ''
    },
                                          {
      id: nanoid(),
      name: '2015 – 2020 LAND ROVER DISCOVERY SPORT FRONT RIGHT SEAT AIR BAG OEM BJ32611D32AC',
      number: 'BJ32611D32AC / BJ32611D32 AC / BJ 32611D32 AC',
      oem: 'LR026019 / LR 026019',
      notes: ''
    },
                                        {
      id: nanoid(),
      name: '2015 –2020 LAND ROVER DISCOVERY SPORT DASH RIGHT AIR BAG AIRBAG OEM FK72044A74BA',
      number: 'FK72044A74BA / FK72044A74 BA / FK 72044A74 BA',
      oem: 'LR066774 / LR 066774',
      notes: ''
    },
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
      number: 'K8D219C097AA / K8D219C097 AA / K8D 219C097 AA	',
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