## Description

Using NodeJS, create a standalone console-based Javascript program that lets the user reserve a car rental.
The user must be able to enter the type of vehicle, number of days of the rental, and whether they want a
child seat in the car. Based on this user input, the program should search for an available vehicle. If a
vehicle is available, then calculate and output a receipt for the rental.

<br> 

Specifically:

1. **Create a variable that stores a list of cars**. This list represents the cars owned by the car rental agency. 
* The list must contain **3 cars**. 
* Each car is an **object literal** with: 
  * `type` (string), <br>
  * `licensePlate` (string), <br>
  * `availability` (boolean). <br>

  Example car data (customizable):
  | Type | License Plate | Availability |
  | - | - | - |
  | SUV	| ABC 124	| false |
  | Sedan	| BXL 009 |	true |
  | SUV	| KML 155	| true |
  <br>
  
2. **Create these functions**:
* `findVehicle(carType)`:
  * Accepts a car type (e.g., "SUV", "Truck", "Sedan").
  * Loops through the car list to find an **available** car with a matching `type`.
  * Returns the **index** of the matching car in the array; returns `-1` if no match.
  * Search logic must work for any number of cars.

* `createReservation(reservationDetails)`:
  * Accepts a `reservationDetails` object (contains user’s rental info).
  * Uses `findVehicle()` to search for a matching car.
  * If no match: Output an error message.
  * If match: Calculate rental cost and print a receipt with:
    * A randomly generated reservation ID (use the uuid library, CommonJS syntax: https://github.com/uuidjs/uuid#quickstart).
    * Car type, license plate, subtotal, tax, and total.

**Cost Calculation Rules**: <br>
Total = (Rental Fee + Car Seat Fee) + Sales Tax (13%)

* **Rental Fee**:
  * Sedan: $10/day
  * SUV: $15/day
  * Other types: $20/day
  * Multiply by number of rental days.
* **Car Seat Fee**: If requested: $5/day (if rental days < 3) OR $2/day (if rental days ≥ 3). <br>

3. **Main Program Flow**: <br>
After defining the car list and functions:
* Display a welcome message.
* Use `prompt-sync` to ask the user for:
  * Car type,
  * Number of days,
  * Child seat (yes/no).
    * Create a `reservationDetails` object with the input.
    * Call `createReservation(reservationDetails)` to process the booking.

<br> 

## Format of JS file

The `index.js` file must follow this order:

```javascript
// imports from any required packages (prompt-sync, uuid, etc)  
// list of cars declaration  
// function declarations  
// main program code
```

<br> 

## Sample Output

### Example 1: Successful Reservation

```
--------------------------------------  
Welcome to David's Car Rentals  
--------------------------------------  
What type of car do you want to rent? SUV  
How many days? (min 1): 3  
Do you need a car seat? (y/n): y  

--------------------------------------  
RECEIPT  
--------------------------------------  
Reservation Number: 042ddaa1-5ff5-439f-a153-eb82c0ad7ad8  
Car Type: SUV  
License Plate: KML 155  
Subtotal: $51.00  
Tax: $6.63  
Total: $57.63
```

<br> 

### Example 2: Unsuccessful Reservation

```
--------------------------------------  
Welcome to David's Car Rentals  
--------------------------------------  
What type of car do you want to rent? Truck  
How many days? (min 1): 2  
Do you need a car seat? (y/n): n  

A matching vehicle cannot be found
```


