

function ModelList ({ models, getModels }) {

    return(
        <table className="table table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture Url</th>
            <th>Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          {models.map(model => {
            return (
            <tr key={model.id}>
              <td>{model.name}</td>
              <td>{model.manufacturer.name}</td>
              <td>{model.picture_url}</td>
            </tr>
            );
          })}
        </tbody>
      </table>


    )

}


export default ModelList
