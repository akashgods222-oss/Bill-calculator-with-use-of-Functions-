Today I made a tip calculator in which the tip is calculated on the basis of the bill amount. 

First, I created a paragraph in HTML to display the dynamic output. Then, I leveraged JavaScript to build a reusable, logic-driven function.

## 🚀 Key Features & Learning Milestones

*   **Asynchronous Script Loading:** Used `DOMContentLoaded` to ensure the JavaScript engine executes only after the DOM tree is fully parsed, eliminating `null` reference errors.
*   **Reusable Functional Architecture:** Wrapped the entire calculation logic inside a single `calculateBill(billValue, customerName)` function to make the code scalable and reusable for multiple inputs.
*   **Conditional Logic & State Management:** Implemented an `if-else` control flow to apply dynamic pricing rules based on the threshold:
    *   Bills **> ₹1000** attract a **15% tip**.
    *   Bills **<= ₹1000** attract a **10% tip**.
*   **Dynamic UI Manipulation:** Dynamically rendered string templates via `innerText` and manipulated element styles (`.style.color`) directly based on execution states.

## 🛠️ Tech Stack Used

*   **HTML5** (Semantic structure)
*   **JavaScript (ES6+)** (Functions, Event Listeners, Conditionals, and DOM API)

## 💻 Code Snippet Look

```javascript
// A sneak peek into the reusable function logic
function calculateBill(billValue, customerName) {
    let tipAmount = billValue > 1000 ? billValue * 0.15 : billValue * 0.10;
    let finalAmount = billValue + tipAmount;
    // DOM manipulation happens here dynamically!
}

