document.addEventListener("DOMContentLoaded", () => {
    let myPara = document.getElementById("tip-cal");

    // 1. Tumne yahan function ki machine declare kar di (Banayi)
    function calculateBill(billValue, customerName) {
        let tipAmount = 0;

        // Ditto tumhara purana if-else logic, bas 'totalBill' ki jagah 'billValue' hai
        if (billValue > 1000) {
            tipAmount = billValue * 0.15;
        } else {
            tipAmount = billValue * 0.10;
        }

        let finalAmount = billValue + tipAmount;

        // UI par text dikhana
        if (myPara) {
            myPara.innerText = customerName + ", your total bill is Rs " + billValue + " and tip is Rs " + tipAmount + ", so the final amount is Rs " + finalAmount;
            
            if (billValue > 1000) {
                myPara.style.color = "green";
            } else {
                myPara.style.color = "orange"; // Chota bill toh orange color!
            }
        }
    }

    // 2. Machine ko call karo (Jitni baar chaho, alag-alag inputs ke sath!)
    calculateBill(1500, "Akash"); 
    
    // Agar tum chaho toh is line ko comment karke niche wali line chala kar check kar sakte ho:
    // calculateBill(800, "Vijay");
});
