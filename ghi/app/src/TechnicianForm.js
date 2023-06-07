import React, { useState } from 'react';

function TechnicianForm({ getTechnicians }){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [employeeId, setEmployeeId] = useState("");

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
    }

    const handleEmployeeIdChange = (event) => {
        const value = event.target.value;
        setEmployeeId(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formdata = {};
        formdata.first_name = firstName;
        formdata.last_name = lastName;
        formdata.employee_id = employeeId;

        const technicianUrl = 'http://localhost:8080/api/technicians/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
            const newManufacturer = await response.json();
            getTechnicians()
            setFirstName('');
            setLastName('');
            setEmployeeId('');
        }
    }

    return (
        <form onSubmit={handleSubmit} id="add-manufacturers-form">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a technician</h1>
                        <div className="form-floating mb-3">
                            <input onChange={handleFirstNameChange} value={firstName} placeholder="First name" required type="text" name="first_name" id="first_name" className="form-control" />
                            <label htmlFor="first_name">First name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleLastNameChange} value={lastName} placeholder="Last name" required type="text" name="last_name" id="last_name" className="form-control" />
                            <label htmlFor="last_name">Last name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleEmployeeIdChange} value={employeeId} placeholder="Employeee ID" required type="text" name="employee_id" id="employee_id" className="form-control" />
                            <label htmlFor="employee_id">Employee ID</label>
                        </div>
                        <div className='text-center'>
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )

}

export default TechnicianForm
