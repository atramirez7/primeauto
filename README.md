# CarCar

Team:

* **Dream Ramirez** - Automobile Service
* **Alvin Liang** - Automobile Sales

## How to Run this App
​
**Make sure you have Docker, Git, and Node.js 18.2 or above**
​
1. Fork this repository
​
2. Clone the forked repository onto your local computer:
git clone <<https://gitlab.com/atramirez7/project-beta/-/tree/main>>
​
3. Build and run the project using Docker with these commands:
```
docker volume create beta-data
docker-compose build
docker-compose up
```
- After running these commands, make sure all of your Docker containers are running
​
- View the project in the browser: http://localhost:3000/

## Diagram
CarCar is made up of 3 microservices which interact with one another.

- **Inventory**
- **Service**
- **Sales**
​
![Img](Diagram.png)

## API Documentation

# Service microservice

Service microservice is used to keep track of **Technicians** with their first name, last name, and employee id; **Service Appointment** that contains the details collected in the form: VIN, customer name, date and time of the appointment, the assigned technician's name, and the reason for the service.
It polls data from **Inventory** microservice to get VIN and sold status. When VIN provided for an appointment exists in VIN inventory, it has a special feature that

# Sales microservice

Sales microservice keeps track of **Salespersons** personal info and a unique employee ID. Takes in **customer** info and stores them in a database for later use. The microservice can record a **Sale** takes information from **Salesperson** who sold the car and **customer** who purchased the car and puts them together in a convenient list.
It takes data from the **Inventory** microservice via polling service such as, manufacturers, vehicle model, and the unique automobile that can be sold.

## Endpoints to send and view data - through Insomnia

### Customer

| Action | Request | URL
| ----------- | ----------- | ----------- |
| List Customers | GET | http://localhost:8090/api/customers/
| Customer Detail | GET | http://localhost:8090/api/customers/**id**/
| Create Customer | POST | http://localhost:8090/api/customers/
| Delete Customer | DELETE | http://localhost:8090/api/customers/**id**/


Creating a customer
- Example **JSON body** to create a customer

```
{
	"first_name": "Alvin",
	"last_name": "blah",
	"phone_number": "13279567",
	"address": "163 Alvin Blvd. San Francisco, CA"
}
```

Expected return value

```
{
	"first_name": "Alvin",
	"last_name": "blah",
	"phone_number": "13279567",
	"id": 4
}
```


List all customers expected return value

```
{
	"customer": [
		{
			"first_name": "Alvin",
			"last_name": "blah",
			"address": "163 Alvin Blvd. San Francisco, CA",
			"phone_number": 13279567,
			"id": 4
		}
    ]
}
```


### Salesperson

| Action | Request | URL
| ----------- | ----------- | ----------- |
| List Salespersons | GET | http://localhost:8090/api/salespeople/
| Salesperson Detail | GET | http://localhost:8090/api/salespeople/**id**/
| Create Salesperson | POST | http://localhost:8090/api/salespeople/
| Delete Salesperson | DELETE | http://localhost:8090/api/salespeople/**id**/


Creating a salesperson
- Example **JSON body** to create a salesperson
- You cannot create to employees with the same **employee_id** it is a unique field.

```
{
	"first_name": "Matt",
	"last_name": "Burger",
	"employee_id": "MBurger"
}
```

Expected return value

```
{
	"first_name": "Matt",
	"last_name": "Burger",
	"employee_id": "MBurger",
	"id": 10
}
```

List all salespersons expected return value

```
{
	"salesperson": [
        {
            "first_name": "Matt",
            "last_name": "Burger",
            "employee_id": "MBurger",
            "id": 10
        }
    ]
}
```


### Sale

| Action | Request | URL
| ----------- | ----------- | ----------- |
| List Sale | GET | http://localhost:8090/api/sales/
| Sale Detail | GET | http://localhost:8090/api/sales/**id**/
| Create Sale | POST | http://localhost:8090/api/sales/
| Delete Sale | DELETE | http://localhost:8090/api/sales/**id**/

Create a sale
- Example **JSON body** to create a sale
- Note the sold status is still False even after sale on Insomnia in the BackEnd. If sale made through FrontEnd it will update status that way.
```
{
	"price": 50000,
	"salesperson_id": 5,
	"customer_id": 4,
	"automobile": "1FTRW08L13KB17454"
}
```
Expected return value
```
{
	"price": 50000,
	"id": 43,
	"automobile": {
		"vin": "1FTRW08L13KB17454",
		"sold": false,
		"id": 21
	},
	"salesperson": {
		"first_name": "Chris",
		"last_name": "Blue",
		"employee_id": "CBlue",
		"id": 5
	},
	"customer": {
		"first_name": "Alvin",
		"last_name": "blah",
		"address": "163 Alvin Blvd. San Francisco, CA",
		"phone_number": 13279567,
		"id": 4
	}
}
```

List all sales expected return
```
{
	"sale": [
            "price": 32000,
            "id": 42,
            "automobile": {
				"vin": "JH4DC4460SS000830",
				"sold": true,
				"id": 20
			},
            "salesperson": {
				"first_name": "Jasper",
				"last_name": "Field",
				"employee_id": "JField",
				"id": 6
			},
			"customer": {
				"first_name": "Alex",
				"last_name": "Matt",
				"address": "Blah St.",
				"phone_number": 91103211,
				"id": 8
            }
        {
			"price": 50000,
			"id": 43,
			"automobile": {
				"vin": "1FTRW08L13KB17454",
				"sold": false,
				"id": 21
			},
			"salesperson": {
				"first_name": "Chris",
				"last_name": "Blue",
				"employee_id": "CBlue",
				"id": 5
			},
			"customer": {
				"first_name": "Alvin",
				"last_name": "blah",
				"address": "163 Alvin Blvd. San Francisco, CA",
				"phone_number": 13279567,
				"id": 4
            }
        }
        ]
}
```

# Inventory

### Manufacturers

| Action | Request | URL
| ----------- | ----------- | ----------- |
| List manufacturers | GET | http://localhost:8100/api/manufacturers/
| Create a manufacturer | POST | http://localhost:8100/api/manufacturers/
| Manufacturer Detail | GET | http://localhost:8100/api/manufacturers/**id**/
| Update a manufacturer | PUT | http://localhost:8100/api/manufacturers/**id**/
| Delete a manufacturer | DELETE | http://localhost:8100/api/manufacturers/**id**/

Create a manufacturer
- Example **JSON body** to create a manufacturer
-You cannot create manufacters with the same **name** it is a unique field.

```
{
  "name": "Tesla"
}
```

Expected return value

```
{
	"href": "/api/manufacturers/1/",
	"id": 1,
	"name": "Tesla"
}
```
List manufacturers expected return value

```
{
	"manufacturers": [
		{
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Tesla"
		},
    ]
}
```

### Vehicles

| Action | Request | URL
| ----------- | ----------- | ----------- |
| List vehicle models | GET | http://localhost:8100/api/models/
| Create a vehicle model | POST | http://localhost:8100/api/models/
| Vehicle model detail | GET | http://localhost:8100/api/models/**id**/
| Update a vehicle model | PUT | http://localhost:8100/api/models/**id**/
| Delete a vehicle model | DELETE | http://localhost:8100/api/models/**id**/
