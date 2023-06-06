import React, { useEffect, useState } from 'react';

function AutomobileForm ({ getModels }) {

    const [color, setColor] = useState("");
    const [year, setYear] = useState("");
    const [vin, setVin] = useState("");
    const [model, setModel] = useState("");
    const [model, setModels] = useState("");

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
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

export default AutomobileForm
