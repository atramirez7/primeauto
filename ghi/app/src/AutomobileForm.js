import React, { useEffect, useState } from 'react';

function AutomobileForm () {

    const [color, setColor] = useState("");
    const [year, setYear] = useState("");
    const [vin, setVin] = useState("");
    const [model, setModel] = useState("");
    const [models, setModels] = useState([]);

    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleModelChange = (event) => {
        const value = event.target.value;
        setModel(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formdata = {};

        formdata.color = color;
        formdata.vin = vin;
        formdata.year = year;
        formdata.model_id = model;
        console.log(formdata);


        const automobileUrl = 'http://localhost:8100/api/automobiles/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(formdata),
          headers: {
            'Content-Type': 'application/json',
          }
        }

        const response = await fetch(automobileUrl, fetchConfig);
        console.log(response);
        if (response.ok) {
          const newAutomobiles = await response.json();
          console.log(newAutomobiles);

          setModel('');
          setColor('');
          setYear('');
          setVin('');
        }
    }

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/models/';
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setModels(data.models)

            }
        }
        useEffect(() => {
            fetchData();
          }, []);

    return (
        <form onSubmit={handleSubmit} id="add-automobiles-form">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add an automobile to inventory</h1>
                        <div className="form-floating mb-3">
                            <input onChange={handleColorChange} value={color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleYearChange} value={year} placeholder="Year" required type="text" name="year" id="year" className="form-control" />
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleVinChange} value={vin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                            <label htmlFor="vin">VIN</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleModelChange} required name="model" id="model" className="form-select">
                            <option value="">Choose a model</option>
                            {models.map(model => {
                                        return (
                                            <option value={model.id} key={model.id}>
                                                {model.name}
                                            </option>
                                        )
                                    })}
                            </select>
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
