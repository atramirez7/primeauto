import React, { useState } from 'react';

function ManufacturerForm({ getManufacturers }){

    const [name, setName] = useState("");

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formdata = {};
        formdata.name = name;

        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(manufacturerUrl, fetchConfig);
        if (response.ok) {
            const newManufacturer = await response.json();
            getManufacturers()
            setName('');
        }
    }

    return (
        <form onSubmit={handleSubmit} id="add-manufacturers-form">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new manufacturer</h1>
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={name} placeholder="Mamufacturer name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Manufacturer name</label>
                        </div>
                        <div className='text-center'>
                            <button className="btn btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ManufacturerForm
