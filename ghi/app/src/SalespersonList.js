
function SalespersonList({ salespersons }) {

    return(
        <table className="table table-dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {salespersons.map(salesperson => {
            return (
            <tr key={salesperson.id}>
              <td>{salesperson.first_name}</td>
              <td>{salesperson.last_name}</td>
              <td>{salesperson.employee_id}</td>
            </tr>
            );
          })}
        </tbody>
      </table>


    )

}

export default SalespersonList
