// Coding Challenge 2a
let productName="Sushi Roll"
let costPerUnit=12
let basePrice=20
let discountRate=0.10
let salesTaxRate=0.07
let fixedMonthlyCosts=5000

let discountedPrice = basePrice * (1 - discountRate)
let finalPriceWithTax= discountedPrice * (1 + salesTaxRate)
let profitPerUnit= finalPriceWithTax - costPerUnit
let breakEvenUnits= Math.ceil(fixedMonthlyCosts / profitPerUnit)
let isProfitablePerUnit= profitPerUnit > 0

console.log("Product Name:", productName)
console.log("Discounted Price Before Tax: $", discountedPrice.toFixed(2))
console.log("Final Price with Tax: $", finalPriceWithTax.toFixed(2))
console.log("Profit Per Unit: $", profitPerUnit.toFixed(2))
console.log("Break-Even Units:", breakEvenUnits)
console.log("Profitable Per Unit:", isProfitablePerUnit)

// Code goes here