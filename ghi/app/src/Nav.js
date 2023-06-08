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
          <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Vehicles
                  </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/models">Vehicles</NavLink>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/models/new">Create a Vehicle</NavLink>
                </li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Manufacturers
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/manufacturers">Manufacturers</NavLink>
                <li >
                <NavLink className="dropdown-item" to="/manufacturers/new">Create a Manufacturer</NavLink>
                </li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Automobiles
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/automobiles">Automobiles</NavLink>
                <li >
                  <NavLink className="dropdown-item" to="/automobiles/new">Create a Automobile</NavLink>
                </li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Technicians
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/technicians">Technicians</NavLink>

                <li >
                  <NavLink className="dropdown-item" to="/technicians/new">Add a Technician</NavLink>
                </li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Service Appointments
                    </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/appointments">Service Appointments</NavLink>
                </li>
                <li >
                  <NavLink className="dropdown-item" to="/appointments/new">Create a Service Appointment</NavLink>
                </li>
                <li >
                  <NavLink className="dropdown-item" to="/appointments/history">Service History</NavLink>
                </li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Salespersons
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/salespersons">Salespersons</NavLink>
                <li >
                  <NavLink className="dropdown-item" to="/salespersons/new">Create a Salesperson</NavLink>
                </li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Customers
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/customers">Customers</NavLink>

                <li >
                <NavLink className="dropdown-item" to="/customers/new">Customer Registration</NavLink>
                </li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/sales">List of Sales</NavLink>

                <li >
                <NavLink className="dropdown-item" to="/sales/new">Record Sale</NavLink>
                </li>
                <li >
                <NavLink className="dropdown-item" to="/sales/history">Sales History</NavLink>
                </li>
                </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
