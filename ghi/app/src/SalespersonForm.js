import React, { useState, useEffect } from 'react'


function SalespersonForm ({ salespersons, getSalespersons }) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [employeeId, setEmployeeId] = useState('')
    const [employed, setEmployed] = useState(false)

    function handleFirstNameChange (e) {
        const value = e.target.value;
        setFirstName(value)
    }

    function handleLastNameChange (e) {
        const value = e.target.value;
        setLastName(value)
    }

    function handleEmployeeIdChange (e) {
        const value = e.target.value;
        setEmployeeId(value)
    }

    async function handleSubmit (e) {
        e.preventDefault()
        const data = {}
        data.first_name = firstName
        data.last_name = lastName
        data.employee_id = employeeId

        const salespersonUrl = 'http://localhost:8090/api/salespeople/'
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        };

        const response = await fetch(salespersonUrl, fetchConfig)
        if (response.ok) {
        const newSalesperson = await response.json();
        getSalespersons()
        setFirstName('')
        setLastName('')
        setEmployeeId('')
        setEmployed(true)

        }
  }

  let messageClasses = 'alert alert-success d-none mb-0';
  if (employed) {
    messageClasses = 'alert alert-success mb-0';
  }



return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1>Salesperson Registration</h1>
        <form onSubmit={handleSubmit} id="create-salesperson-form">
        <div className="form-floating mb-3">
            <input onChange={handleFirstNameChange} value={firstName} placeholder="First Name" required type="text" id="first_name" name="first_name" className="form-control" />
            <label htmlFor="first_name">First Name</label>
          </div>
          <div className="mb-3">
            <input onChange={handleLastNameChange} value={lastName} placeholder="Last Name" required type="text" id="last_name" name="last_name" className="form-control" />
            <label htmlFor="last_name">Last Name</label>
          </div>
          <div className="mb-3">
            <input onChange={handleEmployeeIdChange} value={employeeId} placeholder="First Initial + Last name" type="text" id="employee_id" name="employee_id" className="form-control" />
            <label htmlFor="employee_id">Employee ID</label>
          </div>
          <button className="btn btn-primary">Create</button>
        </form>
        <div className={messageClasses} id="success-message">
                You're employed now!!
              </div>
      </div>
    </div>
  </div>
)
}

export default SalespersonForm
