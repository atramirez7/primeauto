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


function App() {
  const [ manufacturers, setManufacturers ] = useState([]);
  const [ models, setModels ] = useState([]);
  const [ automobiles, setAutomobiles ] = useState([]);

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

  useEffect(()=>{
    getManufacturers();
    getModels();
    getAutomobiles();
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
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
