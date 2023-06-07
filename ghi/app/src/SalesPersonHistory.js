import React, { useEffect, useState } from 'react'


function SalespersonHistory ({ sales, salespersons, getSalespersons, getSales }) {

    const [salesperson, setSalesperson] = useState('')

    useEffect(() => {
    getSalespersons()
    getSales()
    }, [])

    async function handleSalespersonChange (e) {
        const value = e.target.value
        setSalesperson(value)
    }

    return (
        <div>
            <h1>Salesperson History</h1>
        <div className="mb-3">
        <select onChange={handleSalespersonChange} value={salesperson} name="salesperson" id="salesperson" className="form-select" required>
          <option value="">Choose a Salesperson</option>
            {salespersons.map(salesperson => {
                return(
                    <option key={salesperson.employee_id} value={salesperson.employee_id}>
                        {salesperson.first_name + " " + salesperson.last_name}
                    </option>
                )
            })}
        </select>
      </div>
        <table className="table table-dark">
        <thead>
          <tr>
            <th>Salesperson</th>
            <th>Customer</th>
            <th>Vin</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales.filter(sale => sale.salesperson.employee_id === salesperson)
          .map(sale => {
            return (
            <tr key={sale.id}>
              <td>{sale.salesperson.first_name + " " + sale.salesperson.last_name}</td>
              <td>{sale.customer.first_name + " " + sale.customer.last_name}</td>
              <td>{sale.automobile.vin}</td>
              <td>{"$" + sale.price}</td>
            </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    )
}


export default SalespersonHistory
