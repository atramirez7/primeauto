import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <NavLink className="nav-link active" to="/models">Vehicles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/models/new">Create a Vehicle</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/manufacturers">Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/manufacturers/new">Create a Manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/automobiles">Automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/automobiles/new">Create a Automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/technicians">Technicians</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/technicians/new">Add a Technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/appointments">Service Appointments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/appointments/new">Create a Service Appointment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/appointments/history">Service History</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/salespersons">Salespersons</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/salespersons/new">Create a Salesperson</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/customers">Customers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/customers/new">Customer Registration</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/sales">List of Sales</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/sales/new">Record Sale</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
