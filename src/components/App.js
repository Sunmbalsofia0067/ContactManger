import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import './App.css';

function App() {
  const contactsList = [
    {
      id: "1",
      "name": "sofia",
      "email": 'sofia@gmail.com'
    },
    {
      id: "2",
      "name": "sunmbal",
      "email": 'sunmbal@gmail.com'
    },
    {
      id: "3",
      "name": "affaf",
      "email": 'affaf@gmail.com'
    }
  ]
  return (
   <div className='ui container'>
      <Header/>
      <AddContact  />
      <ContactList   contacts={contactsList}/>
   </div>
  );
}

export default App;
