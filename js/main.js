/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Step One ///////////////////////////////////////////////////////////
//
// Gather data from the user using the prompt() command.
// Users will fill in each prompt with text.
// Provide examples where it may help (e.g. show a comma-separated list of
// toppings to indicate how to specify toppings, etc.)
//
// Bread prompt

let bread = prompt("What kind of bread do you want? (white, wheat, sour)","white");

// Meat/s prompt

let meats = prompt("What kind of meat(s) do you want? You may select more than one by separating with comma, for example: chicken, bacon, beef","chicken");

// Topping/s prompt

let toppings = prompt("Enter comma separated list of toppings (such as tomato, lettuce, onions):","lettuce, tomato, avocado");

// Condiment/s prompt

let condiments = prompt("Enter comma separated list of condiments (such as mayo, ketchup, mustard):", "mayo");

// Step Two ////////////////////////////////////////////////////////////
//
// Process all the input to calculate values for the user's order. The named
// values are initialized to `null`. Change that so they equal the proper value.
//
// The `prices` object below specifies the prices for each thing.

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

// Menu item arrays

let meatArray = meats.split(',');
let toppingArray = toppings.split(',');
let condimentArray = condiments.split(',');

// Length of array * price = cost of menu item

let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

// Subtotal of all menu items
let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;

// Washington State tax rate of subtotal
let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

// Grand total (subtotal + tax)
let totalPrice = subtotal + orderTax;


// Step Three //////////////////////////////////////////////////////////
//
// Receipt output via user input

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${bread}</p>
    <p>Meat: ${meats}</p>
    <p>Toppings: ${toppings}</p>
    <p>Condiments: ${condiments}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
