'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
Prototypal inheritance
- add functions to a prototype
- JS is a prototype based lang ( versus others : class-based ) 
= Prototypal inheritance : for objects and for methods

Both a function and a prototype
Inheritance: constructors & prototypes

https://www.tutorialspoint.com/how-inheritance-works-in-constructor-functions-in-javascript

*/
function Activity(amount) {
    this.amount = amount
}

// Add method to prototype
Activity.prototype.setAmount = function(value){
    if(value <= 0) {
        return false
    } else {
        this.amount = value
        return true
    }
}
    
Activity.prototype.getAmount = function() {
    return this.amount        
}

// Constructor functions define prototype of properties obj contains
// Use the .call() func in diff context
function Payment(amount, receiver) {
    // Constructor call also not needed with explicit prototyping set
    this.amount = amount    // no super here
    this.receiver = receiver
}
 
// Set prototype of child constructor function   
// https://www.tutorialspoint.com/In-JavaScript-inheritance-how-to-differentiate-Object-create-vs-new
// Inherit just the prototype of base class
// `new` keyword : exec constructor function
Payment.prototype = Object.create(Activity.prototype)

Payment.prototype.setReceiver = function(receipt){
    this.receiver = receipt
}
    
Payment.prototype.getReceiver = function(){
    return this.receiver
}

function Refund(amount, sender) {
    this.amount = amount
    this.sender = sender
}

// Set prototype of child constructor function   
Refund.prototype = Object.create(Activity.prototype)

Refund.prototype.setSender = function(send){
    this.sender = send
}
    
Refund.prototype.getSender = function(){
    return this.sender
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const objectType = readLine().trim();
    
    const inputsForObjectCreation = readLine().trim().split(' ');
    const updatedAmount = parseInt(readLine().trim());
    const updatedSenderReceiver = readLine().trim();
    switch(objectType) {
        case 'Payment':
            const paymentObj = new Payment(parseInt(inputsForObjectCreation[0]), inputsForObjectCreation[1]);
            ws.write(`Payment object created with amount ${paymentObj.getAmount()} and receiver ${paymentObj.getReceiver()}\n`);
            if(paymentObj.setAmount(updatedAmount)) {
                ws.write(`Amount updated to ${updatedAmount}\n`);
            } else {
                ws.write(`Amount not updated\n`);
            }
            paymentObj.setReceiver(updatedSenderReceiver);
            ws.write(`Receiver updated to ${updatedSenderReceiver}\n`);
            ws.write(`Payment object details - amount is ${paymentObj.getAmount()} and receiver is ${paymentObj.getReceiver()}\n`);
            ws.write(`Payment.prototype has property setAmount: ${Payment.prototype.hasOwnProperty('setAmount')}\n`);
            ws.write(`Payment.prototype has property getAmount: ${Payment.prototype.hasOwnProperty('getAmount')}\n`);
            ws.write(`Payment.prototype has property setReceiver: ${Payment.prototype.hasOwnProperty('setReceiver')}\n`);
            ws.write(`Payment.prototype has property getReceiver: ${Payment.prototype.hasOwnProperty('getReceiver')}\n`);
            break;
        case 'Refund':
            const refundObj = new Refund(parseInt(inputsForObjectCreation[0]), inputsForObjectCreation[1]);
            ws.write(`Refund object created with amount ${refundObj.getAmount()} and sender ${refundObj.getSender()}\n`);
            if(refundObj.setAmount(updatedAmount)) {
                ws.write(`Amount updated to ${updatedAmount}\n`);
            } else {
                ws.write(`Amount not updated\n`);
            }
            refundObj.setSender(updatedSenderReceiver);
            ws.write(`Sender updated to ${updatedSenderReceiver}\n`);
            ws.write(`Refund object details - amount is ${refundObj.getAmount()} and sender is ${refundObj.getSender()}\n`);
            ws.write(`Refund.prototype has property setAmount: ${Refund.prototype.hasOwnProperty('setAmount')}\n`);
            ws.write(`Refund.prototype has property getAmount: ${Refund.prototype.hasOwnProperty('getAmount')}\n`);
            ws.write(`Refund.prototype has property setSender: ${Refund.prototype.hasOwnProperty('setSender')}\n`);
            ws.write(`Refund.prototype has property getSender: ${Refund.prototype.hasOwnProperty('getSender')}\n`);
            break;
        default:
            break;
    }
}
