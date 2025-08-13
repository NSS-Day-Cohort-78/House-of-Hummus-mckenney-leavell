import { entreeOptions } from "./Entrees.js"
import { sideOptions } from "./SideDishes.js"
import { Sales } from "./Sales.js"
import { vegetableOptions } from "./Vegetables.js"
import { PurchaseButton } from "./PurchaseButton.js"
// import entrees, sides, veg

//create section to display food options

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreesHTML = await entreeOptions()
    const sidesHTML = await sideOptions()
    const vegetableHTML = await vegetableOptions()
    const button = PurchaseButton()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article>
            ${entreesHTML}
            ${sidesHTML}
            ${vegetableHTML}
        </article>

        <article>
            ${button}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
