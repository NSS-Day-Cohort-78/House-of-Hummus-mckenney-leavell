import { saveOrders } from "./TransientState.js";

const handleOrderSubmission = (e) => {
    if (e.target.id === "purchase") {
        console.log("Order Saved")
        console.log(JSON.stringify(saveOrders()))
    }
    // if event id === purchase
        // save orders and stringify using JSON format
}

export const PurchaseButton = () => {
    document.addEventListener("click", handleOrderSubmission)
    return "<button id='purchase'>Purchase Combo</button>"
}
// make order button function
    // create event listener to store orders
    // return order button HTML