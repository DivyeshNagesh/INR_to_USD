function convert() {
    // Get the input value
    var amount = document.getElementById("amount").value;
  
    // Perform the conversion
    var rate = 0.014; // Use the current exchange rate between INR and USD
    var result = amount * rate;
  
    // Display the result
    document.getElementById("result").innerHTML = "Converted amount in USD: " + result.toFixed(2);
  }
  