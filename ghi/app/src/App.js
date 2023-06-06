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


function App() {
  const [ manufacturers, setManufacturers ] = useState([]);
  const [ models, setModels ] = useState([]);
  const [ automobiles, setAutomobiles ] = useState([]);
  const [ technicians, setTechnicians ] = useState([]);
  const [ appointments, setAppointments ] = useState([]);

  async function getManufacturers(){
    const url = 'http://localhost:8100/api/manufacturers/';
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setManufacturers(data.manufacturers);
      console.log(data)
    }
  }

  async function getModels(){
    const url = 'http://localhost:8100/api/models/';
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setModels(data.models);
      console.log(data)
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
      setTechnicians(data.technicians);
    }
  }

  async function getAppointments(){
    const url = 'http://localhost:8080/api/appoinments/';
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setAppointments(data.appoinments);
    }
  }


  useEffect(()=>{
    getManufacturers();
    getModels();
    getAutomobiles();
    getTechnicians();
    getAppointments();
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
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
