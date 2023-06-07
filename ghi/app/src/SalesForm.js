import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SalesForm({ getAutomobiles, salespersons, customers, getSales }) {

    const [automobiles, setAutomobiles] = useState([])
    const [vin, setVin] = useState('')
    const [salesperson, setSalesperson] = useState('')
    const [customer, setCustomer] = useState('')
    const [price, setPrice] = useState('')


    async function filterAutomobiles(){
      const url = 'http://localhost:8100/api/automobiles/';
      const response = await fetch(url);
      if (response.ok){
        const data = await response.json();
        const unsold = data.autos.filter(auto => auto.sold === false)
        setAutomobiles(unsold)
      }
    }

    useEffect(() => {
      filterAutomobiles()
    },[])

    function handleVinChange (e) {
        const value = e.target.value;
        setVin(value)
    }

    function handleSalespersonChange (e) {
        const value = e.target.value;
        setSalesperson(value)
    }

    function handleCustomerChange (e) {
        const value = e.target.value;
        setCustomer(value)
    }

    function handlePriceChange (e) {
        const value = e.target.value;
        setPrice(value)
    }

    async function updateSoldStatus (vin) {
      const automobileUrl = 'http://localhost:8100/api/automobiles/' + vin + "/"
      const fetchConfig = {
        method: 'put',
        body: JSON.stringify({"sold": true}),
        headers: {
          "Content-Type": "application/json"
        },
      }
      const response = await fetch(automobileUrl, fetchConfig);
    }

    async function handleSubmit (e) {
    e.preventDefault()
    const data = {}
    data.automobile = vin
    data.salesperson_id = salesperson
    data.customer_id = customer
    data.price = price

    const saleUrl = 'http://localhost:8090/api/sales/'
    const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
        };


    const response = await fetch(saleUrl, fetchConfig);
    if (response.ok) {
    const newSale = await response.json();
    await updateSoldStatus(vin)
    getAutomobiles()
    getSales()
    setSalesperson('')
    setCustomer('')
    setPrice('')

    }
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Record a Sale</h1>
            <form onSubmit={handleSubmit} id="create-sale-form">
              <div className="form-floating mb-3">
                <select onChange={handleVinChange} name="automobiles" id="automobiles" className="form-select" required>
                  <option value="">Choose a Vin</option>
                    {automobiles.map(automobile => {
                        return(
                            <option key={automobile.vin} value={automobile.vin}>
                                {automobile.vin}
                            </option>
                        )
                    })}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={handleSalespersonChange} name="salespersons" id="salespersons" className="form-select" required>
                  <option value="">Choose a Salesperson</option>
                    {salespersons.map(salesperson => {
                        return(
                            <option key={salesperson.id} value={salesperson.id}>
                                {salesperson.first_name + " " + salesperson.last_name}
                            </option>
                        )
                    })}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={handleCustomerChange} name="customers" id="customers" className="form-select" required>
                  <option value="">Choose a Customer</option>
                    {customers.map(customer => {
                        return(
                            <option key={customer.id} value={customer.id}>
                                {customer.first_name + " " + customer.last_name}
                            </option>
                        )
                    })}
                </select>
              </div>
              <div className="mb-3">
                <input onChange={handlePriceChange} placeholder="$" type="number" id="price" name="price" className="form-control" />
                <label htmlFor="price">Price</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    )

}

export default SalesForm
