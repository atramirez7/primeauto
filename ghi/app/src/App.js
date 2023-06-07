import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import React, {useState, useEffect} from 'react';
import AutomobileForm from './AutomobileForm';
import AutomobileList from './AutomobileList';
import ManufacturerForm from './ManufacturerForm';
import ManufacturersList from './ManufacturerList';
import ModelForm from './ModelForm';
import ModelList from './ModelList';
import TechnicianList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import AppointmentHistory from './AppointmentHistory';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
import SalespersonForm from './SalespersonForm';
import SalespersonList from './SalespersonList';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import SalesList from './SalesList'
import SalesForm from './SalesForm'


function App() {
  const [ manufacturers, setManufacturers ] = useState([]);
  const [ models, setModels ] = useState([]);
  const [ automobiles, setAutomobiles ] = useState([]);
  const [ technicians, setTechnicians ] = useState([]);
  const [ sales, setSales ] = useState([]);
  const [ appointments, setAppointments ] = useState([]);
  const [ salespersons, setSalespersons ] = useState([])
  const [ customers, setCustomers] = useState([])

  async function getManufacturers(){
    const url = 'http://localhost:8100/api/manufacturers/';
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  }

  async function getModels(){
    const url = 'http://localhost:8100/api/models/';
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setModels(data.models);
    }
  }

  async function getAutomobiles(){
    const url = 'http://localhost:8100/api/automobiles/';
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setAutomobiles(data.autos);
    }
  }

  async function getTechnicians(){
    const url = 'http://localhost:8080/api/technicians/';
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setTechnicians(data.technicians)
    }
  }

  async function getAppointments(){
    const url = 'http://localhost:8080/api/appointments/';
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setAppointments(data.appointments);
    }
  }

  async function getSalespersons(){
    const url = 'http://localhost:8090/api/salespeople/'
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setSalespersons(data.salesperson)
    }
  }

  async function getCustomers() {
    const url = 'http://localhost:8090/api/customers/'
    const response = await fetch(url);
    if(response.ok){
      const data = await response.json();
      setCustomers(data.customer)
    }
  }

  async function getSales() {
    const url = '	http://localhost:8090/api/sales/'
    const response = await fetch(url);
    if(response.ok){
      const data = await response.json();
      setSales(data.sale)
    }
  }


  useEffect(()=>{
    getManufacturers();
    getModels();
    getAutomobiles();
    getTechnicians();
    getAppointments();
    getSalespersons();
    getCustomers();
    getSales();
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route index element={<ManufacturersList manufacturers={manufacturers}/>} />
            <Route path="new" element={<ManufacturerForm manufacturers={manufacturers} getManufacturers={getManufacturers}/>} />
          </Route>
          <Route path="models">
            <Route index element={<ModelList models={models} getModels={getModels}/>} />
            <Route path="new" element={<ModelForm models={models} getModels={getModels} manufacturers={manufacturers} getManufacturers={getManufacturers}/>} />
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList automobiles={automobiles}/>} />
            <Route path="new" element={<AutomobileForm automobiles={automobiles} getModels={getModels} getAutomobiles={getAutomobiles} />} />
          </Route>
          <Route path="technicians">
            <Route index element={<TechnicianList technicians={technicians}/>} />
            <Route path="new" element={<TechnicianForm technicians={technicians} getTechnicians={getTechnicians} />} />
          </Route>
          <Route path="appointments">
            <Route index element={<AppointmentList appointments={appointments}/>} />
            <Route path="new" element={<AppointmentForm appointments={appointments} getAppointments={getAppointments} />} />
            <Route path="history" element={<AppointmentHistory appointments={appointments} getAppointments={getAppointments} />} />
          </Route>
          <Route path="salespersons">
            <Route index element={<SalespersonList salespersons={salespersons} getSalespersons={getSalespersons} />} />
            <Route path="new" element={<SalespersonForm salespersons={salespersons} getSalespersons={getSalespersons} />} />
          </Route>
          <Route path="customers">
            <Route index element={<CustomerList customers={customers} getCustomers={getCustomers} /> } />
            <Route path="new" element={<CustomerForm customers={customers} getCustomers={getCustomers} />} />
          </Route>
          <Route path="sales">
            <Route index element={<SalesList sales={sales} getSales={getSales} />} />
            <Route path="new" element={<SalesForm sales={sales} getSales={getSales} /> } />
          </Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
