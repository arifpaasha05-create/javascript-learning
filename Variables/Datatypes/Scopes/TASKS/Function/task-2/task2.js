// ================================================================
// SELF-INVOKING FUNCTION (IIFE) - Runs immediately upon loading
// ================================================================
(function () {
    console.log("Functions Assignment Initialized via IIFE!");
    document.getElementById("iifeBanner").innerText = "Restaurant Management & Billing System Loaded";
})();


// ================================================================
// TASK 1: Display a Welcome Message (Function without parameters)
// ================================================================
function displayWelcomeMessage() {
    let heading = document.getElementById("welcomeHeading");
    heading.innerText = "Welcome to Our Restaurant";
}
// Trigger on initial page load
displayWelcomeMessage();


// ================================================================
// TASK 2: Show Customer Name on Click (Function with parameter)
// ================================================================
function showCustomerName(customerName) {
    let resultContainer = document.getElementById("customerGreetingResult");
    resultContainer.innerHTML = `Hello, <strong>${customerName}</strong>!`;
}

function handleShowCustomerName() {
    let name = document.getElementById("custNameInput").value;
    if (name.trim() === "") {
        name = "Valued Customer";
    }
    showCustomerName(name);
}


// ================================================================
// TASK 3: Calculate Square of a Number (Function with parameter)
// ================================================================
function calculateSquare(num) {
    let square = num * num;
    let resultDisplay = document.getElementById("squareResult");
    resultDisplay.innerText = `Square of ${num} is: ${square}`;
}

function handleSquareCalculation() {
    let inputVal = document.getElementById("squareInput").value;
    if (inputVal === "") return;
    calculateSquare(parseFloat(inputVal));
}


// ================================================================
// TASK 4: Display Product and Price with Default Parameter (= 100)
// ================================================================
function displayProductAndPrice(productName, price = 100) {
    let outputBox = document.getElementById("defaultDemoResult");
    outputBox.innerHTML = `Product: <strong>${productName}</strong> | Price: <strong>₹${price}</strong>`;
}


// ================================================================
// TASK 5: Function to Greet with Default Name (= "Guest")
// ================================================================
function greetUser(userName = "Guest") {
    let outputBox = document.getElementById("defaultDemoResult");
    outputBox.innerHTML = `Hello, <strong>${userName}</strong>! Welcome to our service.`;
}


// ================================================================
// TASK 6: Dynamic Item Billing (Name, Quantity, Price)
// ================================================================
function calculateTotalBill(itemName, quantity, pricePerUnit) {
    let totalBill = quantity * pricePerUnit;
    let billingDiv = document.getElementById("billingResult");
    billingDiv.innerHTML = `Item: <strong>${itemName}</strong> | Qty: <strong>${quantity}</strong> × ₹${pricePerUnit} = Total: <strong>₹${totalBill}</strong>`;
}

function handleItemBilling() {
    let item = document.getElementById("billItemName").value;
    let qty = parseFloat(document.getElementById("billQty").value);
    let price = parseFloat(document.getElementById("billPrice").value);

    if (!item || isNaN(qty) || isNaN(price)) {
        alert("Please enter valid item name, quantity, and price.");
        return;
    }
    calculateTotalBill(item, qty, price);
}


// ================================================================
// TASK 7: Multi-Button Dynamic Menu Generator
// ================================================================
function showMenuItem(dishName, price) {
    let menuDiv = document.getElementById("menuResult");
    menuDiv.innerHTML = `Selected Menu Item: 🍽️ <strong>${dishName}</strong> — <strong>₹${price}</strong>`;
}


// ================================================================
// TASK 8: Smart Discount Calculator with Defaults (default = 10%)
// Uses a CALLBACK FUNCTION to format the calculation result
// ================================================================
function calculateDiscount(amount, discountPercent = 10, callbackFormatter) {
    let discountAmount = (amount * discountPercent) / 100;
    let finalAmount = amount - discountAmount;

    // Optional callback function support
    if (typeof callbackFormatter === "function") {
        return callbackFormatter(amount, discountPercent, finalAmount);
    }
    return finalAmount;
}

function handleDiscountCalculation() {
    let amount = parseFloat(document.getElementById("discountAmount").value);
    let discInput = document.getElementById("discountPercent").value;
    let resultElement = document.getElementById("discountResult");

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    let discountValue = (discInput === "") ? undefined : parseFloat(discInput);

    // Using callback function for formatted text output
    calculateDiscount(amount, discountValue, function(amt, disc, final) {
        resultElement.innerText = `Original Amount: ₹${amt} | Discount Applied: ${disc}% | Final Payable: ₹${final}`;
    });
}


// ================================================================
// TASK 9: Dynamic Summary Card Generator (4 Parameters)
// ================================================================
function generateSummaryCard(customerName, itemName, quantity, pricePerItem) {
    let total = quantity * pricePerItem;
    let cardContainer = document.getElementById("summaryCardContainer");

    cardContainer.innerHTML = `
        <div class="styled-summary-card">
            <h4>🧾 Order Summary</h4>
            <p><strong>Customer:</strong> ${customerName}</p>
            <p><strong>Item:</strong> ${itemName}</p>
            <p><strong>Quantity:</strong> ${quantity} unit(s)</p>
            <p><strong>Unit Price:</strong> ₹${pricePerItem}</p>
            <p class="total-highlight">Grand Total: ₹${total}</p>
        </div>
    `;
}

function handleSummaryCard() {
    let cust = document.getElementById("sumCustName").value;
    let item = document.getElementById("sumItemName").value;
    let qty = parseFloat(document.getElementById("sumQty").value);
    let price = parseFloat(document.getElementById("sumPrice").value);

    if (!cust || !item || isNaN(qty) || isNaN(price)) {
        alert("Please fill in all 4 order details.");
        return;
    }
    generateSummaryCard(cust, item, qty, price);
}


// ================================================================
// TASK 10: Interactive Quantity Updater with Live Total
// ================================================================
let currentItemQty = 1;
const itemUnitPrice = 150;

function updateLiveTotal(qty, pricePerUnit) {
    let total = qty * pricePerUnit;
    let liveTotalDiv = document.getElementById("liveTotalContainer");
    liveTotalDiv.innerHTML = `Live Total: <strong>₹${total}</strong>`;
}

function updateQuantity(change) {
    let newQty = currentItemQty + change;
    
    // Prevent quantity from dropping below 1
    if (newQty < 1) return;

    currentItemQty = newQty;
    document.getElementById("currentQty").innerText = currentItemQty;

    // Call function with parameters to recalculate live total
    updateLiveTotal(currentItemQty, itemUnitPrice);
}

// Initial total rendering for Task 10
updateLiveTotal(currentItemQty, itemUnitPrice);