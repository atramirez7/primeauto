import React, { useState, useEffect } from 'react';

function AppointmentForm( {getAppointments} ){
    const [vin, setVin] = useState("");
    const [customer, setCustomer,] = useState("");
    const [dateTime, setDateTime,] = useState("");
    const [technician, setTechnician,] = useState("");
    const [reason, setReason,] = useState("");
    const [technicians, setTechnicians,] = useState([]);

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const handleDateTimeChange = (event) => {
        const value = event.target.value;
        setDateTime(value);
    }

    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value);
    }

    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formdata = {};
        formdata.date_time = dateTime;
        formdata.reason = reason;
        formdata.vin = vin;
        formdata.customer = customer;
        formdata.technician_id = technician


        const appointmentUrl = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            const newAppointment = await response.json();
            getAppointments()
            setVin('');
            setReason('');
            setDateTime('');
            setCustomer('');
            setTechnician('');
        }
    }

    const fetchData = async () => {
        const url = 'http://localhost:8080/api/technicians/';
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setTechnicians(data.technicians)

            }
        }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <form onSubmit={handleSubmit} id="create-appointment-form">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a service appointment</h1>
                        <div className="form-floating mb-3">
                            <input onChange={handleVinChange} value={vin} placeholder="Automobile VIN" required type="text" name="vin" id="vin" className="form-control" />
                            <label htmlFor="vin">Automobile VIN</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleCustomerChange} value={customer} placeholder="Customer" required type="text" name="customer" id="customer" className="form-control" />
                            <label htmlFor="customer">Customer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleDateTimeChange} value={dateTime} placeholder="Date Time of Appointment" required type="datetime-local" name="datetime" id="datetime" className="form-control" />
                            <label htmlFor="datetime">Date Time of Appointment</label>
                        </div>

                        <div className="mb-3">
                            <select onChange={handleTechnicianChange} required name="technician" id="technician" className="form-select">
                            <option value="">Choose a technician</option>
                            {technicians.map(technician => {
                                        return (
                                            <option value={technician.id} key={technician.id}>
                                                {technician.first_name} {technician.last_name}
                                            </option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleReasonChange} value={reason} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
                            <label htmlFor="reason">Reason</label>
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

export default AppointmentForm
