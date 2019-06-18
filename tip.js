// Function that calculates the tip
function calculateTip(){
    
     // Store the values in variables
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var totalPeople = document.getElementById("totalPeople").value;
    
    // ========= Quick validation ==========
    
    
    // Checking the inputs should be numbers
    if(isNaN(billAmount) && isNaN(totalPeople)){
        
            window.alert("Please enter numbers to calclulate");
    }
    
    // If the user doesn't enter input
    if(billAmount === "" || serviceQuality === 0){
        return window.alert("Please enter values to calculate the result");
    }
    
    // If the number of people is empty or 0
    if(totalPeople === "" || totalPeople <= 0){
        
        totalPeople = 1;
        document.getElementById("each").style.display = "none";
    
    } else{
        
        document.getElementById("each").style.display = "inline";    
    }
    
    // Real Calculation
    var total = (billAmount * serviceQuality) / totalPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    
    // Display the tip
    document.getElementById("totalTip").style.display = "inline";
    document.getElementById("tip").innerHTML = total;
    
}




// First we hide the tip value and text

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Detect click and performs the function
document.getElementById("calculateTipButton").onclick = function(){ calculateTip();}