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
git clone <<respository.url.here>>
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

### Service microservice

Service microservice is used to keep track of **Technicians** with their first name, last name, and employee id; **Service Appointment** that contains the details collected in the form: VIN, customer name, date and time of the appointment, the assigned technician's name, and the reason for the service.
It polls data from **Inventory** microservice to get VIN and sold status. When VIN provided for an appointment exists in VIN inventory, it has a special feature that

### Sales microservice

Explain your models and integration with the inventory
microservice, here.

Sales microservice keeps track of **Salespersons** personal info and a unique employee ID.Takes in **customer** info and stores them in a database for later use. The microservice can record a **Sale** takes information from **Salesperson** who sold the car and **customer** who purchased the car and puts them together in a convenient list.
It takes data from the **Inventory** microservice via polling service such as, manufacturers, vehicle model, and the unique automobile that can be sold.
