const prompt = require('prompt-sync')()
const { v4: uuidv4 } = require('uuid')

const carList = [
  { carName: 'SUV', licensePlate: 'ABC 124', availability: false },
  { carName: 'Sedan', licensePlate: 'BXL 009', availability: true },
  { carName: 'SUV', licensePlate: 'KML 155', availability: true },
]

const findVehicle = (carType) => {
  for (let i = 0; i < carList.length; i++) {
    if (carType === carList[i].carName && carList[i].availability) {
      return i
    }
  }

  return -1
}

const createReservation = (reservationDetails) => {
  let index = findVehicle(reservationDetails.carName)

  if (index === -1) {
    console.log('\nA matching vehicle cannot be found')
  } else {
    console.log('\n-------------------')
    console.log('RECEIPT')
    console.log('-------------------')
    console.log(`Reservation Number: ${reservationDetails.resNumber}`)

    const car = carList[index]

    console.log(`Car Type: ${car.carName}`)
    console.log(`License Plate: ${car.licensePlate}`)

    let dailyRate = 0
    let carSeatFee = 0
    let rentalFee = 0
    let subTotal = 0
    let tax = 0
    let total = 0
    const TAX_RATE = 0.13

    switch (car.carName) {
      case 'SUV':
        dailyRate = 15
        break

      case 'Sedan':
        dailyRate = 10
        break

      default:
        dailyRate = 20
        break
    }

    rentalFee = dailyRate * parseInt(reservationDetails.daysRequested)

    if (reservationDetails.carSeatRequested === 'y') {
      if (reservationDetails.daysRequested < 3) {
        carSeatFee = 5 * reservationDetails.daysRequested
      } else {
        carSeatFee = 2 * reservationDetails.daysRequested
      }
    }

    subTotal = rentalFee + carSeatFee
    tax = subTotal * TAX_RATE
    total = subTotal + tax

    console.log(`Subtotal: $${subTotal.toFixed(2)}`)
    console.log(`Tax: $${tax.toFixed(2)}`)
    console.log(`Total: $${total.toFixed(2)}`)
  }
}

console.log('-------------------------------')
console.log("Welcome to David's Car Rentals")
console.log('-------------------------------')

const carNameInput = prompt('What type of car do you want to rent? ')
const daysInput = prompt('How many days? (min 1): ')
const seatNeededInput = prompt('Do you need a car seat? (y/n): ')

const reservationDetails = {
  resNumber: uuidv4(),
  carName: carNameInput,
  daysRequested: daysInput,
  carSeatRequested: seatNeededInput,
}

createReservation(reservationDetails)
