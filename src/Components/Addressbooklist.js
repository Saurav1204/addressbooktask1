import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./modalcs.css";



const Addressbooklist = () => {
    const [addressBookEntries, setAddressBookEntries] = useState([]);
    const [editIndex, setEditIndex] = useState(null);


    useEffect(() => {
        // Retrieve data from localStorage
        const storedEntries = JSON.parse(localStorage.getItem('addressBookEntries'));
        if (storedEntries) {
            setAddressBookEntries(storedEntries);
        }
    }, []);

    const handleDelete = (index) => {
        // Handle delete action here
        console.log(`Delete entry at index ${index}`);
        // Remove the entry from state and localStorage
        const updatedEntries = [...addressBookEntries];
        updatedEntries.splice(index, 1);
        setAddressBookEntries(updatedEntries);
        localStorage.setItem('addressBookEntries', JSON.stringify(updatedEntries));
    };
    const modal = document.getElementById("myModal");

    const openEdit = (index) => {
        setEditIndex(index);
        const entry = addressBookEntries[index];
        const firstNameInput = document.getElementById("firstname");
        const lastNameInput = document.getElementById("lastname");
        const middleNameInput = document.getElementById("middlename");
        const addressInput = document.getElementById("address");
        const contactInput = document.getElementById("contact");
        const emailInput = document.getElementById("email");

        // Populate the form fields with entry data
        firstNameInput.value = entry.firstName;
        lastNameInput.value = entry.lastName;
        middleNameInput.value = entry.middleName;
        addressInput.value = entry.address;
        contactInput.value = entry.contact;
        emailInput.value = entry.email;

        // Display the modal
        modal.style.display = "block";


        // Handle form submission
        const form = document.getElementById("editForm");
        form.onsubmit = (event) => {
            event.preventDefault();
            const updatedEntry = {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                middleName: middleNameInput.value,
                address: addressInput.value,
                contact: contactInput.value,
                email: emailInput.value,
                createdAt: entry.createdAt, // Keep the original createdAt value
                modifiedAt: new Date().toLocaleString() // Update modifiedAt value
            };
            const updatedEntries = [...addressBookEntries];
            updatedEntries[index] = updatedEntry;
            setAddressBookEntries(updatedEntries);
            localStorage.setItem('addressBookEntries', JSON.stringify(updatedEntries));

            // Close the modal
            modal.style.display = "none";

            
        };

    };
   
    const handleCloseModal = () => {
        modal.style.display = "none";

    };
    
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

    return (
        <div style={{
            textAlign: "center",
            display: "block",
            padding: 30,
            margin: "auto",
        }}>
            <h1>Address Book List</h1>
            <div className='tablecontainer'>
                <table id="contactDetailsTable">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Middle Name</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>CreateAt</th>
                            <th>ModifyAt</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {addressBookEntries.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.firstName}</td>
                                <td>{entry.lastName}</td>
                                <td>{entry.middleName}</td>
                                <td>{entry.address}</td>
                                <td>{entry.contact}</td>
                                <td>{entry.email}</td>
                                <td>{entry.createdAt}</td>
                                <td>{entry.modifiedAt}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" id="myBtn" onClick={() => openEdit(index)}>Edit</button>
                                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>

                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <h3 className='modalhead'>Update Form</h3>
                    </div>
                    <form id='editForm'>
                        <label htmlFor="firstname">First Name </label>
                        <input type="text" id="firstname" className="fname" />
                        <label htmlFor="lastname"> Last Name </label>
                        <input type="text" id="lastname" className="lname" />
                        <label htmlFor="middlename"> Middle Name </label>
                        <input type="text" id="middlename" className="mname" />
                        <label htmlFor="address"> Address </label>
                        <input type="text" className="address" id="address" />
                        <label htmlFor="contact"> Contact </label>
                        <input type="number" className="" id="contact" />
                        <label htmlFor="email"> Email </label>
                        <input type="email" className="email" id="email" />
                        <button type="submit" id='adddata' className="btn btn-primary"> Edit </button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Addressbooklist;





