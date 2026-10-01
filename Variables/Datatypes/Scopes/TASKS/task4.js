
function calculatePrice(price, taxRate = 5) {
    const taxAmount = (price * taxRate) / 100;
    const finalPrice = price + taxAmount;

    return {
        basePrice: price,
        taxRate: taxRate,
        taxAmount: taxAmount,
        finalPrice: finalPrice
    };
}


function handleCalculatePrice() {
    // 1. Get input values
    const priceInputValue = document.getElementById("priceInput").value.trim();
    const taxInputValue = document.getElementById("taxInput").value.trim();

  
    if (priceInputValue === "" || isNaN(priceInputValue) || Number(priceInputValue) < 0) {
        alert("Please enter a valid product price.");
        return;
    }

    const price = parseFloat(priceInputValue);

    
    let calculation;
    if (taxInputValue !== "" && !isNaN(taxInputValue) && Number(taxInputValue) >= 0) {
        const customTax = parseFloat(taxInputValue);
        calculation = calculatePrice(price, customTax);
    } else {
   
        calculation = calculatePrice(price);
    }

   
    document.getElementById("displayBasePrice").textContent = `₹${calculation.basePrice.toFixed(2)}`;
    document.getElementById("displayTaxLabel").textContent = `Tax Applied (${calculation.taxRate}%):`;
    document.getElementById("displayTaxAmount").textContent = `₹${calculation.taxAmount.toFixed(2)}`;
    document.getElementById("displayFinalPrice").textContent = `₹${calculation.finalPrice.toFixed(2)}`;

 
    document.getElementById("resultContainer").classList.remove("hidden");
}