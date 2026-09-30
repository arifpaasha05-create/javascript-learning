let passengerName = prompt("Enter the Name: ")
let destination = prompt("Enter the Destination:")
let travelClass = Number(prompt(`Enter the class 
    1.Economy
    2.Business
    3.First Class`))
let seatPreferance = Number(prompt(`Enter the seat preferance
    1.Window
    2.Middle
    3.Aside`))
let age = Number(prompt("Enter the age:"))
let baggageWeight = Number(prompt("Enter the weight of the baggage:"))
let price;
let discount;
let extraChargers;
let bag;
let finalPrice;
switch (travelClass) {
    case 1:
        price = 5000;
        break;
    case 2:
        price = 10000;
        break;
    case 3:
        price = 20000;
        break;
    default:
        "invalid class";
        break;
}
switch (seatPreferance) {
    case 1:
        extraChargers = 500;
        break;
    case 2:
        extraChargers = 200;
        break;
    case 3:
        extraChargers = 0;
        break;
    default:
        "invalid seat";
        break;
}
if(age<5){
    discount=price*100/100;
}
else if(age>=5 && age<=17){
    discount=price*50/100;
}
else if(age>=18 && age <=59){
    discount=0;
}
else{
    discount=price*30/100;
}
if(baggageWeight<=15){
    bag=0;
}
else if(baggageWeight>=16 && baggageWeight<=25){
    bag=1000;
}
else{
    bag=2000;
}
extraChargers = extraChargers + bag;

finalPrice = price - discount + extraChargers;

document.getElementById("air").innerHTML =
    `<h1>Airline Ticket Booking</h1>
    Passenger Name: ${passengerName}<br>
    Destination: ${destination}<br>
    Ticket Price: ₹${price}<br>
    Discount: ₹${discount}<br>
    Extra Charges: ₹${extraChargers}<br>
    Final Ticket Price: ₹${finalPrice}`;