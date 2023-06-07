import React, { useState } from "react";

function AppoinmentHistory ({ appointments }) {
  const [search, setSearch] = useState("");
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchResults = appointments.filter((appointment) =>
    appointment.vin.includes(search)
    );
    setFilteredAppointments(searchResults);
  };

  return (
        <>
        <div>
        <h1>Service History</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <input
            type="text"
            className="form-control"
            placeholder="Search by VIN"
            value={search}
            onChange={handleSearch} />
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
        </form>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Is VIP?</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map(appointment => {
              const date = new Date(appointment.date_time);
              const formattedDate = date.toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "2-digit"
              });
              const formattedTime = date.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
              });
              return (
                <tr key={ appointment.id }>
                  <td>{ appointment.vin }</td>
                  <td>{ appointment.vip ? 'Yes' : 'No' }</td>
                  <td>{ appointment.customer }</td>
                  <td>{ formattedDate }</td>
                  <td>{ formattedTime }</td>
                  <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                  <td>{ appointment.reason }</td>
                  <td>{ appointment.status }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </>
    )

}


export default AppoinmentHistory
