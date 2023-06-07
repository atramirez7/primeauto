import React from 'react'


function SalespersonHistory ({ sales }) {

    return (
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
          {sales.map(sale => {
            return (
            <tr key={sale.id}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            );
          })}
        </tbody>
      </table>
    )
}


export default SalespersonHistory
