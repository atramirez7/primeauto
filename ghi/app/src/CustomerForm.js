import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CustomerForm ({ getCustomers }) {

    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')

    function handleFirstNameChange (e) {
        const value = e.target.value;
        setFirstName(value)
    }

    function handleLastNameChange (e) {
        const value = e.target.value;
        setLastName(value)
    }

    function handlePhoneNumberChange (e) {
        const value = e.target.value;
        setPhoneNumber(value)
    }

    function handleAddressChange (e) {
        const value = e.target.value;
        setAddress(value)
    }

    async function handleSubmit (e) {
        e.preventDefault()
        const data = {}
        data.first_name = firstName
        data.last_name = lastName
        data.phone_number = phoneNumber
        data.address = address

        const customerUrl = 'http://localhost:8090/api/customers/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
        },
        };
        const response = await fetch(customerUrl, fetchConfig);
        if (response.ok) {
        const newCustomer = await response.json();
        getCustomers()
        setFirstName('')
        setLastName('')
        setPhoneNumber('')
        setAddress('')

        }
        navigate("/customers")
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Customer Registration</h1>
            <form onSubmit={handleSubmit} id="create-customer-form">
            <div className="form-floating mb-3">
                <input onChange={handleFirstNameChange} placeholder="First Name" value={firstName} required type="text" id="first_name" name="first_name" className="form-control" />
                <label htmlFor="name">First Name</label>
              </div>
              <div className="mb-3">
                <input onChange={handleLastNameChange} placeholder="Last Name" value={lastName} required type="text" id="last_name" name="last_name" className="form-control" />
                <label htmlFor="last_name">Last Name</label>
              </div>
              <div className="mb-3">
                <input onChange={handlePhoneNumberChange} placeholder="Phone Number" value={phoneNumber} required type="tel" id="phone_number" name="phone_number" className="form-control" />
                <label htmlFor="phone_number">Phone Number</label>
              </div>
              <div className="mb-3">
                <input onChange={handleAddressChange} placeholder="Address" value={address} required type="text" id="address" name="address" className="form-control" />
                <label htmlFor="address">Address</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    )
}


export default CustomerForm
