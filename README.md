## Car Rental Reservation System
This is a console-based Node.js application that provides a complete car rental reservation system for David's Car Rentals. The program allows users to interactively search for and reserve vehicles based on their specific needs, including car type preferences, rental duration, and optional car seat requirements. Built with modern JavaScript practices using ES6+ syntax, the system manages a fleet of vehicles with real-time availability tracking, automatically calculates rental costs with tiered pricing for different vehicle types (Sedans at $10/day, SUVs at $15/day, and other vehicles at $20/day), applies dynamic car seat fees ($5/day for rentals under 3 days, $2/day for longer rentals), includes 13% sales tax calculations, and generates detailed receipts with unique reservation numbers using UUID generation. The application demonstrates core programming concepts including object manipulation, array searching algorithms, user input validation, and modular function design while providing an intuitive command-line interface for seamless customer interactions.

<br>

## Features

* **Interactive Console Interface**: User-friendly prompts for car type, rental duration, and car seat preferences
* **Real-time Vehicle Search**: Efficiently searches through available fleet inventory
* **Dynamic Pricing System**:
- Sedans: $10/day 
- SUVs: $15/day 
- Other vehicles: $20/day <br>

* **Car Seat Options**: Flexible pricing ($5/day for short rentals, $2/day for 3+ day rentals)
* **Automatic Tax Calculation**: 13% sales tax applied to all reservations
* **Unique Reservation IDs**: UUID-generated confirmation numbers
* **Detailed Receipts**: Complete breakdown of costs and vehicle information

## Prerequisites

* Node.js (version 12 or higher)
* npm (Node Package Manager)

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
```
npm install
```

## Usage
Run the application using:
```
npm start
```
or
```
node index.js
```

<br> 

Follow the on-screen prompts to:
1. Enter your preferred vehicle type
2. Specify the number of rental days
3. Choose whether you need a car seat
4. Receive your reservation confirmation or availability notice

<br> 

## Sample Output

```
Successful Reservation:
-------------------------------
Welcome to David's Car Rentals
-------------------------------
What type of car do you want to rent? SUV
How many days? (min 1): 3
Do you need a car seat? (y/n): y

-------------------
RECEIPT
-------------------
Reservation Number: 042ddaa1-5ff5-439f-a153-eb82c0ad7ad8
Car Type: SUV
License Plate: KML 155
Subtotal: $51.00
Tax: $6.63
Total: $57.63
```

<br> 

## Dependencies

* prompt-sync: ^4.2.0 - Handles user input in console applications
* uuid: ^9.0.0 - Generates unique reservation identifiers
