
function SalesList({ sales }) {

    return(
        <table className="table table-dark">
        <thead>
          <tr>
            <th>Salesperson ID</th>
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
              <td>{sale.salesperson.employee_id}</td>
              <td>{sale.salesperson.first_name + " " + sale.salesperson.last_name}</td>
              <td>{sale.customer.first_name + " " + sale.customer.last_name}</td>
              <td>{sale.automobile.vin}</td>
              <td>{"$" + sale.price}</td>
            </tr>
            );
          })}
        </tbody>
      </table>


    )

}

export default SalesList
