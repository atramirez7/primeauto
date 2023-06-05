import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import React, {useState, useEffect} from 'react';


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
      setAutomobiles(data.automobiles);
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
            <Route index element={<ManufacturersList manufacturers={manufacturers} getManufacturers={getManufacturers}/>} />
            <Route path="new" element={<ManufacturerForm manufacturers={manufacturers} getManufacturers={getManufacturers}/>} />
          </Route>
          <Route path="models">
            <Route index element={<ModelList models={models} getModels={getModels}/>} />
            <Route path="new" element={<ModelForm models={models} getModels={getModels}/>} />
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList automobiles={automobiles} getAutomobiles={getAutomobiles}/>} />
            <Route path="new" element={<AutomobileList automobiles={automobiles} getAutomobiles={getAutomobiles}/>} />
          </Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
