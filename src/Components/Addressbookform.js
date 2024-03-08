import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./addbookcss.css";

const Addressbookform = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        // Retrieve existing entries from localStorage if available
        const storedEntries = JSON.parse(localStorage.getItem('addressBookEntries'));
        if (storedEntries) {
            setEntries(storedEntries);
        }
    }, []); // empty dependency array ensures the effect runs only once on mount

    const handleSubmit = (event) => {
        event.preventDefault();
        // Create a new entry with timestamps
        const newEntry = {
            firstName,
            lastName,
            middleName,
            address,
            contact,
            email,
            createdAt: new Date().toISOString(), // Add createdAt timestamp
            modifiedAt: new Date().toISOString() // Add modifiedAt timestamp
        };
        // Append the new entry to the existing entries array
        const updatedEntries = [...entries, newEntry];
        // Save the updated entries array to localStorage
        localStorage.setItem('addressBookEntries', JSON.stringify(updatedEntries));
        // Update the state with the new entries
        setEntries(updatedEntries);
        // Clear the form fields
        setFirstName('');
        setLastName('');
        setMiddleName('');
        setAddress('');
        setContact('');
        setEmail('');
    };

    return (
        <div>
            <h1>Address Book Form</h1>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First Name </label>
                    <input type="text" id="firstname" className="fname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <label htmlFor="lastname"> Last Name </label>
                    <input type="text" id="lastname" className="lname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <label htmlFor="middlename"> Middle Name </label>
                    <input type="text" id="middlename" className="mname" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                    <label htmlFor="address"> Address </label>
                    <input type="text" className="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <label htmlFor="contact"> Contact </label>
                    <input type="number" className="" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} />
                    <label htmlFor="email"> Email </label>
                    <input type="email" className="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type="submit" id='adddata' className="btn btn-primary"> Add </button>
                </form>
            </div>
        </div>
    );
};

export default Addressbookform;
