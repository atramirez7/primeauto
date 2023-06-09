import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ModelForm ({ getModels, manufacturers }) {

    const navigate = useNavigate()
    const [vehicle, setVehicle] = useState([])
    const [name, setName] = useState('')
    const [picture, setPicture] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const [create, setCreate] = useState(false)


    function handleNameChange (e) {
        const value = e.target.value;
        setName(value)
    }

    function handlePictureChange (e) {
        const value = e.target.value;
        setPicture(value)
    }

    function handleManuChange (e) {
        const value = e.target.value;
        setManufacturer(value)
    }

    async function handleSubmit (e) {
        e.preventDefault()
        const data = {}
        data.name = name
        data.picture_url = picture
        data.manufacturer_id = manufacturer

        const vehicleUrl = 'http://localhost:8100/api/models/'
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
        };

        const response = await fetch(vehicleUrl, fetchConfig);
        if (response.ok) {
        const newVehicle = await response.json();
        getModels()
        setName('')
        setPicture('')
        setManufacturer('')
        setCreate(true)

        }
    }

    let messageClasses = 'alert alert-success d-none mb-0';
    if (create) {
      messageClasses = 'alert alert-success mb-0';
    }


    return(
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new Vehicle</h1>
            <form onSubmit={handleSubmit} id="create-vehicle-form">
            <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} placeholder="name" required type="text" id="name" name="name" className="form-control" />
                <label htmlFor="name">Vehicle Name</label>
              </div>
              <div className="mb-3">
                <input onChange={handlePictureChange} value={picture} placeholder="Picture Url" type="url" id="picture_url" name="picture_url" className="form-control" />
                <label htmlFor="picture_url">Picture Url</label>
              </div>
              <div className="mb-3">
                <select onChange={handleManuChange} value={manufacturer} name="manufacturer" id="manufacturer" className="form-select" required>
                  <option value="">Choose a Manufacturer</option>
                    {manufacturers.map(manufacturer => {
                        return(
                            <option key={manufacturer.id} value={manufacturer.id}>
                                {manufacturer.name}
                            </option>
                        )
                    })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
            <div className={messageClasses} id="success-message">
                Your model has been created!
              </div>
          </div>
        </div>
      </div>
    )
}


export default ModelForm
