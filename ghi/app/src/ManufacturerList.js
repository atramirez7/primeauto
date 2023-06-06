function ManufacturersList({manufacturers}){

    return (
        <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Manufacturer</th>
            </tr>
          </thead>
          <tbody>
            {manufacturers.map(manufacturer => {
              return (
                <tr key={ manufacturer.id }>
                  <td>{ manufacturer.name }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </>
    )
}
export default ManufacturersList;
