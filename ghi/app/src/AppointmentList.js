
function AppointmentList ({ appointments }) {
  return (
    <>
    <h1>Service Appointments</h1>
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
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {appointments.map(appointment => {
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
              <td>
                <button type="button" className="btn btn-success">Finish</button>
                <button type="button" className="btn btn-danger">Cancel</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
)
}


export default AppointmentList
